import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useUser } from "@clerk/clerk-react";

const defaultContextValue = {
  currentEndPoint: "",
  setCurrentEndPoint: () => {},
  isDesktop: Boolean,
  setIsDesktop: () => {},
  tasks: [],
  setTasks: () => {},
  editDescription: { editId: null },
  setEditDescription: () => {},
  user: null,
  isLoaded: false,
  searchTask: "",
  setSearchtask: () => {},
};

export const MyContext = createContext(defaultContextValue);

export const MyProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [currentEndPoint, setCurrentEndPoint] = useState("MyDay");
  const [editDescription, setEditDescription] = useState({
    editId: null,
  });
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const { user, isLoaded } = useUser();
  const [searchTask, setSearchtask] = useState("");
  return (
    <MyContext.Provider
      value={{
        tasks,
        setTasks,
        currentEndPoint,
        setCurrentEndPoint,
        user,
        isLoaded,
        isDesktop,
        setIsDesktop,
        editDescription,
        setEditDescription,
        searchTask,
        setSearchtask,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
