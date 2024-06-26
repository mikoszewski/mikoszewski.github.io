"use client";

import React from "react";
import Image from "next/image";
import logo from "../../logo.svg";
import Link from "next/link";
import texts from "../../texts.json";

export const TopToolbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element && element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-transparent p-4 flex justify-between items-center sticky top-0 h-[80px]">
      <div className="flex justify-between space-x-4 p-2 w-1/2">
        <div className=" flex gap-4">
          <button
            className="button-toolbar"
            onClick={() => scrollToSection("offer")}
          >
            {texts.irga.toolbar.offer}
          </button>
          <Link href={"/o_nas"} className="button-toolbar">
            {texts.irga.toolbar.about_us}
          </Link>
          <button
            className="button-toolbar"
            onClick={() => scrollToSection("footer")}
          >
            {texts.irga.toolbar.contact}
          </button>
          <button
            className="button-toolbar"
            onClick={() => scrollToSection("events")}
          >
            {texts.irga.toolbar.rep}
          </button>
        </div>
        <div className="flex gap-4">
          <Link
            href={"https://www.instagram.com/irga.impro/reels/"}
            className="button-toolbar"
            target={"_blank"}
          >
            {texts.irga.toolbar.instagram}
          </Link>
          <Link
            href={"https://www.facebook.com/irga.impro"}
            target={"_blank"}
            className="button-toolbar"
          >
            {texts.irga.toolbar.facebook}
          </Link>
        </div>
      </div>
</div>
  );
};
