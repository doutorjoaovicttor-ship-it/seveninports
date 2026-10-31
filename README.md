# Seven Imports

Site/e-commerce premium da **Seven Imports**, revendedora independente de iPhones e produtos Apple no Distrito Federal.

## Direção do produto

A Home segue uma direção de **luxury tech minimalista**, com foco em:

- fotografia e destaque do produto;
- tipografia editorial;
- espaço negativo e hierarquia clara;
- motion discreto;
- confiança e conversão;
- experiência responsiva mobile-first;
- arquitetura preparada para evoluir para e-commerce completo.

## Posicionamento

- confiança, procedência e transparência;
- experiência premium;
- catálogo de iPhones e produtos Apple conforme estoque e procedência;
- atendimento por site, WhatsApp e redes sociais;
- estrutura preparada para catálogo, estoque, pedidos, clientes, pagamentos e atendimento.

> A Seven Imports é uma revendedora independente. O site não deve sugerir que a empresa é Apple Store ou Revendedora Autorizada Apple sem comprovação. Garantia, procedência e assistência devem ser descritas com precisão.

## Stack

React + TypeScript + Vite + CSS responsivo + Lucide Icons.

## Estrutura principal

- `src/components/` — componentes da Home e experiência de e-commerce;
- `src/data/products.ts` — catálogo demonstrativo substituível pelo catálogo real;
- `src/types/product.ts` — modelos de dados;
- `src/lib/whatsapp.ts` — integração configurável com WhatsApp;
- `src/App.tsx` — composição da Home;
- `src/styles.css` — Design System e responsividade.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## WhatsApp

Configure `VITE_WHATSAPP_NUMBER` em `.env` usando o número em formato internacional, somente dígitos.

O projeto não contém número fictício no código.

## Dados demonstrativos

O catálogo atual usa dados e imagens demonstrativos. Não foram adicionados preços ou estoque inventados. Antes do lançamento, substituir os produtos por dados reais.

## Próximas integrações

1. catálogo real e variações de aparelho;
2. estoque e disponibilidade;
3. cadastro/login;
4. carrinho e checkout;
5. pagamentos;
6. cálculo de frete/entrega;
7. pedidos e acompanhamento;
8. painel administrativo;
9. atendimento/WhatsApp;
10. SEO local para Distrito Federal.

Todas as próximas alterações do projeto devem ser mantidas neste repositório.
