import { Link, useLocation } from "react-router-dom";
import { MyContext } from "../contextApi/Context";
import { useContext, useEffect } from "react";

export default function SideBar() {
  const { currentEndPoint, setCurrentEndPoint } = useContext(MyContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/MyDay") {
      setCurrentEndPoint("MyDay");
    } else if (location.pathname === "/Important") {
      setCurrentEndPoint("Important");
    }
  }, [location.pathname, setCurrentEndPoint]);

  return (
    <div className="bg-[#F6F6F7] border-r-[1px] border-l-greyBorder pt-[10.1rem] pl-[2.4rem] flex flex-col w-full">
      <Link to="/MyDay">
        <div
          className={`flex items-center gap-[1.2rem] rounded-[0.4rem] px-[1rem] py-[1.6rem] w-[25.2rem] h-[4.8rem] ${
            currentEndPoint === "MyDay" ? "bg-[#E7E8EA]" : ""
          }`}
        >
          <img src="/assets/modal_icons/ph_sun-light.svg" alt="My_Day" />
          <span className="text-textColor text-[1.4rem] font-[400]">
            My day
          </span>
        </div>
      </Link>
      <Link to="/Important">
        <div
          className={`flex items-center gap-[1.2rem] rounded-[0.4rem] px-[1rem] py-[1.6rem] w-[25.2rem] h-[4.8rem] ${
            currentEndPoint === "Important" ? "bg-[#E7E8EA]" : ""
          }`}
        >
          <img src="/assets/modal_icons/ph_star-thin.svg" alt="Important" />
          <span className="text-textColor text-[1.4rem] font-[400]">
            Important
          </span>
        </div>
      </Link>
    </div>
  );
}
