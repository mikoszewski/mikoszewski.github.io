import React from "react";
import { OfferCard } from "@/app/content/components/Sections/OfferCard";
import texts from "../../texts.json";

export const SectionOffer = () => {
  return (
    <section id={"offer"} className={"h-[835px] flex flex-col bg-irga-black"}>
      <div className={"flex flex-row mx-40 my-52 justify-between items-center"}>
        <OfferCard
          number={1}
          header={texts.irga.offer.gigs_header}
          content={texts.irga.offer.gigs_content}
          color={"green"}
        />
        <OfferCard
          number={2}
          header={texts.irga.offer.events_header}
          content={texts.irga.offer.events_content}
          color={"orange"}
        />
        <OfferCard
          number={3}
          header={texts.irga.offer.workshops_header}
          content={texts.irga.offer.workshops_content}
          color={"purple"}
        />
      </div>
    </section>
  );
};
