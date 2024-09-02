import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function Layout() {
  return (
    <div className="grid grid-cols-4 min-h-screen">
      <div className="col-span-1 hidden xl:flex  ">
        <SideBar />
      </div>

      <div className="col-span-4 xl:col-span-3 flex flex-col">
        <Header />

        <div className="flex-grow  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
