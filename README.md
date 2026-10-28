# RA Movimento

Landing page da **RA Movimento**, consultoria online de treinamento personalizado com Renata de Andrade.

O site apresenta a consultoria, os benefícios, como funciona e os planos. O contato é feito direto pelo WhatsApp.

## Tecnologias

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [Lucide](https://lucide.dev/) (ícones)

## Como rodar

Requisitos: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto com o número do WhatsApp (só dígitos: código do país + DDD + número):

```
VITE_WHATSAPP_NUMBER=5511900000000
```

Depois:

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # gera a versão de produção em dist/
npm run preview  # visualiza o build localmente
```

> O `.env` não vai para o repositório. Ao publicar o site (Vercel, Netlify etc.), cadastre a variável `VITE_WHATSAPP_NUMBER` no painel da hospedagem.

## Estrutura

```
src/
├── components/   # seções da página (Hero, About, Plans, Footer...)
├── data/         # siteData.js — textos, planos, links e mensagens
├── hooks/        # efeitos de rolagem e seção ativa no menu
├── styles/       # estilos globais
└── utils/        # geração dos links do WhatsApp
public/           # favicon e imagens
```

## Editando o conteúdo

Textos, preços, mensagens do WhatsApp e imagens ficam todos em [`src/data/siteData.js`](src/data/siteData.js). Os componentes leem tudo de lá, então não é preciso mexer neles para atualizar o conteúdo.
