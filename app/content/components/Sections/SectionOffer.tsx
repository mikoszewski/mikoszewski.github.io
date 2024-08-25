import React from "react";
import { OfferCard } from "@/app/content/components/Sections/OfferCard";
import texts from "../../texts.json";
import Image from "next/image";
import maziaj from "../../maziaj.svg";

export const SectionOffer = () => {
  return (
    <section
      id={"offer"}
      className={"w-full h-auto flex flex-col bg-irga-black relative"}
    >
      <div
        className={
          "flex flex-row mx-40 my-52 justify-between items-center z-10"
        }
      >
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
      <Image
        src={maziaj}
        alt={"maziaj"}
        className={"absolute top-9 right-12 rotate-45 z-0"}
      />
    </section>
  );
};
