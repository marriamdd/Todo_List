import { supabase } from "@/config/supabaseClient";

export const handleImportant = async (taskId, tasks, setTasks, user) => {
  const taskToUpdate = tasks.find((task) => task.id === taskId);

  if (taskToUpdate) {
    const updatedTask = {
      ...taskToUpdate,
      important: !taskToUpdate.important,
    };

    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? updatedTask : task))
    );

    const { data, error } = await supabase
      .from("todos")
      .update({ important: updatedTask.important })
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
