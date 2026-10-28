import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import useScrolledPast from '../hooks/useScrolledPast';
import { createWhatsAppLink, externalLinkProps } from '../utils/whatsapp';

// Atalho flutuante para o WhatsApp. Aparece depois da primeira dobra e some
// na chamada final e no rodapé, que já têm o próprio link para o WhatsApp
// (e onde o botão cobriria o conteúdo).
export default function WhatsAppButton() {
  const scrolledPastHero = useScrolledPast(640);
  const [nearEnd, setNearEnd] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll('#contato, footer');
    if (!('IntersectionObserver' in window) || targets.length === 0) return undefined;

    const visibleTargets = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleTargets.add(entry.target);
        else visibleTargets.delete(entry.target);
      });
      setNearEnd(visibleTargets.size > 0);
    });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const visible = scrolledPastHero && !nearEnd;

  return (
    <a
      className={`whatsapp-float${visible ? ' whatsapp-float--visible' : ''}`}
      href={createWhatsAppLink()}
      {...externalLinkProps}
      aria-label="Conversar com a Renata pelo WhatsApp"
    >
      <MessageCircle size={24} aria-hidden="true" />
    </a>
  );
}
