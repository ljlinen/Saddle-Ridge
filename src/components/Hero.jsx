import { useEffect, useRef } from 'react';
import { hero, images } from '../data/site';
import Reveal from './Reveal';
import Button from './Button';
import SmartImage from './SmartImage';
import HorsesVid from "/images/hero-horses.mp4"

export default function Hero() {
  const parallax = useRef(null);

  // Subtle parallax (skipped for reduced-motion users)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const on = () => {
      if (scrollY < innerHeight) parallax.current.style.transform = `translateY(${scrollY * 0.08}px)`;
    };
    addEventListener('scroll', on, { passive: true });
    return () => removeEventListener('scroll', on);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <Reveal as="p" className="eyebrow">{hero.eyebrow}</Reveal>
        <Reveal as="h1" delay={1}>{hero.title[0]}<br />{hero.title[1]}</Reveal>
        <Reveal as="p" delay={2} className="lead">{hero.text}</Reveal>
        <Button href="#services" delay={3}>{hero.cta}</Button>
      </div>
      <div ref={parallax} className="hero-parallax">
        {/* <SmartImage src={images.hero} alt="Saddled horses" className="hero-img" /> */}
        <video src={HorsesVid} alt="Saddled horses" className="hero-img" loop mute autoPlay/>

      </div>
      <a href="#services" className="scroll-hint"><span className="mouse" />Scroll Down</a>
    </section>
  );
}
