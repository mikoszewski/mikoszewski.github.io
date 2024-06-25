import React from "react";
import Image from "next/image";
import irga from "@/app/content/irga.png";
import { Texts } from "@/app/content/texts";
import Link from "next/link";

export const SectionFaces = () => {
  return (
    <section className={"h-[1100px] bg-irga-black flex flex-col"}>
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
        <span className={"text-irga-light text-xl font-light"}>
          kim jest irga?
        </span>
        <span className={"text-irga-light text-6xl p-6"}>
          {Texts.IRGA_MAIN_ABOUT}
        </span>
        <Link
          id={"button-about-us"}
          href="/oferta"
          className={
            "bg-irga-sand w-1/4 text-irga-dark font-custom px-2 py-2 text-xl"
          }
        >
          {"poznaj-irgę"}
        </Link>
      </div>
    </section>
  );
};
