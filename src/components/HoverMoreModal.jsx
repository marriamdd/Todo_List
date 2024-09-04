import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import PropTypes from "prop-types";
import { useContext } from "react";
import { MyContext } from "@/contextApi/Context";
import { supabase } from "@/config/supabaseClient";
import { handleImportant } from "@/customHooks/handleImportant";
import { handleCompleted } from "@/customHooks/handleCompleted";
export function HoverMoreModal({ taskId, complate, important }) {
  const { tasks, setTasks, setEditDescription, user } = useContext(MyContext);
  const options = [
    {
      icon: important
        ? "public/assets/task_icons/icons8-star-48.png"
        : "/assets/modal_icons/ph_star-thin.svg",

      name: "Importance",
    },
    {
      icon: complate
        ? "/assets/task_icons/icons8-filled-circle-24.png"
        : "/assets/task_icons/eva_radio-button-off-outline.svg",
      name: complate ? "Completed" : "Complete",
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

  const handleOptionClick = async (option) => {
    switch (option) {
      case "Delete":
        {
          const deleted = tasks.filter((task) => task.id !== taskId);

          setTasks(deleted);
          const { data, error } = await supabase
            .from("todos")
            .delete()
            .eq("id", taskId)
            .eq("user_id", user.id);
          if (error) {
            console.log(error.message);
          }
          if (data) {
            console.log(data);
          }
        }
        break;
      case "Edit":
        {
          setEditDescription(() => ({
            editId: taskId,
          }));
        }
        break;
      case "Complete":
      case "Completed":
        {
          handleCompleted(taskId, tasks, setTasks, user);
        }
        break;
      case "Importance": {
        handleImportant(taskId, tasks, setTasks, user);
        break;
      }
    }
  };

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <img
          className="cursor-pointer md:opacity-0 hover:opacity-[1]"
          src="/assets/task_icons/mingcute_more-2-line.svg"
          alt="more"
        />
      </HoverCardTrigger>
      <HoverCardContent className="w-[188px] xl:w-[192px] rounded-[8px]">
        {options.map((option, index) => (
          <div
            onClick={() => handleOptionClick(option.name)}
            key={index}
            className={`flex cursor-pointer hover:bg-[#E7E8EA] w-full py-[1rem] px-[1.6rem] gap-[1.2rem] items-center
               ${index >= 1 ? "border-b-[1px] border-b-[#E8E9EB]" : ""} `}
          >
            <img
              className="w-[24px] h-[24px]"
              src={option.icon}
              alt={`${option.name}_icon`}
            />

            <span>{option.name}</span>
          </div>
        ))}
      </HoverCardContent>
    </HoverCard>
  );
}
HoverMoreModal.propTypes = {
  taskId: PropTypes.number,
  complate: PropTypes.bool,
  important: PropTypes.bool,
};
