import { useContext, useEffect } from "react";
import { MyContext } from "../contextApi/Context";

export function useResizeEffect(showMoreModal, setShowMoreModal) {
  const { isDesktop } = useContext(MyContext);
  useEffect(() => {
    function handleResize() {
      if (isDesktop && showMoreModal.position === "top") {
        setShowMoreModal({ ...showMoreModal, position: null });
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showMoreModal, setShowMoreModal]);
}
