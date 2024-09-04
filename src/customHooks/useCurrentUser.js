import { useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react";

const useCurrentUser = () => {
  const { user, isLoaded } = useUser();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (isLoaded && user) {
      setCurrentUser(user);
    }
  }, [isLoaded, user]);

  return { currentUser, isLoaded };
};

export default useCurrentUser;
