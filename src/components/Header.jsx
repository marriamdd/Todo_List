export default function Header() {
  return (
    <div className="bg-[rgb(246,246,247)] flex items-center px-[1.6rem] xl:px-[3rem] py-[0.8rem] xl:py-[1.4rem] justify-between border border-b-[#C7CAD0]">
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
            className="#E7E8EA pl-[4.5rem] text-[1.4rem] font-[400] rounded-[0.8rem] w-[460px] h-[4rem]"
            type="text"
            placeholder="Search"
          />
          <img
            className="w-[16.993px] h-[16.13px] flex absolute top-[1.2rem] left-[1.4rem]"
            src="/assets/header_icons/Vector (1).svg"
            alt="search"
          />
        </div>
        <img
          className="w-[13.801px] h-[18.114px]"
          src="/assets/header_icons/Vector (2).svg"
          alt="user"
        />
      </div>
    </div>
  );
}
