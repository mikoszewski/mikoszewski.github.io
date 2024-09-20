import React from "react";
import Image from "next/image";
import event from "@/app/content/58108217d3b01ac1e730dfa647233ea5.png";

export const VerticalEventsContainer = () => {
  return (
    <section
      className={
        "flex flex-col gap-2 md:gap-8 p-6 md:p-12 h-auto md:h-[450px] w-full md:w-[460px]"
      }
    >
      <Image
        src={event}
        alt={"current-event"}
        className={"h-auto w-1/2 md:w-[460px]"}
      />
      <section className={"flex flex-col gap-2"}>
        <span className={"text-xs md:text-sm font-custom text-irga-dark"}>
          Pt, 10 maj o 20:00
        </span>
        <span
          className={
            "text-xs md:text-lg font-urbanist leading-3 md:leading-10 text-irga-dark"
          }
        >
          irga: co robimy w ukryciu? || improwizowany spektakl komediowy
        </span>
      </section>
    </section>
  );
};
