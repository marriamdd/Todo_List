import { useContext, useEffect } from "react";
import { MyContext } from "../contextApi/Context";

export function useResizeEffect() {
  const { isDesktop, setIsDesktop } = useContext(MyContext);
  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1280);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDesktop, setIsDesktop]);
}
