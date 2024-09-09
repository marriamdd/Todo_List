import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function Layout() {
  return (
    <div
      style={{ fontSize: "62.5%" }}
      className="grid  grid-cols-12 min-h-screen"
    >
      <div className="col-span-2 hidden xl:flex  ">
        <SideBar />
      </div>

      <div className="col-span-12 xl:col-span-10 flex flex-col">
        <Header />

        <div className="flex-grow  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
