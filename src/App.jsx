import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyDayPage from "./pages/MyDayPage";
import ImportantPage from "./pages/ImportantsPage";
import SingInPage from "./pages/SingInPage";
import Layout from "./layouts/Layout";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SingInPage />} />
          <Route path="/" element={<Layout />}>
            <Route path="/MyDay" element={<MyDayPage />} />
            <Route path="/Important" element={<ImportantPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
