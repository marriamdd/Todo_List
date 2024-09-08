import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ children }) {
  const { userId } = useAuth();
  const location = useLocation();

  if (!userId) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;
