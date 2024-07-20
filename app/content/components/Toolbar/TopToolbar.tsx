"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../logo.svg";
import logoWhite from "../../logo_white.svg";
import Link from "next/link";
import texts from "../../texts.json";

export const TopToolbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element && element.scrollIntoView({ behavior: "smooth" });
  };
  const [activeSection, setActiveSection] = useState<string | null>(null);
  console.log("active", activeSection);
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      rootMargin: "0px 0px -95% 0px", // This ensures the intersection is detected when the top of the section hits the top of the viewport
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.boundingClientRect.height > 600) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);
    console.log("sections", sections);
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const isSecondaryText = () => {
    return activeSection === "morda" || activeSection === "offer";
  };

  return (
    <div className="bg-transparent p-4 flex justify-between items-center sticky top-0 h-[80px]">
      <div className="flex justify-between space-x-4 p-2 w-1/2">
        <div className=" flex gap-4">
          <button
            className={
              isSecondaryText()
                ? "button-toolbar-white"
                : "button-toolbar-black"
            }
            onClick={() => scrollToSection("offer")}
          >
            {texts.irga.toolbar.offer}
          </button>
          <Link
            href={"/o_nas"}
            className={
              isSecondaryText()
                ? "button-toolbar-white"
                : "button-toolbar-black"
            }
          >
            {texts.irga.toolbar.about_us}
          </Link>
          <button
            className={
              isSecondaryText()
                ? "button-toolbar-white"
                : "button-toolbar-black"
            }
            onClick={() => scrollToSection("footer")}
          >
            {texts.irga.toolbar.contact}
          </button>
          <button
            className={
              isSecondaryText()
                ? "button-toolbar-white"
                : "button-toolbar-black"
            }
            onClick={() => scrollToSection("events")}
          >
            {texts.irga.toolbar.rep}
          </button>
        </div>
        <div className="flex gap-4">
          <Link
            href={"https://www.instagram.com/irga.impro/reels/"}
            className={
              isSecondaryText()
                ? "button-toolbar-white"
                : "button-toolbar-black"
            }
            target={"_blank"}
          >
            {texts.irga.toolbar.instagram}
          </Link>
          <Link
            href={"https://www.facebook.com/irga.impro"}
            target={"_blank"}
            className={
              isSecondaryText()
                ? "button-toolbar-white"
                : "button-toolbar-black"
            }
          >
            {texts.irga.toolbar.facebook}
          </Link>
        </div>
      </div>
      <div className="justify-end">
        <Link href="/">
          <Image src={isSecondaryText() ? logoWhite : logo} alt={"logo"} />
        </Link>
      </div>
    </div>
  );
};
