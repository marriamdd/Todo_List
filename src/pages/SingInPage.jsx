import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && user) {
      navigate("/");
    }
  }, [isLoaded, user, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SignIn />
    </div>
  );
}
