import { useEffect, useState } from 'react';
import { testimonials } from '../data/site';
import Eyebrow from './Eyebrow';

export default function Testimonials() {
  const [i, setI] = useState(0);

  // Auto-advance; the timer restarts whenever a dot is clicked
  useEffect(() => {
    const t = setInterval(() => setI(n => (n + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, [i]);

  return (
    <section className="testi">
      <Eyebrow center>WHAT OUR CLIENTS SAY</Eyebrow>
      <div className="slides">
        {testimonials.map((t, k) => (
          <blockquote key={k} className={k === i ? 'on' : ''}>“{t.quote}”<cite>— {t.author}</cite></blockquote>
        ))}
      </div>
      <div className="dots">
        {testimonials.map((_, k) => (
          <button key={k} className={k === i ? 'on' : ''} aria-label={`Review ${k + 1}`} onClick={() => setI(k)} />
        ))}
      </div>
    </section>
  );
}
