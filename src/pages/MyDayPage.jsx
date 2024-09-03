import { useState, useEffect } from "react";
import { supabase } from "../config/supabaseClient";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";

export default function MyDayPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase
        .from("todos")
        .select()
        .eq("user_id", "999");

      if (error) {
        console.log(error);
      } else {
        setTasks(data);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async (newTask) => {
    const { data, error } = await supabase
      .from("todos")
      .insert([newTask])
      .select();

    if (error) {
      console.log(error);
    } else {
      setTasks((prevTasks) => [...prevTasks, ...data]);
    }
  };

  return (
    <div>
      <AddTask addTask={addTask} />
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
