import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyDayPage from "./pages/MyDayPage";
import ImportantPage from "./pages/ImportantsPage";
import SignInPage from "./pages/SingInPage";
import Layout from "./layouts/Layout";
import DeashBoardPage from "./pages/DeashBoardPage";
import { QueryClient, QueryClientProvider } from "react-query";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import AuthLayout from "./layouts/AuthLayout";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <MyDayPage />,
      },
      {
        path: "/Important",
        element: <ImportantPage />,
      },
      {
        path: "/DeashBoard",
        element: <DeashBoardPage />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <SignInPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
