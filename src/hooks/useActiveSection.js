import { useEffect, useState } from 'react';

// Retorna o id da seção que está no meio da tela, para destacar o link
// correspondente no menu. Observa todas as seções com id dentro do <main>,
// assim o destaque some ao passar por seções que não estão no menu.
export default function useActiveSection() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      // Faixa fina no meio da tela: só uma seção a ocupa por vez.
      { rootMargin: '-45% 0px -50% 0px' }
    );

    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeId;
}
