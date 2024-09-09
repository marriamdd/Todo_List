import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <SignIn
      signUpUrl="/register"
      appearance={{
        elements: {
          cardBox:
            "box-border flex flex-col items-stretch justify-start max-w-[calc(100vw-2.5rem)] w-[25rem] border border-solid border-black/7 rounded-xl text-[rgb(33,33,38)] relative overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2),0_0_0_1px_rgba(0,0,0,0.07)]",
          main: "flex flex-col-reverse",
          formFieldInput: "h-[38px]",
          card: "box-border  flex flex-col items-stretch gap-8 bg-white transition-colors duration-200 text-center z-10 border border-solid border-black/3 rounded-lg relative p-8 shadow-sm",
          headerSubtitle: "hidden",
          socialButtonsBlockButton__google:
            "h-[38px] rounded-[30px] !border-[1px] !border-[#CFD3D9] hover:bg-transparent !shadow-none",
          formButtonPrimary:
            "bg-[#333] h-[38px] rounded-[30px] hover:bg-[#555] text-sm",
        },
      }}
    />
    // </div>
  );
}
