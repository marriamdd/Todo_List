import AddTask from "../components/AddTask";

import TaskCard from "../components/TaskCard";
import { useContext, useEffect, useState } from "react";
import { supabase } from "@/config/supabaseClient";
import { MyContext } from "@/contextApi/Context";

const ImportantPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, isLoaded } = useContext(MyContext);

  useEffect(() => {
    console.log("User:", user);
    console.log("Is Loaded:", isLoaded);

    if (!isLoaded) {
      console.error("User data is still loading");
      return;
    }

    if (!user) {
      console.error("User is not available");
      setLoading(false);
      return;
    }

    const fetchImportantTasks = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("todos")
          .select("*")
          .eq("important", true)
          .eq("user_id", user.id);
        if (error) throw error;
        setTasks(data);
      } catch (error) {
        console.error("Error fetching important tasks:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImportantTasks();
  }, [user, isLoaded]);

  if (loading) return <p>Loading...</p>;
  console.log(tasks, "ll");
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
      {tasks.length > 0 ? (
        <div>
          <AddTask addTask={addTask} setTasks={setTasks} />
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      ) : (
        <p>No important tasks found.</p>
      )}
    </div>
  );
};

export default ImportantPage;
