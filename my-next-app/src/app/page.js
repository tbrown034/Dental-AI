'use client'
import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (

      <div className="p-9 bg-sky-100 rounded-lg shadow-md space-y-6">
        <motion.h1
          className="text-4xl font-bold text-gray-800"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 2 }}
        >
          Good Night, my love!
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 3, delay: 0.5 }}
        >
          I hope you are fast asleep or will be soon! Here's the pup as motivation of how nice the sleelps feel!
        </motion.p>
        <motion.img
          className="rounded-lg"
          src="/Images/indyPup5.jpeg"
          alt="Sleeping Dog"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 5, delay: 2 }}
        />
        <motion.p
          className="text-xl text-gray-600"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 1, delay: 5.5 }}
        >
          Sweet dreams! I'm excited about doing something fun tomorrow.
        </motion.p>
      </div>
      
   
  );
};

export default Page;
