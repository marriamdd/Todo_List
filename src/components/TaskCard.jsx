import { useContext, useEffect, useState } from "react";
import { MyContext } from "../contextApi/Context";

import PropTypes from "prop-types";

import { useResizeEffect } from "../customHooks/useResizeEffect";
import { format } from "date-fns";
import { useRef } from "react";
import { supabase } from "../config/supabaseClient";
import chroma from "chroma-js";

import { HoverMoreModal } from "./HoverMoreModal";
export default function TaskCard({ task }) {
  const { isDesktop, editDescription, setEditDescription } =
    useContext(MyContext);

  const textareaRef = useRef(null);

  console.log(task.created_at);
  const dateStr = task.created_at;
  const date = new Date(dateStr);
  let OldDescription = task.description;
  const [updatedDescription, setUpdatedDescription] = useState(OldDescription);

  const formattedDate = format(date, "dd/MM/yy");
  const handleChangeDescription = (e) => {
    console.log(e);
    setUpdatedDescription(e);
  };
  const handleEndEditing = async (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      setEditDescription(() => ({ editId: null }));
      const { data, error } = await supabase
        .from("todos")
        .update({ description: updatedDescription })
        .eq("id", task.id, "user_id", "999");
      if (data) {
        console.log(data);
      }
      if (error) {
        console.log(error.message);
      }
    }
  };
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [updatedDescription]);

  const hue = Math.floor(Math.random() * 360);
  const pastelColor = chroma.hsl(hue, 0.7, 0.85).hex();
  const lightColorRef = useRef(pastelColor);
  console.log(editDescription.editId == task.id);
  useResizeEffect();
  return (
    <div
      style={{ background: lightColorRef.current }}
      className="xl:w-[25.2rem] relative rounded-[1rem] w-[34.3rem] h-[100%] pt-[1.2rem] mb-[1rem] px-[1.6rem] "
    >
      <div className="flex justify-between items-center">
        <div className="bg-[#FDF8F2] w-[12.6rem] h-[3rem] rounded-[3rem] flex justify-center gap-[0.5rem] items-center">
          <img
            className="w-[2.2rem] h-[2.2rem]"
            src="/assets/task_icons/material-symbols-light_date-range-outline.svg"
            alt="date"
          />
          <span className="text-[1.4rem] font-[400] text-textColor leading-[2rem]">
            {formattedDate}
          </span>
        </div>
        <div className="w-[12.6rem] flex justify-end">
          {isDesktop && <HoverMoreModal taskId={task.id} />}
        </div>
      </div>

      {editDescription.editId == task.id ? (
        <textarea
          ref={textareaRef}
          className="w-[30rem] mt-[1rem]  xl:w-[22rem] bg-transparent shadow-custom rounded-[0.8rem] px-[1rem] py-[1.4rem] gap-[1rem] resize-none overflow-hidden"
          onKeyDown={handleEndEditing}
          rows={1}
          onChange={(e) => handleChangeDescription(e.target.value)}
          value={updatedDescription}
        ></textarea>
      ) : (
        <p className="pb-[2.6rem] pt-[1.6rem] text-textColor text-[1.4rem] font-[400] leading-[20px]">
          {updatedDescription}
        </p>
      )}

      <div className="w-full flex hover:opacity-[1] justify-end pb-[1.4rem]">
        <HoverMoreModal taskId={task.id} />
      </div>
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};
