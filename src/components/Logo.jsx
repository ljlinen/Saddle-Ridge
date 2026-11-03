import { brand } from '../data/site';
import SmartImage from './SmartImage';
import { images } from '../data/site';
import IconLogo from '../assets/svg/logo.svg';

export default function Logo() {
  return (
    <a href="#home" className="logo">
      <IconLogo className="logo-mark" />
      {/* <span className="logo-mark">♞</span>
      <span><b>{brand.name}</b><small>{brand.tagline}</small></span> */}
    </a>
  );
}
