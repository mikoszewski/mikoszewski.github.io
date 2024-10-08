import React from "react";
import { Texts } from "@/app/content/texts";
import texts from "../../texts.json";

export const Footer = () => {
  return (
    <div
      className={
        "h-4 w-full border-t-[1px] border-irga-black flex flex-row md:justify-end gap-6 md:gap-36 mt-10 p-2 md:p-8"
      }
    >
      <div className={"flex gap-2"}>
        <span className={"font-custom text-irga-dark text-xs md:text-sm"}>
          {texts.irga.footer.website}
        </span>
        <span
          className={"font-custom text-irga-dark text-xs md:text-sm font-bold"}
        >
          {texts.irga.footer.website_by}
        </span>
      </div>
      <div className={"flex gap-2"}>
        <span className={"font-custom text-irga-dark text-xs md:text-sm"}>
          {texts.irga.footer.photos}
        </span>
        <span
          className={"font-custom text-irga-dark text-xs md:text-sm font-bold"}
        >
          {texts.irga.footer.photos_by}
        </span>
      </div>
      <span className={"font-custom text-irga-dark text-xs md:text-sm"}>
        {texts.irga.footer.rights}
      </span>
    </div>
  );
};
