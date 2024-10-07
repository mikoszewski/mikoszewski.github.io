import React from "react";
import Image from "next/image";
import event from "@/app/content/58108217d3b01ac1e730dfa647233ea5.png";
import { ButtonsGroup } from "@/app/content/components/ButtonsGroup";

export const EventsContainer = (data: any) => {
  console.log(data);
  const truncateText = (text: string, length: number) => {
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }
    return text;
  };

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
    <section className={"flex flex-col gap-8 md:flex-row"}>
      <Image
        src={data.data.cover.source}
        alt={"current-event"}
        className={"h-auto w-full md:h-[338px] md:w-[646px]"}
        width={100}
        height={100}
      />
      <section className={"flex flex-col gap-4"}>
        <span
          className={"font-custom text-sm font-bold text-irga-dark md:text-lg"}
        >
          {eventDate}
        </span>
        <span
          className={
            "text-ml font-urbanist leading-10 text-irga-dark md:text-2xl"
          }
        >
          {data.data.name}
        </span>
        <span className={"font-custom text-sm text-irga-dark md:text-lg"}>
          {truncateText(data.data.description, 181)}
        </span>
        <ButtonsGroup
          buttonOneName={"kup bilet"}
          buttonTwoName={"wydarzenie"}
        />
      </section>
    </section>
  );
};
