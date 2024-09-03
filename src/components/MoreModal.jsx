import { useContext } from "react";
import { MyContext } from "../contextApi/Context";
import PropTypes from "prop-types";
import { supabase } from "../config/supabaseClient";
export default function MoreModal({ taskId }) {
  const { tasks, setTasks } = useContext(MyContext);
  const options = [
    {
      icon: "/assets/modal_icons/ph_star-thin.svg",
      name: "Importance",
    },
    {
      icon: "/assets/task_icons/eva_radio-button-off-outline.svg",
      name: "Complete",
    },
    {
      icon: "/assets/task_icons/iconamoon_edit-light.svg",
      name: "Edit",
    },
    {
      icon: "/assets/task_icons/fluent_delete-28-regular.svg",
      name: "Delete",
    },
  ];
  const { showMoreModal } = useContext(MyContext);
  const handleOptionClick = async (option) => {
    switch (option) {
      case "Delete": {
        const deleted = tasks.filter((task) => task.id !== taskId);

        setTasks(deleted);
        const { data, error } = await supabase
          .from("todos")
          .delete()
          .eq("id", taskId, "user_id", "999");
        if (error) {
          console.log(error.message);
        }
        if (data) {
          console.log(data);
        }
      }
    }
  };
  return (
    <>
      {showMoreModal && (
        <div
          className={`flex absolute bg-[#F6F6F7] flex-col rounded-[0.8rem] w-[192px] h-[19.6rem] px-[1.6rem] py-[0.5rem] shadow-custom
            ${
              showMoreModal.position == "bottom"
                ? "xl:top-[25rem] xl:left-[20.8rem] top-[21.5rem] left-[30.8rem] "
                : showMoreModal.position == "top"
                ? " top-[4.5rem] left-[3.8rem]"
                : ""
            }


            `}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className={`flex cursor-pointer py-[1rem] gap-[1.2rem] items-center ${
                index >= 1 ? "border-b-[1px] border-b-[#E8E9EB]" : ""
              } `}
            >
              <img src={option.icon} alt={`${option.name}_icon`} />
              <span onClick={() => handleOptionClick(option.name)}>
                {option.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
MoreModal.propTypes = {
  taskId: PropTypes.number.isRequired,
};
