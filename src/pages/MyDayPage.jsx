import { useEffect, useContext } from "react";
import AddTask from "../components/AddTask";
import { supabase } from "../config/supabaseClient";
import TaskCard from "../components/TaskCard";
import { MyContext } from "../contextApi/Context";

export default function MyDayPage() {
  const { tasks, setTasks, user, searchTask } = useContext(MyContext);

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
  }, [user, setTasks]);

  const addTask = async (task) => {
    const { data, error } = await supabase
      .from("todos")
      .insert([task])
      .select()
      .single();
    if (error) {
      console.error("Error adding task:", error);
      return null;
    }
    return data;
  };
  // md:columns-2  xl:columns-4
  return (
    <div className="animate-fadeIn p-4">
      <AddTask addTask={addTask} setTasks={setTasks} />
      <div
        className="
md:columns-2  xl:columns-4 gap-8
        
       "
      >
        {searchTask.length > 2
          ? tasks
              .filter((task) =>
                task.description
                  .toLowerCase()
                  .includes(searchTask.toLowerCase())
              )
              .map((filteredTask) => (
                <TaskCard key={filteredTask.id} task={filteredTask} />
              ))
          : tasks.map((task) => <TaskCard key={task.id} task={task} />)}
      </div>
    </div>
  );
}
