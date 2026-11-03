import { useEffect, useState } from 'react';

// Tracks which section id is in view (for nav highlighting).
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.45 }
    );
    ids.map(id => document.getElementById(id)).filter(Boolean).forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}
