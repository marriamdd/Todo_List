import { supabase } from "../config/supabaseClient";
import { useState, useRef, useEffect } from "react";

export default function AddTask() {
  const [openInput, setOpenInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("input", inputValue);
    setOpenInput(false);
    setInputValue("");
    if (inputValue) {
      console.log("filled");
      const { data, error } = await supabase
        .from("todos")
        .insert([
          {
            // user_id: "999",
            description: "ლლლ",
            complate: false,
            important: false,
          },
        ])
        .select();
      if (error) {
        console.log(error);
      }
      if (data) {
        console.log(data);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  return (
    <div className="w-full flex justify-center">
      {!openInput ? (
        <div
          onClick={() => setOpenInput(true)}
          className="flex w-[34.3rem] xl:w-[57rem] shadow-custom h-[4.8rem] rounded-[0.8rem] px-[1rem] py-[1.4rem] gap-[1rem] cursor-pointer"
        >
          <img
            className="w-[24px] h-[24px]"
            src="/assets/task_icons/lets-icons_add-round.svg"
            alt="plus"
          />
          <span className="text-[1.6rem] font-[400] text-textColor leading-[2.4rem]">
            Add a task
          </span>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            ref={textareaRef}
            className="w-[34.3rem] xl:w-[57rem] shadow-custom rounded-[0.8rem] px-[1rem] py-[1.4rem] gap-[1rem] resize-none overflow-hidden"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your task"
            rows={1}
            onKeyDown={handleKeyDown}
          />
        </form>
      )}
    </div>
  );
}
