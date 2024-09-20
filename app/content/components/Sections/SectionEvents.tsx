import React from "react";
import { EventsContainer } from "@/app/content/components/Sections/EventsContainer";

export const SectionEvents = () => {
  return (
    <section className={"w-full h-auto flex flex-col py-24"} id={"events"}>
      <span
        className={"text-irga-dark text-ml md:text-xl font-libre pl-6 md:pl-16"}
      >
        najbliższe spektakle
      </span>
      <div className={"mx-6 md:mx-36 mt-8 md:mt-20"}>
        <EventsContainer />
      </div>
    </section>
  );
};
