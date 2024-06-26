import React from "react";
import logo from "@/app/content/logo.svg";
import Image from "next/image";
import { ContactTextItem } from "@/app/content/components/Footer/FooterTextItem";
import { Footer } from "@/app/content/components/Footer/Footer";
import texts from "../../texts.json";

export const ContactSection = () => {
  return (
    <div id={"footer"} className={"h-[575px] p-6 h-auto max-h-[575px]"}>
      <div className={"mb-12"}>
        <span className={"w-full text-irga-dark text-5xl font-libre"}>
          sociale i kontakt
        </span>
        <section className={"grid grid-cols-2"}>
          <Image src={logo} alt={"logo"} />
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
    </div>
  );
};
