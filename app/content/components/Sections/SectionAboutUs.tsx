import Image from "next/image";
import us from "@/app/content/onas4.png";
import React from "react";
import { Texts } from "@/app/content/texts";

export const SectionAboutUs = () => {
  return (
    <section className={"flex flex-col"}>
      <Image src={us} alt={"about-us"} className={"w-full h-auto"} />
      <div className={"py-32 pl-10 pr-12 flex flex-row gap-32"}>
        <span className={"text-5xl font-libre text-irga-dark"}>
          poznaj irgę
        </span>
        <div className={"text-2xl font-light font-custom text-irga-dark w-2/5"}>
          {Texts.IRGA_ABOUT_US.MEET.map((line, index) => (
            <span key={index} className={"block mb-6"}>
              {line}
              <br />
            </span>
          ))}
        </div>
      </div>
      <div className={"py-32 pl-10 pr-12 flex flex-row gap-32"}>
        <span className={"text-5xl font-libre text-irga-dark"}>historia</span>
        <div className={"text-2xl font-light font-custom text-irga-dark w-2/5"}>
          {Texts.IRGA_ABOUT_US.HISTORY.map((line, index) => (
            <span key={index} className={"block mb-6"}>
              {line}
              <br />
            </span>
          ))}
        </div>
      </div>
      <div className={"flex px-20 py-20 justify-items-end"}>
        <span className={"text-3xl font-libre text-irga-dark"}>
          {Texts.IRGA_ABOUT_US.SUMMARY}
        </span>
      </div>
    </section>
  );
};
