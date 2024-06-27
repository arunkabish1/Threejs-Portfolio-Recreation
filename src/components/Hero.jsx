import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen width matches a mobile device
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add listener for changes in media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Clean up listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto bg-black">
      <div className={`absolute inset-0 ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-violet to-purple" />
          <div className="w-5 h-5 rounded-full bg-[#07ff30]" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#29f37d]">Arun</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I am a Full Stack Developer, I build user interfaces and web applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-12 h-12 rounded-full border-4 border-secondary flex justify-center items-center">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
