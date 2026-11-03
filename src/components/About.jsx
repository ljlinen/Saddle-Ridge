import { about, contact, images } from '../data/site';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import Button from './Button';
import Icon from './Icon';
import SmartImage from './SmartImage';

export default function About() {
  return (
    <section className="about" id="about">
      <SmartImage src={images.about} alt="Portrait of a horse" className="about-img" />
      <div className="about-text">
        <Eyebrow trail>ABOUT SADDLE RIDGE</Eyebrow>
        <Reveal as="h2" delay={1}>{about.title[0]}<br />{about.title[1]}</Reveal>
        <Reveal as="p" delay={2}>{about.text}</Reveal>
        <Button href="#gallery" delay={3}>Learn More</Button>
      </div>
      <aside className="contact" id="contact">
        <Reveal className="row">
          <Icon name="pin" />
          <a href={contact.mapsUrl} target="_blank" rel="noopener">
            {contact.address.map((line, i) => <span key={line}>{line}{i < contact.address.length - 1 && <br />}</span>)}
          </a>
        </Reveal>
        <Reveal delay={1} className="row"><Icon name="phone" /><a href={contact.phoneHref}>{contact.phone}</a></Reveal>
        <p className="tag">{contact.tag}</p>
      </aside>
    </section>
  );
}
