import React from "react";
import { SectionIntro } from "@/app/content/components/SectionIntro";
import { SectionEvents } from "@/app/content/components/Sections/SectionEvents";
import { SectionOffer } from "@/app/content/components/Sections/SectionOffer";
import { SectionFaces } from "@/app/content/components/Sections/SectionFaces";

export const MainIrga = () => {
  return (
    <div className={"flex flex-col bg-irga-sand"}>
      <SectionIntro />
      <SectionFaces />
      <SectionEvents />
      <SectionOffer />
    </div>
  );
};
