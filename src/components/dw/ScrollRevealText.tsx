import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export default function ScrollRevealText({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  y = 40,
}: ScrollRevealTextProps) {
  const ref = useRef(null);
  // trigger every time element comes into view
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
