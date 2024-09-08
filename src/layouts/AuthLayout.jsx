import { Outlet } from "react-router-dom";
// import Pattern from "../components/DesktopLoginPattern";
import { MyContext } from "@/contextApi/Context";
import { useContext } from "react";

const AuthLayout = () => {
  const { isDesktop } = useContext(MyContext);
  return (
    <div
      className={`w-full h-screen flex ${
        isDesktop
          ? "justify-between items-center gap-[175px]"
          : "justify-center items-center"
      } xl:pl-[66px] xl:pr-[45px] overflow-hidden max-w-[1280px] mx-auto`}
    >
      {/* {isDesktop && <Pattern />} */}

      <div className={`w-full max-w-[400px]`}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
