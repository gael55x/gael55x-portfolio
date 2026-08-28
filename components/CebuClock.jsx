'use client';

import { useEffect, useState } from 'react';

const formatter = new Intl.DateTimeFormat('en-PH', {
  timeZone: 'Asia/Manila',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

/** Live local time in Cebu. Renders nothing until mounted so SSR stays clean. */
export default function CebuClock() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;
  return <span> · {time} local</span>;
}
