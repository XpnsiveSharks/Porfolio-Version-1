import { AnimatePresence, motion } from "framer-motion";
const ThemeTransition = ({ isToggling }: { isToggling: boolean }) => (
  <AnimatePresence>
    {isToggling && (
      <motion.div
        key="theme-transition"
        className="fixed top-1/2 left-1/2 z-50 h-1 w-1 rounded-full bg-black pointer-events-none"
        initial={{ scale: 0, opacity: 0.6, x: "-50%", y: "-50%" }}
        animate={{ scale: 150, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
      />
    )}
  </AnimatePresence>
);
export default ThemeTransition;
