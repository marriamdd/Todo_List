import { useEffect, useRef } from "react";

export function useClickOutsideEffect(showMoreModal, setShowMoreModal) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowMoreModal({ ...showMoreModal, visible: false });
      }
    }

    if (showMoreModal.visible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMoreModal, setShowMoreModal]);

  return modalRef;
}
