import React from "react";
import { Layout } from "@/app/content/components/Layout";
import { SectionEvents } from "@/app/content/components/Sections/SectionEvents";
import Image from "next/image";
import repertuar from "@/app/content/repertuar-bg-1.jpeg";
import { SectionSocialMedia } from "@/app/content/components/Sections/SectionSocialMedia";
import { SectionPreviousEvents } from "@/app/content/components/Sections/SectionPreviousEvents";

const Repertuar: React.FC = () => {
  return (
    <Layout>
      <section id={"rep"} className={""}>
        <Image
          src={repertuar}
          alt={"repertuar_bg_1"}
          className={"w-full h-auto"}
        />
      </section>
      <SectionEvents />
      <SectionSocialMedia />
      <SectionPreviousEvents />
    </Layout>
  );
};

export default Repertuar;
