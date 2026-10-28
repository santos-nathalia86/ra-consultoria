import { benefits } from '../data/siteData';

export default function Benefits() {
  const [lead, ...rest] = benefits;

  return (
    <section id="diferenciais" className="section benefits" aria-labelledby="diferenciais-titulo">
      <div className="container benefits__grid">
        <header className="benefits__header">
          <p className="section-label" data-reveal>
            Diferenciais
          </p>
          <h2 id="diferenciais-titulo" className="section-title" data-reveal style={{ '--delay': '80ms' }}>
            Muito além de uma ficha de treino.
          </h2>
        </header>

        <div className="benefits__body">
          {/* O primeiro diferencial é a base de todos os outros, por isso ganha destaque. */}
          <div className="benefits__lead" data-reveal>
            <span className="benefits__number">01</span>
            <h3>{lead.title}</h3>
            <p>{lead.text}</p>
          </div>

          <ul className="benefits__list">
            {rest.map((item, index) => (
              <li
                key={item.title}
                className="benefits__item"
                data-reveal
                style={{ '--delay': `${(index % 2) * 90}ms` }}
              >
                <span className="benefits__number">{String(index + 2).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
