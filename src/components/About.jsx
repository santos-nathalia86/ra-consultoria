import Photo from './Photo';
import { brand, credentials, images } from '../data/siteData';

export default function About() {
  return (
    <section id="sobre" className="section about" aria-labelledby="sobre-titulo">
      <div className="container about__grid">
        {/* Foto e números ficam juntos na coluna da esquerda para equilibrar a altura do texto. */}
        <div className="about__media">
          <Photo src={images.about.src} alt={images.about.alt} className="about__photo" />

          <dl className="credentials">
            {credentials.map((item, index) => (
              <div
                key={item.value}
                className="credentials__item"
                data-reveal
                style={{ '--delay': `${index * 90}ms` }}
              >
                <dt className="credentials__value">{item.value}</dt>
                <dd className="credentials__label">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="about__content">
          <p className="section-label" data-reveal>
            Sobre a Renata
          </p>
          <h2 id="sobre-titulo" className="section-title" data-reveal style={{ '--delay': '80ms' }}>
            Conhecimento técnico, experiência e atenção à sua individualidade.
          </h2>

          <div className="about__text" data-reveal style={{ '--delay': '160ms' }}>
            <p>
              Sou Renata de Andrade, bacharel em Educação Física pela Universidade Paulista (UNIP), com 7 anos
              de experiência profissional e 13 anos de vivência pessoal com a musculação.
            </p>
            <p>
              Ao longo da minha trajetória, desenvolvi experiência no acompanhamento de alunos com diferentes
              perfis, níveis de condicionamento e objetivos.
            </p>
            <p>
              Acredito que o treinamento físico vai além da estética. Ele também envolve autonomia, saúde,
              disciplina e qualidade de vida.
            </p>
            <p>
              Foi com essa visão que nasceu a RA Movimento: uma consultoria online com planejamento
              individualizado e acompanhamento profissional.
            </p>
          </div>

          {brand.cref && (
            <p className="about__signature" data-reveal>
              {brand.professional} <span aria-hidden="true">·</span> CREF {brand.cref}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
