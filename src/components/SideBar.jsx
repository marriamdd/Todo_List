import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

export default function SideBar({ setShowBurgerModal, showBurgerModal }) {
  const { t } = useTranslation();

  return (
    <div
      className={`${
        showBurgerModal ? "" : "bg-[#F6F6F7]"
      } w-[100%]   border-r-[1px] border-l-greyBorder pt-[50px] pl-[24px] flex flex-col `}
    >
      <NavLink
        onClick={() => setShowBurgerModal(false)}
        to="/"
        className={({ isActive }) =>
          `p-4 rounded mr-4 flex gap-3 text-black ${isActive && "bg-[#E7E8EA]"}`
        }
      >
        <img src="/assets/modal_icons/ph_sun-light.svg" alt="My_Day" />
        <span className="text-textColor text-[14px] font-[400]">
          {t("homePage")}
        </span>
      </NavLink>
      <NavLink
        onClick={() => setShowBurgerModal(false)}
        to="/Important"
        className={({ isActive }) =>
          `p-4 rounded mr-4 flex gap-3 text-black ${isActive && "bg-[#E7E8EA]"}`
        }
      >
        <img src="/assets/modal_icons/ph_star-thin.svg" alt="Important" />
        <span className="text-textColor text-[14px] font-[400]">
          {t("importantPage")}
        </span>
      </NavLink>
      <NavLink
        onClick={() => setShowBurgerModal(false)}
        to="/DeashBoard"
        className={({ isActive }) =>
          `p-4 rounded mr-4 flex gap-3 text-black ${isActive && "bg-[#E7E8EA]"}`
        }
      >
        <img
          className="w-[22px] h-[22px]"
          src="/assets/modal_icons/analytics_777502.png"
          alt="DeashBoard"
        />
        <span className="text-textColor text-[14px] font-[400]">
          {t("deashBoardPage")}
        </span>
      </NavLink>
    </div>
  );
}

SideBar.propTypes = {
  setShowBurgerModal: PropTypes.func,
  showBurgerModal: PropTypes.bool,
};
