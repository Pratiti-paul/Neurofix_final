import { motion } from "framer-motion";
import "./StartButton.css";

export default function StartButton({ scrollToTarget }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="start-button"
      onClick={scrollToTarget}
    >
      Let’s Get Started
    </motion.button>
  );
}


// import React from "react";
// import { motion } from "framer-motion";
// import { FaArrowDown } from "react-icons/fa"; // arrow icon
// import "./StartButton.css";

// export default function StartButton({ scrollToTarget }) {
//   return (
//     <div className="start-button-wrapper" onClick={scrollToTarget}>
//       <motion.div
//         className="start-text"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         Let’s Get Started
//       </motion.div>
//       <motion.div
//         className="start-arrow"
//         animate={{ y: [0, 8, 0] }}
//         transition={{ repeat: Infinity, duration: 1.2 }}
//       >
//         <FaArrowDown size={24} />
//       </motion.div>
//     </div>
//   );
// }

