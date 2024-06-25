import React from "react";

export const OfferCard: React.FC<{
  number: number;
  header: string;
  content: string;
  color: string;
}> = ({ number, header, content, color }) => {
  const classColor = (color: string) => {
    switch (color) {
      case "orange":
        return "bg-irga-orange";
      case "purple":
        return "bg-irga-purple";
      default:
        return "bg-irga-green";
    }
  };

  return (
    <section
      className={`flex flex-col p-6 ${classColor(color)} w-[315px] h-[445px]`}
    >
      <span>{number}</span>
      <span>{header}</span>
      <span>{content}</span>
    </section>
  );
};
