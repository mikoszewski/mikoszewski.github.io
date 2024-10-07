import React from "react";
import logo from "@/app/content/logo.svg";
import Image from "next/image";
import { ContactTextItem } from "@/app/content/components/Footer/FooterTextItem";
import { Footer } from "@/app/content/components/Footer/Footer";
import texts from "../../texts.json";

export const ContactSection = () => {
  return (
    <section
      id={"footer"}
      className={
        "flex h-auto max-h-[575px] w-full flex-col gap-6 border-t-[1px] border-irga-black p-10"
      }
    >
      <div className={"mt-3 md:mt-10"}>
        <span className={"w-full font-libre text-5xl text-irga-dark"}>
          sociale i kontakt
        </span>
        <section className={"mt-2 grid grid-cols-1 md:mt-24 md:grid-cols-2"}>
          <div
            className={
              "flex items-start justify-start py-10 md:justify-center md:p-0"
            }
          >
            <Image src={logo} alt={"logo"} className={"scale-150 md:mb-0"} />
          </div>
          <div className={"grid space-y-4 md:grid-cols-3 md:space-y-0"}>
            <div className={"flex gap-4 md:col-span-1 md:flex-col"}>
              <ContactTextItem
                headerText={"instagram"}
                content={"irga.impro"}
              />
              <ContactTextItem
                headerText={"instagram"}
                content={"irga.impro"}
              />
            </div>
            <div className={"flex gap-4 md:col-span-2 md:flex-col"}>
              <ContactTextItem
                headerText={
                  "teatr improwizacji – eventy, spektakle na zamówienie, organizacja szkoleń i warsztatów"
                }
                content={"irga.impro@gmail.com"}
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
};
