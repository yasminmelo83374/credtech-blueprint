import { CountdownTimer } from "./CountdownTimer";
import { motion } from "framer-motion";

export const StickyCountdown = () => (
  <motion.div
    initial={{ y: -60 }}
    animate={{ y: 0 }}
    transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
    className="fixed top-0 left-0 right-0 z-50 bg-destructive/95 backdrop-blur-md border-b border-destructive/30 py-2 md:py-2.5 px-3"
  >
    <div className="max-w-3xl mx-auto flex items-center justify-center gap-2 sm:gap-3">
      <span className="text-white text-[11px] sm:text-sm font-bold tracking-tight flex items-center gap-1.5">
        <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse" />
        <span className="sm:hidden">Aulas saem do ar em:</span>
        <span className="hidden sm:inline">⚠️ As 6 aulas saem do ar em:</span>
      </span>
      <CountdownTimer variant="sticky" />
    </div>
  </motion.div>
);
