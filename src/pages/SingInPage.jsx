import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignUp as ClerkSignUp } from "@clerk/clerk-react";

export default function SignInPage() {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && user) {
      navigate("/MyDay");
    }
  }, [isLoaded, user, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ClerkSignUp
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg",
            formFieldInput:
              "border border-gray-300 w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            headerTitle: "text-2xl font-semibold text-gray-800 mb-4",
            formFieldLabel: " w-full text-sm font-medium text-gray-700",

            card: "w-full  p-8 bg-white rounded-lg shadow-md",
            container: "flex items-center justify-center min-h-screen",
          },
        }}
      />
    </div>
  );
}
