import { useState, useEffect } from "react";

export const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const onScroll = () => {
    const scrollTop = window !== undefined ? window.pageYOffset : 0;

    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
  
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  return { isScrolled };
};