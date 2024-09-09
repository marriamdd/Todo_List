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
    if (!isLoaded || !user) return;

    const fetchImportantTasks = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("todos")
          .select("*")
          .eq("important", true)
          .eq("user_id", user.id);
        if (error) throw error;
        setTasks(data || []);
      } catch (error) {
        console.error("Error fetching important tasks:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImportantTasks();
  }, [user, isLoaded]);

  const addTask = async (task) => {
    const { data, error } = await supabase
      .from("todos")
      .insert([task])
      .select()
      .single();

    if (error) {
      console.error("Error adding task:", error.message);
      return null;
    }

    setTasks((prevTasks) => [...prevTasks, data]);
    return data;
  };

  return (
    <div className="animate-fadeIn p-4">
      {!loading && tasks.length === 0 ? (
        <div className="flex items-center pt-[2rem] justify-center">
          <img src="/assets/empty/oc-empty-cart.svg" alt="No important tasks" />
        </div>
      ) : (
        tasks.length > 0 && (
          <div>
            <AddTask addTask={addTask} setTasks={setTasks} />
            <div className="md:columns-2  xl:columns-4 gap-[24px]">
              {tasks.map((task) => (
                <TaskCard BGcolor={"#E3EBFC"} key={task.id} task={task} />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ImportantPage;
