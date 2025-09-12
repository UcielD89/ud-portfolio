import { useEffect, useRef, useState } from "react";
import "./HomeViewStyles.css";
import { motion, easeInOut } from "motion/react";

const slideVariants = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: "0%", opacity: 1 },
  exit: { x: "-100%", opacity: 0 }
};

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};


const transition = { duration: 0.6, ease: easeInOut };

function HomeView() {
  const isFirstLoad = useRef(true);
  const [variants, setVariants] = useState(fadeVariants);

  useEffect(() => {
    if (isFirstLoad.current) {
      // en el primer render usamos solo fade
      setVariants(fadeVariants);
      isFirstLoad.current = false;
    } else {
      // en las transiciones usamos slide
      setVariants(slideVariants);
    }
  }, []);
  
  return (
    <motion.div
      className="home-container"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={transition}
    >
      <div className="home-name">
        <h1>UCIEL DARÓ</h1>
        <h4>FULLSTACK DEVELOR</h4>
      </div>
    </motion.div>
  );
}

export default HomeView;
