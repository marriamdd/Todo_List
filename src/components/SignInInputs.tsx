import React from "react";

export default function SignInInputs() {
  return (
    <div className="flex flex-col gap-[1.6rem]">
      <input
        className="w-[343px] h-[56px] rounded-[1.2rem] border border-[#E6E8EB] bg-[#FFF] text-[1.4rem] px-[1.6rem] py-[2rem] font-[400]"
        type="text"
        placeholder="Enter your username or Email"
      />
      <input
        className="w-[343px] h-[56px] rounded-[1.2rem] border border-[#E6E8EB] bg-[#FFF] text-[1.4rem] px-[1.6rem] py-[2rem] font-[400] mb-[1.4rem]"
        type="password"
        placeholder="Enter your Password"
      />
    </div>
  );
}
