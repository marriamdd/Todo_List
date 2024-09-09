import { useState, useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { MyContext } from "../contextApi/Context";
import { useTranslation } from "react-i18next";
import { useClickOutsideEffect } from "@/customHooks/useClickOutsideEffect";
export default function AddTask({ addTask }) {
  const [openInput, setOpenInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef(null);
  const { setTasks, user } = useContext(MyContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue) {
      const newTask = {
        user_id: user.id,
        description: inputValue,
        complate: false,
        important: false,
      };

      const addedTask = await addTask(newTask);

      if (addedTask) {
        setTasks((prevTasks) => [...prevTasks, addedTask]);
      }

      setOpenInput(false);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  useClickOutsideEffect(textareaRef, () => setOpenInput(false), openInput);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);
  const { t } = useTranslation();
  return (
    <div className="w-full flex justify-center pt-[32px] pb-[40px]">
      {!openInput ? (
        <div
          onClick={() => setOpenInput(true)}
          className="flex w-[343px] xl:w-[570px] shadow-custom h-[50px] rounded-[8px] px-[1rem] py-[13px] gap-[1rem] cursor-pointer"
        >
          <img
            className="w-[24px] h-[24px]"
            src="/assets/task_icons/lets-icons_add-round.svg"
            alt="plus"
          />
          <span className="text-[16px] font-[400] text-textColor ">
            {t("AddTask")}
          </span>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            ref={textareaRef}
            className="w-[343px] text-[16px] font-[400] text-textColor leading-[24px] xl:w-[570px] shadow-custom rounded-[8px] px-[9px] py-[14px]  resize-none overflow-hidden"
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
AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
  setTasks: PropTypes.func.isRequired,
};
