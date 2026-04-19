'use client';

import { useEffect, useState } from 'react';

export default function TerrariaPlaytime() {
  const [hours, setHours] = useState<number | null>(null);
  const [minutes, setMinutes] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/steam')
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        setHours(data.hours);
        setMinutes(data.minutes);
      })
      .catch(() => setError(true));
  }, []);

  if (error) return null;
  if (hours === null) {
    return (
      <span className="text-neutral-500 inline-block animate-pulse">
        loading...
      </span>
    );
  }

  const formatted =
    hours >= 24
      ? `${Math.floor(hours / 24)}d ${hours % 24}h`
      : `${hours}h ${minutes}m`;

  return (
    <span className="text-neutral-400">
      <span className="text-neutral-200">{formatted}</span>
      {' '}lost to{' '}
      <a
        href="https://store.steampowered.com/app/105600/Terraria/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-200 underline underline-offset-2"
      >
        Terraria
      </a>
      .
    </span>
  );
}
