import { services } from '../data/site';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import Icon from './Icon';

export default function Services() {
  return (
    <section className="services" id="services">
      <Eyebrow center>OUR SERVICES</Eyebrow>
      <Reveal as="h2" delay={1} className="center">What We Offer</Reveal>
      <div className="cards">
        {services.map((s, i) => (
          <Reveal key={s.title} as="a" href="#contact" delay={i} className="card">
            <Icon name={s.icon} />
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <i className="circ">→</i>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
