import React from "react";
import { EventsContainer } from "@/app/content/components/Sections/EventsContainer";
import { VerticalEventsContainer } from "@/app/content/components/Sections/VerticalEventsContainer";

export const SectionPreviousEvents = () => {
  return (
    <section
      className={"h-[754px] bg-irga-light flex flex-row"}
      id="previous_events"
    >
      <div className={"mx-20 my-40 flex flex-row"}>
        <VerticalEventsContainer />
        <VerticalEventsContainer />
        <VerticalEventsContainer />
      </div>
    </section>
  );
};
