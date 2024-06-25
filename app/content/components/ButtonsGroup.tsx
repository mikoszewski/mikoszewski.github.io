import React from "react";

export const ButtonsGroup: React.FC<{
  buttonOneName: string;
  buttonTwoName: string;
}> = ({ buttonOneName, buttonTwoName }) => {
  return (
    <div className={"flex flex-row space-x-2 p-4"}>
      <button
        id={"button-one"}
        className={
          "bg-[#232323] text-irga-light font-custom px-2 py-2 text-3xl border-b-4 border-r-4 border-irga-button-border-green"
        }
      >
        {buttonOneName}
      </button>
      <button
        id={"button-two"}
        className={"text-irga-dark font-custom px-2 py-2 text-3xl"}
      >
        {buttonTwoName}
      </button>
    </div>
  );
};
