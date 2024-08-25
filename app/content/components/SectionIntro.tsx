import irga from "../irga.png";
import irgaKrzywo from "../_44A9829-Poprawione-Szum-3 1.png";
import Image from "next/image";
import React from "react";
import { ButtonsGroup } from "@/app/content/components/ButtonsGroup";
import { SectionFaces } from "@/app/content/components/Sections/SectionFaces";

export const SectionIntro = () => {
  return (
    <section className="w-full h-full flex flex-col" id={"main"}>
      <div className={"h-[700px] flex flex-row justify-between items-center"}>
        <div className={"flex flex-col p-6"}>
          <span className={"text-irga-dark font-custom px-2 py-2 text-3xl"}>
            irga
          </span>
          <span className={"text-irga-dark font-custom px-2 py-2 text-6xl"}>
            towrzymy spektakle komediowe tu i teraz
          </span>
          <ButtonsGroup
            buttonOneName={"kup bilet"}
            buttonTwoName={"repertuar"}
          />
        </div>
        <Image
          src={irgaKrzywo}
          alt={"irga-krzywo"}
          className={"w-[900px] h-[900px] mr-8"}
        />
      </div>
    </section>
  );
};
