import { useState } from 'react';

// Shows a gradient placeholder until the image file exists.
export default function SmartImage({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`ph ${className}`}>
      {!failed && <img src={src} alt={alt} onError={() => setFailed(true)} />}
    </div>
  );
}
