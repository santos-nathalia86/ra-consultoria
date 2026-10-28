import { ArrowRight } from 'lucide-react';
import { steps } from '../data/siteData';
import { createWhatsAppLink, externalLinkProps } from '../utils/whatsapp';

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section steps" aria-labelledby="como-funciona-titulo">
      <div className="container">
        <header className="steps__header">
          <div>
            <p className="section-label section-label--light" data-reveal>
              Como funciona
            </p>
            <h2 id="como-funciona-titulo" className="section-title" data-reveal style={{ '--delay': '80ms' }}>
              Um planejamento com direção em cada etapa.
            </h2>
          </div>
          <p className="steps__intro" data-reveal style={{ '--delay': '160ms' }}>
            Do primeiro contato aos ajustes do treino, você sabe exatamente o que acontece em cada fase da
            consultoria.
          </p>
        </header>

        <ol className="timeline">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="timeline__step"
              data-reveal
              style={{ '--delay': `${index * 90}ms` }}
            >
              <span className="timeline__marker" aria-hidden="true">
                {index + 1}
              </span>
              <h3 className="timeline__title">{step.title}</h3>
              <p className="timeline__text">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="steps__footer" data-reveal>
          <a className="btn btn--light" href={createWhatsAppLink()} {...externalLinkProps}>
            Começar pela avaliação
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
