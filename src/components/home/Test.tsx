import React from 'react'
import { motion } from "framer-motion";
const Test = () => {
  return (
    <motion.div
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        x:[100, 200, 500, 100]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    >
        test
    </motion.div>
  )
}

export default Test