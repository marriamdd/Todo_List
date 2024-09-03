import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyDayPage from "./pages/MyDayPage";
import ImportantPage from "./pages/ImportantsPage";
import SingInPage from "./pages/SingInPage";
import Layout from "./layouts/Layout";
import DeashBoardPage from "./pages/DeashBoardPage";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<SingInPage />} />
          <Route path="/" element={<Layout />}>
            <Route path="/MyDay" element={<MyDayPage />} />
            <Route path="/Important" element={<ImportantPage />} />
            <Route path="/DeashBoard" element={<DeashBoardPage />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
