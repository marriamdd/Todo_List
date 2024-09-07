import SideBar from "./SideBar";
import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { MyContext } from "@/contextApi/Context";
import { useResizeEffect } from "../customHooks/useResizeEffect";
function BurgerModal({ showBurgerModal, setShowBurgerModal }) {
  const { isDesktop } = useContext(MyContext);
  useEffect(() => {
    isDesktop && setShowBurgerModal(false);
  }, [isDesktop]);
  useResizeEffect();
  return (
    <>
      <div>
        <div
          onClick={() => setShowBurgerModal(false)}
          className="bg-[#000] xl:hidden fixed top-0 left-0 right-0 bottom-0 opacity-[0.5] z-10"
        ></div>
        <div
          className={`fixed  transition-all xl:hidden  duration-[1s] ease  transform   z-10   shadow-[#364e7e1a] bg-[white]   py-[1rem] rounded-[0.8rem] bottom-0 top-0 ${
            showBurgerModal ? "left-0  " : "left-[-30rem] "
          }   rounded-none w-[30rem]`}
        >
          <div className="bg-[white] h-[100vh] h-100% flex flex-col">
            <SideBar
              setShowBurgerModal={setShowBurgerModal}
              showBurgerModal={showBurgerModal}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BurgerModal;
BurgerModal.propTypes = {
  setShowBurgerModal: PropTypes.bool,
  showBurgerModal: PropTypes.bool,
};
