import { MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { brand, whatsapp } from '../data/siteData';
import { createWhatsAppLink, externalLinkProps } from '../utils/whatsapp';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
        </div>

        <div className="footer__col">
          <h2 className="footer__heading">Profissional</h2>
          <p className="footer__name">{brand.professional}</p>
          <p>Bacharel em Educação Física (UNIP)</p>
          {brand.cref && <p>CREF {brand.cref}</p>}
        </div>

        <div className="footer__col">
          <h2 className="footer__heading">Contato</h2>
          <ul>
            <li>
              <a className="footer__whatsapp" href={createWhatsAppLink()} {...externalLinkProps}>
                <MessageCircle size={18} aria-hidden="true" />
                <span>
                  WhatsApp <span className="nowrap">{whatsapp.display}</span>
                </span>
              </a>
            </li>
            {brand.instagram && (
              <li>
                <a href={brand.instagram} {...externalLinkProps}>
                  Instagram
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {brand.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
