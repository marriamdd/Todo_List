import { useContext, useState } from "react";
import { MyContext } from "../contextApi/Context";
import MoreModal from "./MoreModal";
import PropTypes from "prop-types";
import { useClickOutsideEffect } from "../customHooks/useClickOutsideEffect";
import { useResizeEffect } from "../customHooks/useResizeEffect";
import { format } from "date-fns";
export default function TaskCard({ task }) {
  const { showMoreModal, setShowMoreModal, isDesktop } = useContext(MyContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useClickOutsideEffect(isModalOpen, () =>
    setIsModalOpen(false)
  );
  useResizeEffect(isModalOpen, () => setIsModalOpen(false));

  const handleMoreClick = (position) => {
    if (showMoreModal.taskId === task.id && isModalOpen) {
      setIsModalOpen(false);
    } else {
      setShowMoreModal({ taskId: task.id, position });
      setIsModalOpen(true);
    }
  };
  console.log(task.created_at);
  const dateStr = task.created_at;
  const date = new Date(dateStr);

  const formattedDate = format(date, "dd/MM/yy");

  return (
    <div className="xl:w-[25.2rem] relative rounded-[1rem] w-[34.3rem] h-[100%] pt-[1.2rem] mb-[1rem] px-[1.6rem] bg-[red]">
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
          <img
            onClick={() => {
              if (isDesktop) handleMoreClick("top");
            }}
            className={`xl:cursor-pointer xl:hover:opacity-[1] ${
              showMoreModal.taskId === task.id &&
              showMoreModal.position === "top" &&
              isModalOpen
                ? "opacity-[1]"
                : "opacity-0"
            }`}
            src="/assets/task_icons/mingcute_more-2-line.svg"
            alt="more"
          />
        </div>
        {showMoreModal.taskId === task.id &&
          showMoreModal.position === "top" &&
          isModalOpen && (
            <div ref={modalRef}>
              <MoreModal top={"4.5rem"} left={"3.8rem"} />
            </div>
          )}
      </div>

      <p className="pb-[2.6rem] pt-[1.6rem] text-textColor text-[1.4rem] font-[400] leading-[20px]">
        {task.description}
      </p>
      <div className="w-full flex hover:opacity-[1] justify-end pb-[1.4rem]">
        <img
          onClick={() => handleMoreClick("bottom")}
          className={`cursor-pointer hover:opacity-[1] ${
            showMoreModal.taskId === task.id &&
            showMoreModal.position === "bottom" &&
            isModalOpen
              ? "xl:opacity-[1]"
              : "xl:opacity-0"
          }`}
          src="/assets/task_icons/mingcute_more-2-line.svg"
          alt="more"
        />
      </div>
      {showMoreModal.taskId === task.id &&
        showMoreModal.position === "bottom" &&
        isModalOpen && (
          <div ref={modalRef}>
            <MoreModal taskId={task.id} />
          </div>
        )}
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
