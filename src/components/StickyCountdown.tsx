import { CountdownTimer } from "./CountdownTimer";
import { motion } from "framer-motion";

export const StickyCountdown = () => (
  <motion.div
    initial={{ y: -60 }}
    animate={{ y: 0 }}
    transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
    className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 py-2 px-3"
  >
    <div className="max-w-3xl mx-auto flex items-center justify-between">
      <span className="text-foreground text-xs sm:text-sm font-bold tracking-tight">
        🔴 <span className="hidden sm:inline">6 aulas saem do ar</span>
      </span>
      <CountdownTimer variant="sticky" />
    </div>
  </motion.div>
);
