import Photo from './Photo';
import { goals, images } from '../data/siteData';

export default function Goals() {
  return (
    <section id="objetivos" className="section goals" aria-labelledby="objetivos-titulo">
      <div className="container goals__grid">
        <div className="goals__content">
          <p className="section-label" data-reveal>
            Objetivos
          </p>
          <h2 id="objetivos-titulo" className="section-title" data-reveal style={{ '--delay': '80ms' }}>
            Treinar com propósito. Evoluir no seu ritmo.
          </h2>
          <p className="goals__intro" data-reveal style={{ '--delay': '160ms' }}>
            Para quem está começando agora ou já treina há algum tempo. O planejamento parte do objetivo que
            importa para você.
          </p>

          <ul className="goals__list">
            {goals.map(({ label, icon: Icon }, index) => (
              <li key={label} className="goals__item" data-reveal style={{ '--delay': `${index * 70}ms` }}>
                <span className="goals__icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                {label}
              </li>
            ))}
          </ul>

          <p className="goals__note" data-reveal>
            Os resultados variam de acordo com as características, a rotina e as condições de cada pessoa.
          </p>
        </div>

        <Photo src={images.goals.src} alt={images.goals.alt} className="goals__photo" />
      </div>
    </section>
  );
}
