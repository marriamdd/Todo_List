import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { MyContext } from "@/contextApi/Context";
import { useContext, useEffect, useState } from "react";
import { supabase } from "@/config/supabaseClient";
import ChartExplainerCards from "./ChartExplainerCards";
Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
  const { setTasks, user } = useContext(MyContext);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "# of Tasks",
        data: [],
        backgroundColor: ["#00A9D7", "#FFA400", "#80BC00", "#6E7C7C"],
      },
    ],
  });
  let totalTasks;
  let importantTasks;
  let leftTasks;
  let completedTasks;
  const [taskData, setTaskData] = useState({
    totalTasks: 0,
    importantTasks: 0,
    completedTasks: 0,
    leftTasks: 0,
  });
  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase
        .from("todos")
        .select("*")
        .eq("user_id", user.id);
      if (error) console.error("Error fetching tasks:", error);
      else {
        setTasks(data);

        totalTasks = data.length;
        importantTasks = data.filter((task) => task.important).length;
        leftTasks = totalTasks - importantTasks;
        completedTasks = data.filter((task) => task.complate).length;
        setTaskData({
          totalTasks,
          importantTasks,
          completedTasks,
          leftTasks,
        });
        setChartData({
          labels: [
            "Your Activities",
            "Important Tasks",
            "Done Tasks",
            "Waiting to do",
          ],
          datasets: [
            {
              label: "# of Tasks",
              data: [totalTasks, importantTasks, completedTasks, leftTasks],
              backgroundColor: ["#00A9D7", "#FFA400", "#80BC00", "#6E7C7C"],
            },
          ],
        });
      }
    };
    fetchTasks();
  }, [user]);

  const options = {
    plugins: {
      datalabels: {
        color: "#fff",
        display: true,
        formatter: (value, context) => {
          const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(0);
          return `${percentage}%`;
        },
        font: {
          weight: "bold",
        },
        align: "center",
        anchor: "center",
      },
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const total = tooltipItem.dataset.data.reduce(
              (acc, val) => acc + val,
              0
            );
            const currentValue = tooltipItem.raw;
            const percentage = ((currentValue / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${currentValue} (${percentage}%)`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="px-[2rem] animate-fadeIn">
      <ChartExplainerCards taskData={taskData} />

      <div className="transition-all duration-[1s] ease-in flex flex-col items-center  bg-[#FFF] border border-[#E7E8EA] rounded-[8px] w-[100%] px-[1rem] h-[564px]  md:h-[468px]">
        <div className="w-full p-[1rem] border-b border-b:#D7D9DD">
          <span className="text-[20px]">Task by Status</span>
        </div>
        <div className=" transition-all duration-[1s] ease-in flex flex-col md:flex-row xl:justify-center items-center pt-[2rem] gap-[4rem] md:gap-[14rem]">
          <div className="md:w-[33.5rem]  md:h-[32.5rem] transition-all duration-[1s] ease-in w-[232px] h-[225px]">
            <Pie data={chartData} options={options} />
          </div>
          <div className="ml-[24px] flex  gap-[2rem] flex-col">
            {chartData.labels.map((label, index) => (
              <div key={label} className="flex items-center mb-2">
                <div
                  className="w-[24px] h-[24px] rounded-full"
                  style={{
                    backgroundColor:
                      chartData.datasets[0].backgroundColor[index],
                  }}
                ></div>
                <span className="ml-[8px] text-[16px] leading-[2rem]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
