import { Check } from 'lucide-react';
import { planIncludes, plans, whatsapp } from '../data/siteData';
import { createWhatsAppLink, externalLinkProps } from '../utils/whatsapp';

export default function Plans() {
  return (
    <section id="planos" className="section plans" aria-labelledby="planos-titulo">
      <div className="container plans__grid">
        {/* Três blocos separados para que, no celular, os preços venham logo após o título. */}
        <header className="plans__header">
          <p className="section-label" data-reveal>
            Planos
          </p>
          <h2 id="planos-titulo" className="section-title" data-reveal style={{ '--delay': '80ms' }}>
            Escolha seu plano de acompanhamento.
          </h2>
        </header>

        <div className="plans__details">
          <h3 className="plans__includes-title" data-reveal style={{ '--delay': '160ms' }}>
            Nos dois planos
          </h3>
          <ul className="check-list" data-reveal style={{ '--delay': '200ms' }}>
            {planIncludes.map((item) => (
              <li key={item}>
                <Check size={18} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="plans__note" data-reveal>
            Frequência de ajustes, formas de pagamento e renovação são combinadas diretamente com a Renata
            antes do início.
          </p>
        </div>

        <div className="plans__options">
          {plans.map((plan, index) => (
            <article
              key={plan.id}
              className={`plan${plan.badge ? ' plan--featured' : ''}`}
              aria-labelledby={`plano-${plan.id}`}
              data-reveal
              style={{ '--delay': `${index * 100}ms` }}
            >
              {plan.badge && <p className="plan__badge">{plan.badge}</p>}
              <h3 id={`plano-${plan.id}`} className="plan__name">
                Plano {plan.name}
              </h3>
              <p className="plan__price">
                <span className="plan__currency">R$</span>
                <span className="plan__value">{plan.price}</span>
                <span className="plan__cents">,00</span>
              </p>
              <p className="plan__period">{plan.period}</p>
              {plan.perk && <p className="plan__perk">{plan.perk}</p>}
              {plan.reasons && (
                <ul className="check-list plan__reasons">
                  {plan.reasons.map((reason) => (
                    <li key={reason}>
                      <Check size={18} aria-hidden="true" />
                      {reason}
                    </li>
                  ))}
                </ul>
              )}
              <a
                className="btn btn--primary btn--block"
                href={createWhatsAppLink(whatsapp.messages[plan.id])}
                {...externalLinkProps}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
