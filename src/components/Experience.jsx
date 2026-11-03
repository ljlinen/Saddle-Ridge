import { experience, images } from '../data/site';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import Button from './Button';
import SmartImage from './SmartImage';

export default function Experience() {
  return (
    <section className="exp" id="gallery">
      <div className="exp-text">
        <Eyebrow trail>OUR EXPERIENCE</Eyebrow>
        <Reveal as="h2" delay={1}>{experience.title}</Reveal>
        <Reveal as="p" delay={2}>{experience.text}</Reveal>
        <Button href="#gallery" variant="outline" delay={3}>View Gallery</Button>
      </div>
      <div className="strip">
        {images.gallery.map((src, i) => <SmartImage key={src} src={src} alt={`Gallery ${i + 1}`} />)}
      </div>
    </section>
  );
}
