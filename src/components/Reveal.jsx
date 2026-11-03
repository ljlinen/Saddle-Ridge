import useReveal from '../hooks/useReveal';

// Fade/slide-in wrapper. Usage: <Reveal as="h2" delay={1}>Text</Reveal>
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', ...props }) {
  const [ref, visible] = useReveal();
  const cls = ['reveal', delay ? `d${delay}` : '', visible ? 'in' : '', className].filter(Boolean).join(' ');
  return <Tag ref={ref} className={cls} {...props} />;
}
