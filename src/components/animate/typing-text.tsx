import { motion } from "framer-motion";

type TypingTextProps = {
  text: string;
  duration?: number;
  className?: string;
};

export const TypingText = ({
  text,
  duration = 1,
  className = "",
}: TypingTextProps) => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: duration / text.length,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className={`flex gap-[1px] leading-none ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={child}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};
