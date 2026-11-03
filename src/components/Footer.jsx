import { nav, social, copyright } from '../data/site';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-top">
        <Logo />
        <nav>{nav.map(n => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}</nav>
        <div className="social">
          {social.map(s => <a key={s.label} href={s.href} aria-label={s.label}>{s.glyph}</a>)}
        </div>
      </div>
      <p className="copy">{copyright}</p>
    </footer>
  );
}
