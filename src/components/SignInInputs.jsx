import React from "react";

export default function SignInInputs() {
  return (
    <div className="flex items-center flex-col gap-[1.6rem]">
      <input
        className="w-[34.3rem] xl:w-[47.6rem] h-[5.6rem] rounded-[1.2rem] border border-[#E6E8EB] bg-[#FFF] text-[1.4rem] px-[1.6rem] py-[2rem] font-[400]"
        type="text"
        placeholder="Enter your username or Email"
      />
      <input
        className="w-[34.3rem] xl:w-[47.6rem] h-[5.6rem] rounded-[1.2rem] border border-[#E6E8EB] bg-[#FFF] text-[1.4rem] px-[1.6rem] py-[2rem] font-[400] mb-[1.4rem]"
        type="password"
        placeholder="Enter your Password"
      />
      <span className=" w-[34.3rem] xl:w-[47.6rem] text-[1.4rem] font-[400] text-textColor">
        Forgot password?
      </span>
    </div>
  );
}
