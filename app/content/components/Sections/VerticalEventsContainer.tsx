import React from "react";
import Image from "next/image";
import event from "@/app/content/58108217d3b01ac1e730dfa647233ea5.png";

export const VerticalEventsContainer = (data: any) => {
  const date = new Date(data.data.start_time);

  const eventDate = new Intl.DateTimeFormat("pl-PL", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

  return (
    <section
      className={
        "flex h-auto w-full flex-col gap-2 p-6 md:h-[450px] md:w-[460px] md:gap-8 md:p-12"
      }
    >
      <Image
        src={data.data.cover.source}
        alt={"current-event"}
        className={"h-auto w-1/2 md:w-[460px]"}
        width={100}
        height={100}
      />
      <section className={"flex flex-col gap-2"}>
        <span className={"font-custom text-xs text-irga-dark md:text-sm"}>
          {eventDate}
        </span>
        <span
          className={
            "font-urbanist text-xs leading-3 text-irga-dark md:text-lg md:leading-10"
          }
        >
          {data.data.name}
        </span>
      </section>
    </section>
  );
};
