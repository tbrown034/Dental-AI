"use client"
import React, { useState } from "react";
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

  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-sky-100">
      <div className="p-9 bg-white rounded-lg shadow-md space-y-6">
        <motion.h1
          className="text-4xl font-bold text-gray-800 text-center"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 2 }}
        >
          Good Night, my love!
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 text-center"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 3, delay: 0.5 }}
        >
          I hope you are fast asleep or will be soon! Here's the pup as motivation of how nice the sleelps feel!
        </motion.p>
        <motion.img
          className="rounded-lg mx-auto"
          src="/Images/indyPup5.jpeg"
          alt="Sleeping Dog"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 5, delay: 2 }}
        />

        <motion.div
          className="flex items-center justify-center space-x-2"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 1, delay: 5.5 }}
        >
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded flex items-center space-x-2"
            onClick={handleLike}
          >
            <span>❤️</span>
            <span>Like</span>
          </button>
          <span className="text-xl text-gray-600 bg-gray-200 px-3 py-1 rounded-md">{likes}</span>
        </motion.div>

        <motion.p
          className="text-xl text-gray-600 text-center"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 1, delay: 5.5 }}
        >
          Sweet dreams! I'm excited about doing something fun tomorrow.
        </motion.p>
      </div>
    </div>
  );
};

export default Page;
