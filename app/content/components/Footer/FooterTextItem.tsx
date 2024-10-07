import React from "react";

export const ContactTextItem: React.FC<{
  headerText: string;
  content: string;
  contentSecondary?: string;
}> = ({ headerText, content, contentSecondary }) => {
  return (
    <section className={"flex flex-col"}>
      <span
        className={"mb-1.5 font-custom text-base text-irga-text-light-grey"}
      >
        {headerText}
      </span>
      <span className={"font-custom text-xl text-irga-dark"}>{content}</span>
      {contentSecondary && (
        <span className={"mtext-xl font-custom text-irga-dark"}>
          {contentSecondary}
        </span>
      )}
    </section>
  );
};
