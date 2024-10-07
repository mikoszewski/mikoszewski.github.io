import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useTopToolbar = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element && element.scrollIntoView({ behavior: "smooth" });
  };

  const handleBingoClick = () => {
    if (location.pathname === "/") {
      // If already on the main page, just scroll to the section
      scrollToSection("offer");
    } else {
      // Navigate to the main page and scroll to the section after navigating
      router.push("/");

      // Use setTimeout to ensure the page has changed before scrolling
      setTimeout(() => {
        scrollToSection("offer");
      }, 100);
    }
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

  return {
    scrollToSection,
    handleBingoClick,
    handleMouseMove,
    handleScroll,
    isVisible,
    lastScrollY,
  };
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        // @ts-ignore
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
