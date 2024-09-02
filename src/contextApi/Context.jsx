import { createContext, useState } from "react";
import PropTypes from "prop-types";
const defaultContextValue = {
  currentEndPoint: "",
  setCurrentEndPoint: () => {},
  showMoreModal: {
    visible: false,
    position: null,
  },
  setShowMoreModal: () => {},
};

export const MyContext = createContext(defaultContextValue);

export const MyProvider = ({ children }) => {
  const [currentEndPoint, setCurrentEndPoint] = useState("MyDay");
  const [showMoreModal, setShowMoreModal] = useState({
    visible: false,
    position: null,
  });

  return (
    <MyContext.Provider
      value={{
        currentEndPoint,
        setCurrentEndPoint,
        showMoreModal,
        setShowMoreModal,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
