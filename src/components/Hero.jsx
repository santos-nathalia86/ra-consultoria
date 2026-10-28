import { ArrowRight } from 'lucide-react';
import Photo from './Photo';
import { brand, images } from '../data/siteData';
import { createWhatsAppLink, externalLinkProps } from '../utils/whatsapp';

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-titulo">
      <div className="container hero__grid">
        <div className="hero__content">
          <h1 id="hero-titulo" className="hero__title" data-reveal>
            {brand.slogan.map((line) => (
              <span key={line} className="hero__line">
                {line}
              </span>
            ))}
          </h1>

          <p className="hero__lead" data-reveal style={{ '--delay': '160ms' }}>
            Transforme sua rotina, desenvolva sua força e conquiste seus objetivos com um treinamento pensado
            para você.
          </p>

          <div className="hero__actions" data-reveal style={{ '--delay': '240ms' }}>
            <a className="btn btn--primary" href={createWhatsAppLink()} {...externalLinkProps}>
              Quero conhecer a consultoria
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn btn--ghost" href="#planos">
              Ver os planos
            </a>
          </div>

          <dl className="hero__meta" data-reveal style={{ '--delay': '320ms' }}>
            <div>
              <dt>Profissional</dt>
              <dd>{brand.professional}</dd>
            </div>
            <div>
              <dt>Treinos</dt>
              <dd>App MFIT Personal</dd>
            </div>
            <div>
              <dt>Suporte</dt>
              <dd>WhatsApp</dd>
            </div>
          </dl>
        </div>

        <Photo src={images.hero.src} alt={images.hero.alt} className="hero__photo" priority />
      </div>
    </section>
  );
}
