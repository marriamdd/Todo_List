import { useEffect } from "react";

export function useResizeEffect(showMoreModal, setShowMoreModal) {
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1440 && showMoreModal.position === "top") {
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
