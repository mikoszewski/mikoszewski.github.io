import React from "react";
import { Texts } from "@/app/content/texts";
import texts from "../../texts.json";

export const Footer = () => {
  return (
    <div
      className={
        "h-4 w-full border-t-2 flex flex-row justify-end gap-36 mt-20 p-8"
      }
    >
      <span className={"font-custom text-irga-dark text-sm"}>
        {texts.irga.footer.website}
      </span>
      <span className={"font-custom text-irga-dark text-sm"}>
        {texts.irga.footer.photos}
      </span>
      <span className={"font-custom text-irga-dark text-sm"}>
        {texts.irga.footer.rights}
      </span>
    </div>
  );
};
