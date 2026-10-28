import { ArrowRight } from 'lucide-react';
import { whatsapp } from '../data/siteData';
import { createWhatsAppLink, externalLinkProps } from '../utils/whatsapp';

export default function FinalCTA() {
  return (
    <section id="contato" className="section cta" aria-labelledby="cta-titulo">
      <div className="container cta__inner">
        <h2 id="cta-titulo" className="cta__title" data-reveal>
          Sua evolução começa com uma conversa.
        </h2>
        <p className="cta__text" data-reveal style={{ '--delay': '80ms' }}>
          Conheça a consultoria online da RA Movimento e descubra como um treinamento individualizado pode se
          encaixar na sua rotina.
        </p>
        <div className="cta__actions" data-reveal style={{ '--delay': '160ms' }}>
          <a className="btn btn--primary btn--large" href={createWhatsAppLink()} {...externalLinkProps}>
            Conversar com a Renata
            <ArrowRight size={20} aria-hidden="true" />
          </a>
          <p className="cta__phone">WhatsApp {whatsapp.display}</p>
        </div>
      </div>
    </section>
  );
}
