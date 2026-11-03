import { useState } from 'react';
import { nav } from '../data/site';
import useScrolled from '../hooks/useScrolled';
import useActiveSection from '../hooks/useActiveSection';
import Logo from './Logo';

const ids = nav.map(n => n.id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection(ids);

  const toggle = v => {
    setOpen(v);
    document.body.classList.toggle('lock', v);
  };

  return (
    <header className={`nav ${scrolled ? 'solid' : ''}`}>
      <Logo />
      <nav className={`links ${open ? 'open' : ''}`}>
        {nav.map(n => (
          <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'active' : ''} onClick={() => toggle(false)}>{n.label}</a>
        ))}
        <a href="#contact" className="btn btn-dark mobile-only" onClick={() => toggle(false)}>Book a Ride</a>
      </nav>
      <a href="#contact" className="btn btn-dark desk-only">Book a Ride <i className="arr">→</i></a>
      <button className={`burger ${open ? 'open' : ''}`} aria-label="Menu" aria-expanded={open} onClick={() => toggle(!open)}>
        <span /><span />
      </button>
    </header>
  );
}
