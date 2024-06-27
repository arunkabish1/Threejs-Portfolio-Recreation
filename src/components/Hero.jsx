import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./ComputersCanvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-black">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-1 sm:h-80 h-40 violet-gradient" /> {/* Ensure violet-gradient is defined */}
          <div className="w-5 h-5 rounded-full bg-[#07ff30]" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#29f37d]">Arun</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I am Full Stack Developer, I build user{" "}
            <br className="sm:block hidden" />
            interfaces and web applications.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
