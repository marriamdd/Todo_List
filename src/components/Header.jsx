import { MyContext } from "@/contextApi/Context";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import { useContext, useState } from "react";
import { useRef } from "react";
import BurgerModal from "./BurgerModal";
import Language_selector from "./Language_selector";
import { useClickOutsideEffect } from "@/customHooks/useClickOutsideEffect";

export default function Header() {
  const { searchTask, setSearchtask } = useContext(MyContext);
  const [searchIconClicked, setSearchIconClicked] = useState(false);
  const [showBurgerModal, setShowBurgerModal] = useState(false);
  const inputRef = useRef(null);
  useClickOutsideEffect(
    inputRef,
    () => setSearchIconClicked(false),
    searchIconClicked
  );

  return (
    <div className="bg-[rgb(246,246,247)] flex items-center px-[1.6rem] xl:px-[3rem] py-[0.8rem] xl:py-[1.4rem] justify-between border-b-[1px] border-b-greyBorder">
      <div className="w-[5.7rem] flex xl:hidden">
        <img
          onClick={() => setShowBurgerModal((prev) => !prev)}
          src="/assets/header_icons/Vector.svg"
          alt="burger"
        />
      </div>
      {showBurgerModal && (
        <BurgerModal
          setShowBurgerModal={setShowBurgerModal}
          showBurgerModal={showBurgerModal}
        />
      )}
      <div className="w-[5.7rem] flex xl:hidden justify-center">
        {!searchIconClicked && (
          <img src="/assets/header_icons/Ellipse 1097.svg" alt="ellipse" />
        )}
      </div>

      <div className="flex gap-[1.2rem] items-center xl:justify-between xl:w-full ">
        {!searchIconClicked && (
          <div className="flex gap-[1.2rem] items-center">
            <img
              onClick={() => setSearchIconClicked(true)}
              className="w-[16.993px] h-[16.13px] flex xl:hidden"
              src="/assets/header_icons/Vector (1).svg"
              alt="search"
            />

            <div className="bg-[#82868F] h-[1.6rem] w-[1px] flex xl:hidden"></div>
          </div>
        )}
        <div
          className={` ${
            searchIconClicked ? "flex" : "hidden"
          } relative   xl:flex`}
        >
          <input
            className=" bg-[#E7E8EA] pl-[4.5rem] text-[1.4rem] font-[400] rounded-[0.8rem] xl:w-[460px] md:w-[300px]  w-[250px] h-[4rem]"
            type="text"
            value={searchTask}
            ref={inputRef}
            onChange={(e) => setSearchtask(e.target.value)}
          />
          <img
            className="w-[16.993px] h-[16.13px] flex absolute top-[1.2rem] left-[1.4rem]"
            src="/assets/header_icons/Vector (1).svg"
            alt="search"
          />
        </div>
        <div className="flex gap-[1.2rem] items-center">
          <Language_selector />

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
