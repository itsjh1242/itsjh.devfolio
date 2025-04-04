import { animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

interface CountUpProps {
  targetNumber: number;
  duration?: number;
  className?: string;
}

export const CountUp = ({
  targetNumber,
  duration = 2,
  className,
}: CountUpProps) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, targetNumber, {
      duration,
      ease: [0.65, 0, 0.35, 1], // easeInOutCubic 느낌의 커스텀 이징
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return controls.stop;
  }, [targetNumber, duration, count]);

  return <span className={className}>{display}</span>;
};
