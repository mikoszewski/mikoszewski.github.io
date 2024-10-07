"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../logo.svg";
import Link from "next/link";
import texts from "../../texts.json";
import {
  useTopToolbar,
  useWindowSize,
} from "@/app/content/components/Toolbar/utils";

export const TopToolbar = () => {
  const {
    lastScrollY,
    isVisible,
    scrollToSection,
    handleScroll,
    handleBingoClick,
    handleMouseMove,
  } = useTopToolbar();

  const getToolbarClass = () => {
    return isVisible
      ? "bg-irga-sand flex justify-between items-center sticky top-0 h-[80px] z-20 transform transition-transform duration-300 ease-in-out relative"
      : "bg-irga-sand flex justify-between items-center sticky top-0 h-[80px] z-20 transform transition-transform duration-300 ease-in-out -translate-y-full relative";
  };

  const { width } = useWindowSize();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleScroll, lastScrollY]);

  return (
    <div className={getToolbarClass()}>
      {width && width < 728 ? (
        <SmallScreenTopToolbar
          handleBingoClick={handleBingoClick}
          scrollToSection={scrollToSection}
          isVisible={isVisible}
        />
      ) : (
        <>
          <div className="flex items-center justify-between px-10 md:w-1/2 md:space-x-4">
            <div className="flex items-center md:gap-4">
              <button
                className={"button-toolbar-black"}
                onClick={() => handleBingoClick()}
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
              <Link className={"button-toolbar-black"} href={"/repertuar"}>
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
          <div className="justify-end px-10">
            <Link href="/">
              <Image
                src={logo}
                alt={"logo"}
                className={"scale-75 md:scale-100"}
              />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

const SmallScreenTopToolbar = ({
  handleBingoClick,
  scrollToSection,
  isVisible,
}: SmallScreenTopToolbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  useEffect(() => {
    !isVisible && setIsOpen(false);
  }, [isVisible]);

  return (
    <div className="w-full">
      <div className="flex flex-col px-10">
        <div className="flex w-full flex-row justify-between">
          <div className="flex items-center md:gap-4">
            <button
              className={"button-toolbar-black text-2xl"}
              onClick={() => toggleIsOpen()}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              {isOpen ? "zamknij" : "meni"}
            </button>
          </div>
          <Link href="/">
            <Image src={logo} alt={"logo"} className={"scale-100"} />
          </Link>
        </div>
        {isOpen && isVisible && (
          <div className="absolute left-0 top-20 w-4/5 border-t-2 border-t-black bg-irga-sand">
            <div className="items-startmd:gap-4 flex flex-col px-10">
              <button
                className={"button-toolbar-black self-start text-2xl"}
                onClick={() => handleBingoClick()}
              >
                {texts.irga.toolbar.offer}
              </button>
              <Link href={"/o_nas"} className={"button-toolbar-black text-2xl"}>
                {texts.irga.toolbar.about_us}
              </Link>
              <button
                className={"button-toolbar-black self-start text-2xl"}
                onClick={() => scrollToSection("footer")}
              >
                {texts.irga.toolbar.contact}
              </button>
              <Link
                className={"button-toolbar-black text-2xl"}
                href={"/repertuar"}
              >
                {texts.irga.toolbar.rep}
              </Link>
              <Link
                href={"https://www.instagram.com/irga.impro/reels/"}
                className={"button-toolbar-black text-2xl"}
                target={"_blank"}
              >
                {texts.irga.toolbar.instagram}
              </Link>
              <Link
                href={"https://www.facebook.com/irga.impro"}
                target={"_blank"}
                className={"button-toolbar-black text-2xl"}
              >
                {texts.irga.toolbar.facebook}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface SmallScreenTopToolbarProps {
  handleBingoClick: () => void;
  scrollToSection: (id: string) => void;
  isVisible: boolean;
}
