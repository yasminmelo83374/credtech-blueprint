import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TARGET = new Date("2026-03-03T19:00:00-03:00").getTime();

export const CountdownTimer = ({ variant = "default" }: { variant?: "default" | "sticky" }) => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET - Date.now());
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { value: time.days, label: "dias" },
    { value: time.hours, label: "horas" },
    { value: time.minutes, label: "min" },
    { value: time.seconds, label: "seg" },
  ];

  const isSticky = variant === "sticky";

  return (
    <div className={`flex ${isSticky ? "gap-2" : "gap-3"} items-center`}>
      {isSticky && (
        <span className="text-foreground/80 text-[10px] sm:text-xs font-medium mr-1 hidden sm:inline">
          Sai do ar em:
        </span>
      )}
      {blocks.map((b, i) => (
        <div key={i} className="flex flex-col items-center">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={b.value}
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`bg-primary text-primary-foreground font-bold rounded-lg flex items-center justify-center ${
                isSticky
                  ? "text-sm w-9 h-9 sm:text-base sm:w-10 sm:h-10"
                  : "text-xl md:text-2xl w-14 h-14"
              }`}
            >
              {String(b.value).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
          <span className={`text-muted-foreground mt-1 ${isSticky ? "text-[9px] sm:text-[10px]" : "text-xs"}`}>
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
};
