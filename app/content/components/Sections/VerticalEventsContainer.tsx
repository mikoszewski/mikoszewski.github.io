import React from "react";
import Image from "next/image";
import event from "@/app/content/58108217d3b01ac1e730dfa647233ea5.png";

export const VerticalEventsContainer = () => {
  return (
    <section className={"flex flex-col gap-8 p-12 h-[450px] w-[460px]"}>
      <Image src={event} alt={"current-event"} className={"h-auto w-[460px]"} />
      <section className={"flex flex-col gap-2"}>
        <span className={"text-sm font-custom text-irga-dark"}>
          Pt, 10 maj o 20:00
        </span>
        <span className={"text-lg font-urbanist leading-10 text-irga-dark"}>
          irga: co robimy w ukryciu? || improwizowany spektakl komediowy
        </span>
      </section>
    </section>
  );
};
