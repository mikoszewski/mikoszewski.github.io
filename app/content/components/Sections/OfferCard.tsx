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
      className={`flex flex-col justify-between p-6 ${classColor(color)} w-[315px] h-[445px]`}
    >
      <span className="text-irga-dark font-custom text-3xl">{number}</span>
      <div className="flex flex-col">
        <span className="text-irga-dark font-libre text-5xl mb-6">
          {header}
        </span>
        <span className="text-irga-dark font-custom text-base">{content}</span>
      </div>
    </section>
  );
};
