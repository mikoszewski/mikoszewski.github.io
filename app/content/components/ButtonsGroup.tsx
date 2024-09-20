import React from "react";
import Link from "next/link";

export const ButtonsGroup: React.FC<{
  buttonOneName: string;
  buttonTwoName: string;
}> = ({ buttonOneName, buttonTwoName }) => {
  return (
    <div className={"flex flex-row space-x-2 p-4"}>
      <Link
        href={"https://goout.net/pl/profile/irga-impro/pptqc/events/"}
        target={"_blank"}
        id={"button-one"}
        className={
          "bg-[#232323] text-irga-light font-custom px-2 py-2 text-sm md:text-3xl border-b-4 border-r-4 border-irga-button-border-green"
        }
      >
        {buttonOneName}
      </Link>
      <Link
        href="/repertuar"
        id={"button-two"}
        className={"text-irga-dark font-custom px-2 py-2 text-sm md:text-3xl"}
      >
        {buttonTwoName}
      </Link>
    </div>
  );
};
