import { useState } from 'react';
import { LogoMark } from './Logo';

// Imagem com proporção fixa (definida no CSS) e um substituto neutro
// caso o arquivo não carregue — assim o layout nunca quebra.
export default function Photo({ src, alt, className = '', priority = false }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`photo ${className}`} data-reveal="fade">
      {failed ? (
        <div className="photo__fallback" role="img" aria-label={alt}>
          <LogoMark />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchpriority={priority ? 'high' : 'auto'}
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
    </figure>
  );
}
