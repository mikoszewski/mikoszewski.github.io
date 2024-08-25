import React from "react";
import { EventsContainer } from "@/app/content/components/Sections/EventsContainer";

export const SectionEvents = () => {
  return (
    <section className={" flex flex-col py-24"} id={"events"}>
      <span className={"text-irga-dark text-xl font-libre pl-16"}>
        najbliższe spektakle
      </span>
      <div className={"mx-36 mt-20"}>
        <EventsContainer />
      </div>
    </section>
  );
};
