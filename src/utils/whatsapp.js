import { whatsapp } from '../data/siteData';

// Gera um link do WhatsApp com a mensagem já codificada para URL.
export function createWhatsAppLink(message = whatsapp.messages.general) {
  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`;
}

// Atributos padrão para links externos: nova aba sem expor a página de origem.
export const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
};
