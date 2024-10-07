"use client";
import React, { useEffect, useState } from "react";
import { EventsContainer } from "@/app/content/components/Sections/EventsContainer";
import { VerticalEventsContainer } from "@/app/content/components/Sections/VerticalEventsContainer";

export const SectionPreviousEvents = () => {
  const [events, setEvents] = useState<string[]>();
  const [loading, setLoading] = useState(true);

  const accessToken = "";

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch(
        `https://graph.facebook.com/irga.impro/events?fields=name,start_time,cover,description&access_token=${accessToken}`,
      ); // Use the API route
      const data = await res.json();
      setEvents(data.data);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  return (
    <section
      className={
        "flex flex-col border-b-[1px] border-irga-black bg-irga-sand py-6 md:py-24"
      }
      id="previous_events"
    >
      <div>
        <span
          className={
            "text-ml pl-6 font-libre text-irga-dark md:pl-16 md:text-xl"
          }
        >
          minione wydarzenia
        </span>
      </div>
      <div className={"mt:6 flex flex-col md:mx-36 md:mt-20 md:flex-row"}>
        {events && (
          <>
            <VerticalEventsContainer data={events[1]} />
            <VerticalEventsContainer data={events[2]} />
            <VerticalEventsContainer data={events[3]} />
          </>
        )}
      </div>
    </section>
  );
};
