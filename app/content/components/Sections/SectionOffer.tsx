import React from "react";
import { OfferCard } from "@/app/content/components/Sections/OfferCard";
import { green } from "next/dist/lib/picocolors";

export const SectionOffer = () => {
  return (
    <section id={"offer"} className={"h-[835px] flex flex-col bg-irga-black"}>
      <div className={"flex flex-row mx-40 my-52 justify-between items-center"}>
        <OfferCard
          number={1}
          header={"warstztay"}
          content={"wypłaty"}
          color={"green"}
        />
        <OfferCard
          number={1}
          header={"warstztay"}
          content={"wypłaty"}
          color={"orange"}
        />
        <OfferCard
          number={1}
          header={"warstztay"}
          content={"wypłaty"}
          color={"purple"}
        />
      </div>
    </section>
  );
};
