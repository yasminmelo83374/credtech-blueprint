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
    <div className={`flex ${isSticky ? "gap-1.5 sm:gap-2" : "gap-3"} items-center`}>
      {blocks.map((b, i) => (
        <div key={i} className="flex flex-col items-center">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={b.value}
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`font-bold rounded-md flex items-center justify-center ${
                isSticky
                  ? "bg-white/20 text-white text-xs w-7 h-7 sm:text-sm sm:w-9 sm:h-9"
                  : "bg-primary text-primary-foreground text-xl md:text-2xl w-14 h-14"
              }`}
            >
              {String(b.value).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
          <span className={`mt-0.5 ${isSticky ? "text-white/70 text-[8px] sm:text-[10px]" : "text-muted-foreground text-xs mt-1"}`}>
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
};
