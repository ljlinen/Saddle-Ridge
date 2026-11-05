// All editable content lives here: text, links, services, reviews, contact, image names.
export const brand = { name: 'SADDLE RIDGE', tagline: 'EQUESTRIAN CENTRE' };

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

// Files live in /public/images
const img = name => `${import.meta.env.BASE_URL}images/${name}`;
const video = name => `${import.meta.env.BASE_URL}videos/${name}`;

export const images = {
  logo: img('logo.svg'),
  about: img('about-horse.webp'),
  gallery: [img('gallery-1.webp'), img('gallery-2.webp'), img('gallery-3.webp')],
};

export const videos = {
  hero: video('hero-horses.webm'),
};

export const hero = {
  eyebrow: 'RIDE • LEARN • EXPERIENCE',
  title: ['Saddle Ridge', 'Equestrian Centre'],
  text: 'Horse riding, care and unforgettable experiences in the heart of Kameeldrift, Pretoria.',
  cta: 'Explore Our Services',
};

export const services = [
  { icon: 'lessons', title: 'Riding Lessons', text: 'From beginners to advanced riders.' },
  { icon: 'stable', title: 'Horse Stabling', text: 'Safe and comfortable boarding.' },
  { icon: 'party', title: 'Pony Parties', text: 'Unforgettable birthday celebrations.' },
  { icon: 'camera', title: 'Photoshoot Venue', text: 'Capture special moments.' },
  { icon: 'therapy', title: 'Equine Therapy', text: 'Healing through horses.' },
];

export const about = {
  title: ['More Than Just', 'a Riding Centre'],
  text: "At Saddle Ridge, we believe in the powerful connection between horse and rider. Our centre offers a welcoming environment for all ages and skill levels, whether you're here to ride, learn or simply enjoy the beauty of horses.",
};

export const contact = {
  address: ['149 Bosuil Road,', 'Kameeldrift East,', 'Pretoria'],
  mapsUrl: 'https://maps.google.com/?q=149+Bosuil+Road+Kameeldrift+East+Pretoria',
  phone: '076 362 9038',
  phoneHref: 'tel:+27763629038',
  tag: 'RIDE • LEARN • CONNECT',
};

export const experience = {
  title: 'Create Unforgettable Moments at Saddle Ridge',
  text: 'From riding lessons to special events, enjoy a unique equestrian experience in a beautiful setting.',
};

export const testimonials = [
  { quote: 'Saddle Ridge is amazing! The staff are friendly, the horses are beautiful, and the experience is unforgettable.', author: 'Happy Customer' },
  { quote: "My daughter's pony party was perfect. Patient instructors and calm, well-cared-for horses.", author: 'Happy Parent' },
  { quote: 'The most peaceful place to learn. I went from nervous beginner to confident rider.', author: 'Riding Student' },
];

export const social = [
  { label: 'Facebook', glyph: 'f', href: '#' },
  { label: 'Instagram', glyph: '◯', href: '#' },
  { label: 'TikTok', glyph: '♪', href: '#' },
];

export const copyright = '© 2026 Saddle Ridge Equestrian Centre. All rights reserved.';
