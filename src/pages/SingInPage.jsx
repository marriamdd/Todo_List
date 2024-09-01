import SignInInputs from "../components/SignInInputs";
import { Link } from "react-router-dom";
export default function SingInPage() {
  return (
    <div className="bg-[#F6F6F7] h-[100vh] pt-[7.2rem] px-[1.6rem]">
      <div className="flex flex-col items-center gap-[3.2rem] pb-[4.8rem]">
        <img src="/assets/Ellipse 1096.svg" alt="Ellipse" />
        <h2 className="text-[#0059AC] text-[3.6rem] font-[500]">Sign in</h2>
      </div>
      <SignInInputs />
      <span className=" text-[1.4rem] font-[400] text-textColor">
        Forgot password?
      </span>
      <button className="w-[34.3rem] cursor-pointer mt-[2.4rem] mb-[3.2] text-white bg-[#477EE7] rounded-[3rem] h-[5.6rem] p-[1rem] text-[1.6rem]">
        Sign in
      </button>
      <div className="flex justify-between items-center my-[3.2rem] ">
        <div className="bg-[#CFD3DA] h-[1px] w-[100%]"></div>
        <span className="px-[1.4rem] text-[1.4rem] font-[400]">Or</span>
        <div className="bg-[#CFD3DA]  h-[1px] w-[100%]"></div>
      </div>
      <button className="w-[34.3rem] border border-[#CFD3D9] flex gap-[1rem] items-center justify-center cursor-pointer mt-[2.4rem] mb-[3.2]  text-textColor  rounded-[3rem] h-[5.6rem] p-[1rem] text-[1.4rem] font-[400]">
        <img src="/assets/flat-color-icons_google.svg" alt="google_icon" />
        <span>Sign in with google</span>
      </button>
      <div className="flex mt-[3.2rem] items-center justify-center">
        <span className="  text-textColor text-[1.4rem] font-[400]">
          Don&apos;t have an account?&nbsp;
        </span>

        <Link
          className="text-[1.4rem]  text-textColor underline font-[500]"
          to={"/SingUp"}
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
