import { supabase } from "@/config/supabaseClient";
export const handleCompleted = async (taskId, tasks, setTasks, user) => {
  const taskToUpdate = tasks.find((task) => task.id === taskId);

  if (taskToUpdate) {
    const updatedTask = {
      ...taskToUpdate,
      complate: !taskToUpdate.complate,
    };

    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? updatedTask : task))
    );

    const { data, error } = await supabase
      .from("todos")
      .update({ complate: updatedTask.complate })
      .eq("id", taskId)
      .eq("user_id", user.id);
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error.message);
    }
  }
  console.log(taskToUpdate);
};
