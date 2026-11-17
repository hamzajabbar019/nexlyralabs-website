import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <div
      className="fixed top-0 inset-x-0 z-[60] h-[2px] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        className="h-full w-full origin-left bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400"
        style={{
          scaleX: shouldReduceMotion ? scrollYProgress : smoothProgress,
        }}
      />
    </div>
  );
}
