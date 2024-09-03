import { useContext } from "react";
import { MyContext } from "../contextApi/Context";
import MoreModal from "./MoreModal";
import PropTypes from "prop-types";
import { useClickOutsideEffect } from "../customHooks/useClickOutsideEffect";
import { useResizeEffect } from "../customHooks/useResizeEffect";
export default function TaskCard({ task }) {
  const { setShowMoreModal, showMoreModal } = useContext(MyContext);

  const modalRef = useClickOutsideEffect(showMoreModal, setShowMoreModal);
  useResizeEffect(showMoreModal, setShowMoreModal);
  console.log("task", task);
  return (
    <div className="xl:w-[25.2rem] relative rounded-[1rem] w-[34.3rem] h-[100%] pt-[1.2rem] px-[1.6rem]  bg-[red]">
      <div className="flex justify-between items-center">
        <div className="bg-[#FDF8F2]  w-[12.6rem] h-[3rem] rounded-[3rem] flex justify-center gap-[0.5rem] items-center ">
          <img
            className="w-[2.2rem] h-[2.2rem]"
            src="/assets/task_icons/material-symbols-light_date-range-outline.svg"
            alt="date"
          />

          <span className="text-[1.4rem] font-[400] text-textColor leading-[2rem]">
            4/03/2024
          </span>
        </div>
        <div className={` w-[12.6rem] flex justify-end  `}>
          <img
            onClick={() => {
              setShowMoreModal((prevState) => ({
                position: "top",
                visible: !prevState.visible,
              }));
            }}
            className={` xl:cursor-pointer xl:hover:opacity-[1] ${
              showMoreModal.position == "top" && showMoreModal.visible
                ? "opacity-[1]"
                : "opacity-0"
            }`}
            src="/assets/task_icons/mingcute_more-2-line.svg"
            alt="more"
          />
        </div>
        {showMoreModal.position == "top" && showMoreModal.visible && (
          <div ref={modalRef}>
            <MoreModal top={"4.5rem"} left={"3.8rem"} />
          </div>
        )}
      </div>

      <p className="pb-[2.6rem] pt-[1.6rem] text-textColor text-[1.4rem] font-[400] leading-[20px]">
        {task.description}
      </p>
      <div
        className={`w-full  flex  hover:opacity-[1] justify-end pb-[1.4rem]
     `}
      >
        <img
          onClick={() => {
            setShowMoreModal((prev) => ({
              position: "bottom",
              visible: !prev.visible,
            }));
          }}
          className={`  cursor-pointer hover:opacity-[1] ${
            showMoreModal.position == "bottom" && showMoreModal.visible
              ? "xl:opacity-[1]"
              : "xl:opacity-0"
          }`}
          src="/assets/task_icons/mingcute_more-2-line.svg"
          alt="more"
        />
      </div>
      {showMoreModal.position == "bottom" && showMoreModal.visible && (
        <div ref={modalRef}>
          <MoreModal />
        </div>
      )}
    </div>
  );
}
TaskCard.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string.isRequired,
  }).isRequired,
};
