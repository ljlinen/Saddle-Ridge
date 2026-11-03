import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/base.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/services.css';
import './styles/about.css';
import './styles/experience.css';
import './styles/testimonials.css';
import './styles/footer.css';
import './styles/responsive.css';

createRoot(document.getElementById('root')).render(<App />);
