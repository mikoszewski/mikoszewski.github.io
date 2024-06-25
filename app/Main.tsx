import React from "react";
import { IrgiMorda } from "@/app/content/components/IrgiMorda";
import { TopToolbar } from "@/app/content/components/Toolbar/TopToolbar";
import { ContactSection } from "@/app/content/components/Footer/ContactSection";
import { SectionEvents } from "@/app/content/components/Sections/SectionEvents";
import { SectionCarousel } from "@/app/content/components/Sections/SectionCarousel";
import { SectionOffer } from "@/app/content/components/Sections/SectionOffer";

export const MainIrga = () => {
  return (
    <div className={"flex flex-col"}>
      <IrgiMorda />
      <SectionEvents />
      <SectionOffer />
      <SectionCarousel />
    </div>
  );
};
