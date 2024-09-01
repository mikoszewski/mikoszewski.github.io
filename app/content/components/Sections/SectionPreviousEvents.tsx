import React from "react";
import { EventsContainer } from "@/app/content/components/Sections/EventsContainer";
import { VerticalEventsContainer } from "@/app/content/components/Sections/VerticalEventsContainer";

export const SectionPreviousEvents = () => {
  return (
    <section
      className={
        "bg-irga-sand flex flex-col py-24 border-irga-black border-b-[1px]"
      }
      id="previous_events"
    >
      <div>
        <span className={"text-irga-dark text-xl font-libre pl-16"}>
          minione wydarzenia
        </span>
      </div>
      <div className={"mx-36 mt-20 flex flex-row"}>
        <VerticalEventsContainer />
        <VerticalEventsContainer />
        <VerticalEventsContainer />
      </div>
    </section>
  );
};
