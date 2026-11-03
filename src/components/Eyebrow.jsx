import Reveal from './Reveal';

// center: line on both sides. trail: line after the text.
export default function Eyebrow({ children, center, trail }) {
  return (
    <Reveal as="p" className={`eyebrow ${center ? 'center' : ''}`}>
      {center && <span />}{children}{(center || trail) && <span />}
    </Reveal>
  );
}
