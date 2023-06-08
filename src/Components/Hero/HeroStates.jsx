import React from "react";
import { motion } from "framer-motion";
const HeroStates = (props) => {
  const states = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const state = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
    },
    transition: {
      duration: 0.25,
    },
  };

  return (
    <motion.div
      variants={states}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className={`${props.className} items-center justify-between mt-8`}>
      <motion.div
        variants={state}
        className="flex-[0.5] flex flex-col items-start ">
        <h5 className="text-h4 font-semibold font-space text-white">240k+</h5>
        <p className="text-white text-[20px] font-work">Total Sale</p>
      </motion.div>
      <motion.div
        variants={state}
        className="flex-[0.5] flex flex-col items-start ">
        <h5 className="text-h4 font-semibold font-space text-white">100k+</h5>
        <p className="text-white text-[20px] font-work">Auctions</p>
      </motion.div>
      <motion.div
        variants={state}
        className="flex-[0.5] flex flex-col items-start ">
        <h5 className="text-h4 font-semibold font-space text-white">240k+</h5>
        <p className="text-white text-[20px] font-work">Artists</p>
      </motion.div>
    </motion.div>
  );
};

export default HeroStates;
