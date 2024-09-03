import { useState, useEffect } from "react";
import AddTask from "../components/AddTask";
import { supabase } from "../config/supabaseClient";
import TaskCard from "../components/TaskCard";
export default function MyDayPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase
        .from("todos")
        .select("*")
        .eq("user_id", "999");
      if (error) console.error("Error fetching tasks:", error);
      else setTasks(data);
    };
    fetchTasks();
  }, []);

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
      <AddTask addTask={addTask} setTasks={setTasks} />
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
