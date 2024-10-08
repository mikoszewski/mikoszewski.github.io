import React from "react";
import Image from "next/image";
import team from "@/app/content/Frame 120.png";
import Link from "next/link";
import maziaj from "../../maziaj.svg";

export const SectionSocialMedia = () => {
  return (
    <section
      className={
        " w-full bg-irga-black flex flex-row justify-between items-end relative"
      }
      id={"social_media"}
    >
      <div
        className={
          "md:w-2/5 text-irga-light font-libre text-lg md:text-6xl p-6 flex flex-col mb-20 gap-6"
        }
      >
        <span>chcesz być na bieżąco? zerknij na nasze sociale:</span>
        <div className={"flex flex-row space-x-2 p-4 gap-7"}>
          <Link
            href={"https://goout.net/pl/profile/irga-impro/pptqc/events/"}
            target={"_blank"}
            className={
              "bg-irga-sand w-auto text-irga-dark font-questrial px-8 py-2 text-ml md:text-2xl text-center"
            }
          >
            {"facebook"}
          </Link>
          <Link
            href="/repertuar"
            className={
              "bg-irga-sand w-auto text-irga-dark font-questrial px-8 py-2 text-ml md:text-2xl text-center"
            }
          >
            {"insta"}
          </Link>
        </div>
      </div>
      <div className={"md:w-3/5"}>
        <Image src={team} alt={"irga_social"} className={"h-auto"} />
      </div>
      <Image
        src={maziaj}
        alt={"maziaj"}
        className={"absolute top-1 left-1/3 md:left-1/4 scale-50 md:scale-100"}
      />
    </section>
  );
};
