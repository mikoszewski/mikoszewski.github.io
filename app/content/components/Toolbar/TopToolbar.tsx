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

  const getActiveClass = (activeSection: string | null) => {
    return activeSection === "about_us" ||
      activeSection === "offer" ||
      activeSection === "rep" ||
      activeSection === "social_mediaa"
      ? "button-toolbar-white"
      : "button-toolbar-black";
  };

  return (
    <div className="bg-transparent p-4 flex justify-between items-center sticky top-0 h-[80px] z-10">
      <div className="flex justify-between space-x-4 p-2 w-1/2">
        <div className=" flex gap-4">
          <button
            className={getActiveClass(activeSection)}
            onClick={() => scrollToSection("offer")}
          >
            {texts.irga.toolbar.offer}
          </button>
          <Link href={"/o_nas"} className={getActiveClass(activeSection)}>
            {texts.irga.toolbar.about_us}
          </Link>
          <button
            className={getActiveClass(activeSection)}
            onClick={() => scrollToSection("footer")}
          >
            {texts.irga.toolbar.contact}
          </button>
          <Link
            className={getActiveClass(activeSection)}
            href={"repertuar"}
            onClick={() => scrollToSection("events")}
          >
            {texts.irga.toolbar.rep}
          </Link>
        </div>
        <div className="flex gap-4">
          <Link
            href={"https://www.instagram.com/irga.impro/reels/"}
            className={getActiveClass(activeSection)}
            target={"_blank"}
          >
            {texts.irga.toolbar.instagram}
          </Link>
          <Link
            href={"https://www.facebook.com/irga.impro"}
            target={"_blank"}
            className={getActiveClass(activeSection)}
          >
            {texts.irga.toolbar.facebook}
          </Link>
        </div>
      </div>
      <div className="justify-end">
        <Link href="/">
          <Image
            src={
              activeSection === "about_us" ||
              activeSection === "offer" ||
              activeSection === "rep"
                ? logoWhite
                : logo
            }
            alt={"logo"}
          />
        </Link>
      </div>
    </div>
  );
};
