import { Link, useLocation } from "react-router-dom";
import { MyContext } from "../contextApi/Context";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

export default function SideBar({ setShowBurgerModal, showBurgerModal }) {
  const { currentEndPoint, setCurrentEndPoint } = useContext(MyContext);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setCurrentEndPoint("/");
        break;
      case "/Important":
        setCurrentEndPoint("Important");
        break;
      case "/DeashBoard":
        setCurrentEndPoint("DeashBoard");
        break;
      default:
        setCurrentEndPoint("/");
    }
  }, [location.pathname, setCurrentEndPoint]);

  return (
    <div
      className={`${
        showBurgerModal ? "" : "bg-[#F6F6F7]"
      } border-r-[1px] border-l-greyBorder pt-[10.1rem] pl-[2.4rem] flex flex-col w-full`}
    >
      <Link to="/">
        <div
          onClick={() => setShowBurgerModal(false)}
          className={`flex items-center gap-[1.2rem] rounded-[0.4rem] px-[1rem] py-[1.6rem] w-[25.2rem] h-[4.8rem] ${
            currentEndPoint === "/" ? "bg-[#E7E8EA]" : ""
          }`}
        >
          <img src="/assets/modal_icons/ph_sun-light.svg" alt="My_Day" />
          <span className="text-textColor text-[1.4rem] font-[400]">
            {t("homePage")}
          </span>
        </div>
      </Link>
      <Link to="/Important">
        <div
          onClick={() => setShowBurgerModal(false)}
          className={`flex items-center gap-[1.2rem] rounded-[0.4rem] px-[1rem] py-[1.6rem] w-[25.2rem] h-[4.8rem] ${
            currentEndPoint === "Important" ? "bg-[#E7E8EA]" : ""
          }`}
        >
          <img src="/assets/modal_icons/ph_star-thin.svg" alt="Important" />
          <span className="text-textColor text-[1.4rem] font-[400]">
            {t("importantPage")}
          </span>
        </div>
      </Link>
      <Link to="/DeashBoard">
        <div
          onClick={() => setShowBurgerModal(false)}
          className={`flex items-center gap-[1.2rem] rounded-[0.4rem] px-[1rem] py-[1.6rem] w-[25.2rem] h-[4.8rem] ${
            currentEndPoint === "DeashBoard" ? "bg-[#E7E8EA]" : ""
          }`}
        >
          <img
            className="w-[22px] h-[22px]"
            src="/assets/modal_icons/analytics_777502.png"
            alt="DeashBoard"
          />
          <span className="text-textColor text-[1.4rem] font-[400]">
            {t("deashBoardPage")}
          </span>
        </div>
      </Link>
    </div>
  );
}

SideBar.propTypes = {
  setShowBurgerModal: PropTypes.func.isRequired,
  showBurgerModal: PropTypes.bool.isRequired,
};
