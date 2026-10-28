import { useEffect, useState } from 'react';
import Logo from './Logo';
import useScrolledPast from '../hooks/useScrolledPast';
import useActiveSection from '../hooks/useActiveSection';
import { brand, navLinks, whatsapp } from '../data/siteData';
import { createWhatsAppLink, externalLinkProps } from '../utils/whatsapp';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolledPast(12);
  const activeSection = useActiveSection();
  const closeMenu = () => setMenuOpen(false);

  // Com o menu móvel aberto (tela cheia): trava a rolagem da página
  // e permite fechar com a tecla Esc.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}${menuOpen ? ' header--open' : ''}`}>
      <div className="container header__inner">
        <Logo onClick={closeMenu} />

        <button
          type="button"
          className="header__toggle"
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {/* Três linhas que se transformam em "X" via CSS */}
          <span className="burger" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        {/* No desktop: links em linha + botão. No celular: tela cheia verde,
            com números, entrada em sequência e contato no rodapé do menu. */}
        <nav id="menu-principal" className="nav" aria-label="Navegação principal">
          <ul className="nav__list">
            {navLinks.map((link, index) => {
              const isActive = link.href === `#${activeSection}`;
              return (
                <li key={link.href} style={{ '--i': index }}>
                  <a
                    className={`nav__link${isActive ? ' nav__link--active' : ''}`}
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={closeMenu}
                  >
                    <span className="nav__index" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="nav__footer">
            <a className="btn btn--primary btn--small" href={createWhatsAppLink()} {...externalLinkProps} onClick={closeMenu}>
              Fale comigo
            </a>
            <p className="nav__info">
              {brand.professional}
              {brand.cref && ` · CREF ${brand.cref}`}
              <br />
              WhatsApp {whatsapp.display}
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
