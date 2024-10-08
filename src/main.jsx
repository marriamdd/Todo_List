import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MyProvider } from "./contextApi/Context.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import "./i18n.js";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} beforeSignOutUrl="/login">
      <MyProvider>
        <App />
      </MyProvider>
    </ClerkProvider>
  </StrictMode>
);
