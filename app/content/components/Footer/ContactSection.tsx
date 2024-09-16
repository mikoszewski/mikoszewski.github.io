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
        "pl-6 h-auto max-h-[575px] w-full gap-6 flex flex-col border-t-[1px] border-irga-black"
      }
    >
      <div className={"mt-3 md:mt-10"}>
        <span
          className={"w-full text-irga-dark text-xl md:text-5xl font-libre"}
        >
          sociale i kontakt
        </span>
        <section className={"grid grid-cols-1 md:grid-cols-2 mt-2 md:mt-24"}>
          <div className={"flex justify-center items-start"}>
            <Image
              src={logo}
              alt={"logo"}
              className={"scale-125 md:scale-150 mb-2 md:mb-0"}
            />
          </div>
          <div className={"grid grid-cols-3"}>
            <div className={"col-span-1 flex flex-col gap-4"}>
              <ContactTextItem
                headerText={"instagram"}
                content={"irga.impro"}
              />
              <ContactTextItem
                headerText={"instagram"}
                content={"irga.impro"}
              />
            </div>
            <div className={"col-span-2 flex flex-col gap-4"}>
              <ContactTextItem
                headerText={"teatr improwizacji"}
                content={"irga.impro@gmail.com"}
              />
              <ContactTextItem
                headerText={texts.irga.footer.contact.person_header}
                content={texts.irga.footer.contact.person_one}
                contentSecondary={texts.irga.footer.contact.person_two}
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
};
