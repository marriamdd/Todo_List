import PropTypes from "prop-types";
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/SignIn" replace />;
  }

  return element;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
