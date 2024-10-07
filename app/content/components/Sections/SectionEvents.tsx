"use client";

import React, { useEffect, useState } from "react";
import { EventsContainer } from "@/app/content/components/Sections/EventsContainer";

export const SectionEvents = () => {
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
    <section className={"flex h-auto w-full flex-col py-24"} id={"events"}>
      <span
        className={"text-ml pl-6 font-libre text-irga-dark md:pl-16 md:text-xl"}
      >
        najbliższe spektakle
      </span>
      <div className={"mx-6 mt-8 md:mx-36 md:mt-20"}>
        {events && <EventsContainer data={events[3]} />}
      </div>
    </section>
  );
};
