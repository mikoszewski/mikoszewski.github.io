import React from "react";
import { EventsContainer } from "@/app/content/components/Sections/EventsContainer";
import { VerticalEventsContainer } from "@/app/content/components/Sections/VerticalEventsContainer";

export const SectionPreviousEvents = () => {
  return (
    <section
      className={
        "bg-irga-sand flex flex-col py-6 md:py-24 border-irga-black border-b-[1px]"
      }
      id="previous_events"
    >
      <div>
        <span
          className={
            "text-irga-dark text-ml md:text-xl font-libre pl-6 md:pl-16"
          }
        >
          minione wydarzenia
        </span>
      </div>
      <div className={"md:mx-36 mt:6 md:mt-20 flex flex-col md:flex-row"}>
        <VerticalEventsContainer />
        <VerticalEventsContainer />
        <VerticalEventsContainer />
      </div>
    </section>
  );
};
