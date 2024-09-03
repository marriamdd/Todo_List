import { createContext, useState } from "react";
import PropTypes, { number } from "prop-types";
const defaultContextValue = {
  currentEndPoint: "",
  setCurrentEndPoint: () => {},
  showMoreModal: {
    taskId: number | null,
    position: null,
  },
  setShowMoreModal: () => {},
  isDesktop: Boolean,
  setIsDesktop: () => {},
  tasks: [],
  setTasks: () => {},
};

export const MyContext = createContext(defaultContextValue);

export const MyProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [currentEndPoint, setCurrentEndPoint] = useState("MyDay");
  const [showMoreModal, setShowMoreModal] = useState({
    taskId: number | null,
    position: null,
  });
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
  return (
    <MyContext.Provider
      value={{
        tasks,
        setTasks,
        currentEndPoint,
        setCurrentEndPoint,
        showMoreModal,
        setShowMoreModal,
        isDesktop,
        setIsDesktop,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
