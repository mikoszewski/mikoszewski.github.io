import React from "react";

export const ContactTextItem: React.FC<{
  headerText: string;
  content: string;
}> = ({ headerText, content }) => {
  return (
    <section className={"flex flex-col"}>
      <span className={"text-gray-500 text-base font-light"}>{headerText}</span>
      <span className={"text-irga-dark text-xl font-light"}>{content}</span>
    </section>
  );
};
