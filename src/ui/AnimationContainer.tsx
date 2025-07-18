

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function AnimationContainer({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        delay: 0.2,
      }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
