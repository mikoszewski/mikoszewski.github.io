import React from "react";
import Image from "next/image";
import irga from "@/app/content/irga.png";
import { Texts } from "@/app/content/texts";
import texts from "../../texts.json";
import Link from "next/link";

export const SectionFaces = () => {
  return (
    <section className={"h-[1100px] bg-irga-black flex flex-col"} id={"morda"}>
      <Image
        id="o-nas"
        src={irga}
        alt={"irga-kolorowe-twarze"}
        className={"px-6 py-8"}
      />
      <div
        className={
          "flex flex-col text-irga-light font-custom px-2 py-2 m-6 w-full text-center items-center"
        }
      >
        <span className={"text-irga-light text-2xl font-urbanist"}>
          {texts.irga.main_page.about_us_header}
        </span>
        <span className={"text-irga-light font-libre text-6xl p-6"}>
          {texts.irga.main_page.about_us_content}
        </span>
        <Link
          id={"button-about-us"}
          href="/oferta"
          className={
            "bg-irga-sand w-1/4 text-irga-dark font-questrial px-2 py-2 text-2xl"
          }
        >
          {texts.irga.main_page.about_us_button}
        </Link>
      </div>
    </section>
  );
};
