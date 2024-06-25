import React from "react";
import logo from "@/app/content/logo.svg";
import Image from "next/image";
import { ContactTextItem } from "@/app/content/components/Footer/FooterTextItem";
import { Footer } from "@/app/content/components/Footer/Footer";

export const ContactSection = () => {
  return (
    <div id={"footer"} className={"h-[575px] p-6 h-auto max-h-[575px]"}>
      <div className={"mb-12"}>
        <span className={"w-full text-irga-dark text-5xl font-light"}>
          sociale i kontakt
        </span>
        <section className={"grid grid-cols-2 pr-6"}>
          <Image src={logo} alt={"logo"} />
          <div className={"grid grid-cols-2 gap-4"}>
            <ContactTextItem headerText={"instagram"} content={"irga.impro"} />
            <ContactTextItem headerText={"instagram"} content={"irga.impro"} />
            <ContactTextItem
              headerText={"teatr improwizacji"}
              content={"irga.impro@gmail.com"}
            />
            <ContactTextItem
              headerText={"eventy, sprktakle, zamóweinia szkoleń i warsztaów"}
              content={"Krzysztof: +48 604 237 724"}
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
