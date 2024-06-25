import React from "react";
import { Texts } from "@/app/content/texts";

export const Footer = () => {
  return (
    <div
      className={
        "h-4 w-full border-t-2 flex flex-row justify-end gap-36 mt-20 p-8"
      }
    >
      <span className={"font-custom text-irga-dark text-base"}>
        {Texts.IRGA_FOOTER.website}
      </span>
      <span className={"font-custom text-irga-dark text-base"}>
        {Texts.IRGA_FOOTER.photos}
      </span>
      <span className={"font-custom text-irga-dark text-base"}>
        {Texts.IRGA_FOOTER.rights}
      </span>
    </div>
  );
};
