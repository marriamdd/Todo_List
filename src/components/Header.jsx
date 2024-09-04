import { MyContext } from "@/contextApi/Context";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import { useContext } from "react";
export default function Header() {
  const { searchTask, setSearchtask } = useContext(MyContext);
  console.log(searchTask);
  return (
    <div className="bg-[rgb(246,246,247)] flex items-center px-[1.6rem] xl:px-[3rem] py-[0.8rem] xl:py-[1.4rem] justify-between border-b-[1px] border-b-greyBorder">
      <div className="w-[5.7rem] flex xl:hidden">
        <img src="/assets/header_icons/Vector.svg" alt="burger" />
      </div>
      <div className="w-[5.7rem] flex xl:hidden justify-center">
        <img
          className=""
          src="/assets/header_icons/Ellipse 1097.svg"
          alt="ellipse"
        />
      </div>

      <div className="flex gap-[1.2rem] items-center xl:justify-between xl:w-full ">
        <img
          className="w-[16.993px] h-[16.13px] flex xl:hidden"
          src="/assets/header_icons/Vector (1).svg"
          alt="search"
        />

        <div className="bg-[#82868F] h-[1.6rem] w-[1px] flex xl:hidden"></div>
        <div className="relative hidden xl:flex">
          <input
            className=" bg-[#E7E8EA] pl-[4.5rem] text-[1.4rem] font-[400] rounded-[0.8rem] w-[460px] h-[4rem]"
            type="text"
            placeholder="Search"
            value={searchTask}
            onChange={(e) => setSearchtask(e.target.value)}
          />
          <img
            className="w-[16.993px] h-[16.13px] flex absolute top-[1.2rem] left-[1.4rem]"
            src="/assets/header_icons/Vector (1).svg"
            alt="search"
          />
        </div>
        <div className="flex gap-[1.2rem] items-center">
          <div className="xl:flex hidden gap-[0.4rem] items-center">
            <span className="text-[1.4rem] font-[500]">EN</span>
            <img
              className="w-[22px] h-[22px]"
              src="/assets/header_icons/material-symbols-light_navigate-next.svg"
              alt="arrow"
            />
          </div>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: {
                    width: "25px",
                    height: "25px",
                  },
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
