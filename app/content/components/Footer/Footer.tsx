import React from "react";
import { Texts } from "@/app/content/texts";
import texts from "../../texts.json";

export const Footer = () => {
  return (
    <div
      className={
        "h-4 w-full border-t-[1px] border-irga-black flex flex-row justify-end gap-36 mt-10 p-8"
      }
    >
      <div className={"flex gap-2"}>
        <span className={"font-custom text-irga-dark text-sm"}>
          {texts.irga.footer.website}
        </span>
        <span className={"font-custom text-irga-dark text-sm font-bold"}>
          {texts.irga.footer.website_by}
        </span>
      </div>
      <div className={"flex gap-2"}>
        <span className={"font-custom text-irga-dark text-sm"}>
          {texts.irga.footer.photos}
        </span>
        <span className={"font-custom text-irga-dark text-sm font-bold"}>
          {texts.irga.footer.photos_by}
        </span>
      </div>
      <span className={"font-custom text-irga-dark text-sm"}>
        {texts.irga.footer.rights}
      </span>
    </div>
  );
};
