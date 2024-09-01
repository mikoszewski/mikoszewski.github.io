"use client";

import React, { ReactEventHandler, useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../logo.svg";
import Link from "next/link";
import texts from "../../texts.json";

export const TopToolbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element && element.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (e.clientY < 50) {
      setIsVisible(true);
    } else if (window.scrollY > 50) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleScroll, lastScrollY]);

  const getToolbarClass = () => {
    return isVisible
      ? "bg-irga-sand p-4 flex justify-between items-center sticky top-0 h-[80px] z-10 transform transition-transform duration-300 ease-in-out"
      : "bg-irga-sand p-4 flex justify-between items-center sticky top-0 h-[80px] z-10 transform transition-transform duration-300 ease-in-out -translate-y-full";
  };

  return (
    <div className={getToolbarClass()}>
      <div className="flex justify-between space-x-4 p-2 w-1/2">
        <div className=" flex gap-4">
          <button
            className={"button-toolbar-black"}
            onClick={() => scrollToSection("offer")}
          >
            {texts.irga.toolbar.offer}
          </button>
          <Link href={"/o_nas"} className={"button-toolbar-black"}>
            {texts.irga.toolbar.about_us}
          </Link>
          <button
            className={"button-toolbar-black"}
            onClick={() => scrollToSection("footer")}
          >
            {texts.irga.toolbar.contact}
          </button>
          <Link
            className={"button-toolbar-black"}
            href={"repertuar"}
            onClick={() => scrollToSection("events")}
          >
            {texts.irga.toolbar.rep}
          </Link>
        </div>
        <div className="flex gap-4">
          <Link
            href={"https://www.instagram.com/irga.impro/reels/"}
            className={"button-toolbar-black"}
            target={"_blank"}
          >
            {texts.irga.toolbar.instagram}
          </Link>
          <Link
            href={"https://www.facebook.com/irga.impro"}
            target={"_blank"}
            className={"button-toolbar-black"}
          >
            {texts.irga.toolbar.facebook}
          </Link>
        </div>
      </div>
      <div className="justify-end">
        <Link href="/">
          <Image src={logo} alt={"logo"} />
        </Link>
      </div>
    </div>
  );
};
