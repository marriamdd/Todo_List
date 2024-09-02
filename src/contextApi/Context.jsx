import { createContext, useState } from "react";
import PropTypes from "prop-types";
const defaultContextValue = {
  currentEndPoint: "",
  setCurrentEndPoint: () => {},
};

export const MyContext = createContext(defaultContextValue);

export const MyProvider = ({ children }) => {
  const [currentEndPoint, setCurrentEndPoint] = useState("MyDay");

  return (
    <MyContext.Provider value={{ currentEndPoint, setCurrentEndPoint }}>
      {children}
    </MyContext.Provider>
  );
};
MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
