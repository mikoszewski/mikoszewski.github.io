import React from "react";
import Image from "next/image";
import event from "@/app/content/58108217d3b01ac1e730dfa647233ea5.png";
import { ButtonsGroup } from "@/app/content/components/ButtonsGroup";

export const EventsContainer = () => {
  return (
    <section className={"flex flex-row gap-8"}>
      <Image
        src={event}
        alt={"current-event"}
        className={"h-[338px] w-[646px]"}
      />
      <section className={"flex flex-col gap-4"}>
        <span className={"text-lg font-custom font-bold text-irga-dark"}>
          Pt, 10 maj o 20:00
        </span>
        <span className={"text-2xl font-urbanist leading-10 text-irga-dark"}>
          irga: co robimy w ukryciu? || improwizowany spektakl komediowy
        </span>
        <span className={"text-lg font-custom text-irga-dark"}>
          Kasyno na uboczu, które lata świetności ma już dawno za sobą.
          Zaglądasz ukradkiem do środka, a tam... Przy jednorękim bandycie
          emerytka w krzykliwym kapeluszu...
        </span>
        <ButtonsGroup
          buttonOneName={"kup bilet"}
          buttonTwoName={"wydarzenie"}
        />
      </section>
    </section>
  );
};
