import Reveal from './Reveal';

export default function Button({ href, variant = 'dark', delay, children }) {
  return (
    <Reveal as="a" href={href} delay={delay} className={`btn btn-${variant}`}>
      {children} <i className="arr">→</i>
    </Reveal>
  );
}
