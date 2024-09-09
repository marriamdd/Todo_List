import { useTranslation } from "react-i18next";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
export default function Language_selector() {
  const langugaes = [
    { code: "EN", lang: "EN" },
    { code: "KA", lang: "KA" },
  ];
  console.log(langugaes);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const { i18n } = useTranslation();
  return (
    <HoverCard className="px-0">
      <HoverCardTrigger asChild>
        <div className="xl:flex hidden gap-[0.4rem] items-center">
          <span className="text-[14px] font-[500]">{i18n.language}</span>
          <img
            className="w-[22px] h-[22px]"
            src="/assets/header_icons/material-symbols-light_navigate-next.svg"
            alt="arrow"
          />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-[50px] px-0 flex items-center text-center flex-col rounded-[8px]">
        {langugaes.map((lng) => (
          <p
            className={` min-w-full cursor-pointer  hover:bg-[#F6F6F7] ${
              lng.code == i18n.language ? "bg-[#E7E8EA]" : ""
            }`}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </p>
        ))}
      </HoverCardContent>
    </HoverCard>
  );
}
