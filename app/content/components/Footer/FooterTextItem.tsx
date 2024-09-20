import React from "react";

export const ContactTextItem: React.FC<{
  headerText: string;
  content: string;
  contentSecondary?: string;
}> = ({ headerText, content, contentSecondary }) => {
  return (
    <section className={"flex flex-col"}>
      <span
        className={
          "text-irga-text-light-grey text-xs md:text-base font-custom mb-1.5"
        }
      >
        {headerText}
      </span>
      <span className={"text-irga-dark text-sm md:text-xl font-custom"}>
        {content}
      </span>
      {contentSecondary && (
        <span className={"text-irga-dark text-sm md:text-xl font-custom"}>
          {contentSecondary}
        </span>
      )}
    </section>
  );
};
