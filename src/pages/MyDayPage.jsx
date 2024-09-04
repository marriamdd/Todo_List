import { useEffect, useContext } from "react";
import AddTask from "../components/AddTask";
import { supabase } from "../config/supabaseClient";
import TaskCard from "../components/TaskCard";
import { MyContext } from "../contextApi/Context";

export default function MyDayPage() {
  const { tasks, setTasks, user, isLoaded, searchTask } = useContext(MyContext);
  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase
        .from("todos")
        .select("*")
        .eq("user_id", user.id);
      if (error) console.error("Error fetching tasks:", error);
      else setTasks(data);
    };
    fetchTasks();
  }, [user, isLoaded]);
  console.log(tasks, "tasks");
  const addTask = async (task) => {
    const { data, error } = await supabase
      .from("todos")
      .insert([task])
      .select()
      .single();
    if (error) {
      console.error("error adding task:", error);
      return null;
    }
    return data;
  };
  return (
    <div>
      {searchTask.length > 2 ? (
        <div>
          <AddTask addTask={addTask} setTasks={setTasks} />
          {tasks
            .filter((task) => task.description.includes(searchTask))
            .map((filteredTask) => (
              <TaskCard key={filteredTask.id} task={filteredTask} />
            ))}
        </div>
      ) : (
        <div>
          <AddTask addTask={addTask} setTasks={setTasks} />
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}
