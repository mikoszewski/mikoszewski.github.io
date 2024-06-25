import React, { ReactNode } from "react";
import { TopToolbar } from "@/app/content/components/Toolbar/TopToolbar";
import { Footer } from "@/app/content/components/Footer/Footer";
import { ContactSection } from "@/app/content/components/Footer/ContactSection";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <TopToolbar />
      <main>{children}</main>
      <ContactSection />
    </>
  );
};
