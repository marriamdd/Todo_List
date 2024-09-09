import { Outlet } from "react-router-dom";

import { MyContext } from "@/contextApi/Context";
import { useContext } from "react";
import Pattern from "@/components/Patterns";

const AuthLayout = () => {
  const { isDesktop } = useContext(MyContext);
  return (
    <div
      className={`w-full h-screen flex ${
        isDesktop
          ? "justify-between items-center gap-[175px]"
          : "justify-center items-center "
      } xl:pl-[66px] xl:pr-[45px] overflow-hidden max-w-[1280px] mx-auto`}
    >
      {isDesktop && <Pattern />}

      <div className={` w-[100vw] flex items-center justify-center`}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
