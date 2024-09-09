import { useContext, useEffect, useState, useRef } from "react";
import { MyContext } from "../contextApi/Context";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { supabase } from "../config/supabaseClient";
import chroma from "chroma-js";
import { HoverMoreModal } from "./HoverMoreModal";

export default function TaskCard({ task, BGcolor }) {
  const { isDesktop, editDescription, setEditDescription, user } =
    useContext(MyContext);

  const textareaRef = useRef(null);
  const [updatedDescription, setUpdatedDescription] = useState(
    task.description
  );

  const formattedDate = format(new Date(task.created_at), "dd/MM/yy");

  const handleChangeDescription = (e) => setUpdatedDescription(e);

  const handleEndEditing = async (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      setEditDescription(() => ({ editId: null }));
      const { data, error } = await supabase
        .from("todos")
        .update({ description: updatedDescription })
        .eq("id", task.id)
        .eq("user_id", user.id);
      if (data) console.log(data);
      if (error) console.log(error.message);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [updatedDescription]);

  const pastelColor = chroma
    .hsl(Math.floor(Math.random() * 360), 0.7, 0.85)
    .hex();
  const lightColorRef = useRef(pastelColor);

  return (
    <div
      style={{ background: BGcolor || lightColorRef.current }}
      className="relative xl:max-w-[260px] shadow-md break-inside-avoid-column rounded-lg p-[10px] mb-4"
    >
      <div className="flex justify-between items-center">
        <div className="bg-[#FDF8F2]  w-auto h-[30px] px-[10px] rounded-full flex justify-center gap-2 items-center">
          <img
            className="w-6 h-6"
            src="/assets/task_icons/material-symbols-light_date-range-outline.svg"
            alt="date"
          />
          <span className="text-[14px] font-normal text-textColor leading-6">
            {formattedDate}
          </span>
        </div>
        {isDesktop && (
          <div className="flex-grow hidden md:flex justify-end">
            <HoverMoreModal
              taskId={task.id}
              complate={task.complate}
              important={task.important}
            />
          </div>
        )}
      </div>

      {editDescription.editId === task.id ? (
        <textarea
          ref={textareaRef}
          className="w-full mt-4 bg-transparent shadow-lg rounded-lg px-4 py-3 resize-none overflow-hidden"
          onKeyDown={handleEndEditing}
          rows={1}
          onChange={(e) => handleChangeDescription(e.target.value)}
          value={updatedDescription}
        ></textarea>
      ) : (
        <p className="pt-4 text-textColor break-words text-[14px] font-normal leading-6">
          {updatedDescription}
        </p>
      )}

      <div className="flex justify-end pb-[10px]">
        <HoverMoreModal
          taskId={task.id}
          complate={task.complate}
          important={task.important}
        />
      </div>
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    complate: PropTypes.bool,
    important: PropTypes.bool,
  }).isRequired,
  BGcolor: PropTypes.string,
};
