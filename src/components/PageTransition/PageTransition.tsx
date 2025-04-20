import { ReactRef } from "@gsap/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

interface PageTransitionProps {
  orientation: string;
  animation: string;
  children: any;
  containerRef: ReactRef;
}

function PageTransition({
  orientation,
  animation,
  containerRef,
  children
} : PageTransitionProps) {
  const location = useLocation();

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      document.body.style.overflow = "hidden";
      switch (orientation) {
        case "vertical":
          gsap.fromTo(
            el,
            { y: "100%", opacity: 0 },
            {
              y: "0%",
              opacity: 1,
              duration: 0.8,
              ease: animation,
              onComplete: () => {
                document.body.style.overflow = "auto";
              },
            }
          );
          break;
        case "horizontal":
          gsap.fromTo(
            el,
            { x: "100%", opacity: 0 },
            {
              x: "0%",
              opacity: 1,
              duration: 0.8,
              ease: animation,
              onComplete: () => {
                document.body.style.overflow = "auto";
              },
            }
          );
          break;
      }
    }
  }, [location]);

  return <>{children}</>;
}

export default PageTransition;
