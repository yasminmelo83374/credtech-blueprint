import { useState, useEffect } from "react";

const TARGET = new Date("2026-03-02T23:59:00-03:00").getTime();

export const CountdownTimer = () => {
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

  return (
    <div className="flex gap-3">
      {blocks.map((b, i) => (
        <div key={i} className="flex flex-col items-center">
          <span className="bg-primary text-primary-foreground font-bold text-xl md:text-2xl rounded-lg w-14 h-14 flex items-center justify-center">
            {String(b.value).padStart(2, "0")}
          </span>
          <span className="text-muted-foreground text-xs mt-1">{b.label}</span>
        </div>
      ))}
    </div>
  );
};
