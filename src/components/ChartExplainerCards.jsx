import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
export default function ChartExplainerCards({ taskData }) {
  const { t } = useTranslation();
  const taskDataOptions = [
    { label: t("TotalTasks"), value: taskData.totalTasks },
    { label: t("CompletedTasks"), value: taskData.completedTasks },
    { label: t("LeftTasks"), value: taskData.leftTasks },
    { label: t("ImportantTasks"), value: taskData.importantTasks },
  ];
  console.log(taskData);
  return (
    <div className="grid  animate-fadeIn gap-[2.4rem] py-[2rem] grid-cols-2 xl:grid-cols-4 justify-center items-center">
      {taskDataOptions.map((task, index) => (
        <div
          key={index}
          className="card w-full h-[190px] bg-white shadow-md rounded-[8px]"
        >
          <h3 className="md:text-[20px] text-[1.6rem] p-[1rem] border-b border-b:#252931 ">
            {task.label}
          </h3>
          <div className="flex items-center w-full justify-center ">
            <p className="text-[32px] pt-[5rem] font-[500]">{task.value} </p>
          </div>
        </div>
      ))}
    </div>
  );
}

ChartExplainerCards.propTypes = {
  taskData: PropTypes.object.isRequired,
};
