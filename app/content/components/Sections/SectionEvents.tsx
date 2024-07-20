import React from "react";
import { EventsContainer } from "@/app/content/components/Sections/EventsContainer";

export const SectionEvents = () => {
  return (
    <section id={"events"} className={"h-[650px] flex flex-col"}>
      <span className={"text-irga-dark text-xl font-libre pt-24 pl-16"}>
        najbliższe spektakle
      </span>
      <div className={"mx-36 mt-20"}>
        <EventsContainer />
      </div>
    </section>
  );
};
