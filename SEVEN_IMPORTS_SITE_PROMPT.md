# Seven Imports — Prompt mestre para criação do site

## Objetivo

Criar um e-commerce premium, moderno e confiável para a **Seven Imports**, uma loja brasileira de produtos importados. O site deve transmitir a sensação de uma marca estabelecida, profissional e confiável, sem parecer um template genérico de loja virtual.

O projeto deve ser responsivo, rápido, acessível, preparado para SEO e estruturado para crescer posteriormente para catálogo maior, checkout, painel administrativo, pedidos, clientes e integrações de pagamento/entrega.

## Direção visual

- Estética: premium, tecnológica, urbana e minimalista.
- Aparência de marca real, não de projeto de IA/template.
- Fundo predominantemente claro, com grandes áreas de respiro e blocos escuros usados para contraste.
- Paleta principal: preto/grafite, branco e detalhes em azul elétrico ou azul profundo.
- Bordas discretamente arredondadas.
- Sombras suaves e profundidade elegante.
- Tipografia moderna, forte nos títulos e extremamente legível no corpo.
- Microinterações rápidas e discretas.
- Animações somente quando melhorarem a experiência; não exagerar em efeitos.
- Usar imagens grandes e profissionais dos produtos.
- Não usar ícones clichês de importação, avião, navio ou bandeiras como identidade principal.
- Não utilizar emojis como elementos de interface.

## Marca

Nome da marca: **SEVEN IMPORTS**

Criar uma identidade visual coerente com o nome. O logotipo deve funcionar em versão horizontal e compacta. Dar preferência a um símbolo geométrico/monograma baseado no número 7 ou nas iniciais SI, com acabamento premium.

O logo deve aparecer no header, footer, favicon e telas de estados vazios quando apropriado.

## Estrutura do site

### 1. Header

Criar header premium e responsivo com:

- Logo Seven Imports.
- Busca de produtos em destaque.
- Categorias.
- Ofertas.
- Novidades.
- Ícone de conta.
- Ícone de favoritos.
- Carrinho com contador.
- Menu mobile elegante.

No desktop, o header pode ter uma primeira faixa pequena para comunicação comercial e uma segunda faixa principal para navegação.

### 2. Hero

Criar uma seção hero visualmente forte.

Headline sugerida:

**Os produtos que você procura. Do mundo para você.**

Subheadline:

**Produtos importados selecionados, compra segura e uma experiência feita para quem não aceita o comum.**

CTAs:

- **Comprar agora**
- **Ver ofertas**

Utilizar composição editorial com produto em destaque, iluminação sofisticada, gradientes sutis e elementos geométricos.

Não deixar o hero com aparência de banco de imagens genérico.

### 3. Categorias

Criar cards visuais para categorias. Como o catálogo real ainda será definido, usar categorias editáveis e dados mockados claramente separados da lógica do sistema.

Sugestões iniciais:

- Eletrônicos
- Acessórios
- Casa & Lifestyle
- Beleza
- Games
- Tecnologia
- Ofertas

As categorias devem ser facilmente substituíveis no futuro.

### 4. Produtos em destaque

Criar grid de produtos premium com:

- Foto.
- Nome.
- Categoria.
- Preço atual.
- Preço anterior quando houver.
- Percentual de desconto.
- Parcelamento.
- Avaliação.
- Botão adicionar ao carrinho.
- Favoritar.
- Badge de oferta/novo quando aplicável.

Criar estados para:

- produto em estoque;
- estoque baixo;
- esgotado;
- pré-venda.

### 5. Banner de ofertas

Criar uma seção visual para promoções com contador opcional.

Exemplo:

**OFERTAS SEVEN**

**Até 40% OFF em produtos selecionados.**

CTA: **Ver ofertas**

O conteúdo deve ser configurável.

### 6. Diferenciais

Criar seção com quatro diferenciais:

- Compra segura.
- Produtos selecionados.
- Envio para todo o Brasil.
- Atendimento especializado.

Evitar promessas que não estejam confirmadas no sistema. Deixar textos facilmente editáveis.

### 7. Seção institucional

Criar uma seção curta apresentando a Seven Imports.

Texto-base:

**Importar é encontrar o que existe de melhor no mundo.**

A Seven Imports nasceu para aproximar produtos desejados dos consumidores brasileiros, combinando curadoria, tecnologia e uma experiência de compra simples e segura.

CTA: **Conheça a Seven Imports**

Não inventar história, números, endereço, CNPJ ou anos de mercado.

### 8. Newsletter

Criar bloco de captura de e-mail:

**Receba as próximas novidades da Seven.**

Campo de e-mail + botão **Quero receber**.

Preparar estrutura para integração futura.

### 9. Footer

Footer completo com:

- Logo.
- Sobre a Seven Imports.
- Atendimento.
- Institucional.
- Políticas.
- Privacidade.
- Termos.
- Trocas e devoluções.
- Redes sociais.
- Formas de pagamento (somente placeholders configuráveis).
- Copyright.

Não inventar links, dados legais ou redes sociais reais.

## Páginas

Implementar arquitetura preparada para as seguintes páginas:

- `/` — Home
- `/produtos` — catálogo
- `/produto/:slug` — produto
- `/categoria/:slug` — categoria
- `/ofertas` — ofertas
- `/favoritos` — favoritos
- `/carrinho` — carrinho
- `/checkout` — checkout preparado para integração
- `/minha-conta` — conta do cliente
- `/pedidos` — pedidos
- `/sobre` — institucional
- `/contato` — contato
- `/politica-de-privacidade`
- `/termos-de-uso`
- `/trocas-e-devolucoes`

Se alguma integração não estiver disponível, criar a interface e a camada de serviço preparada para integração posterior, sem fingir que o pagamento ou envio está funcionando.

## Catálogo

Criar dados tipados para produtos contendo pelo menos:

- id
- slug
- nome
- descrição curta
- descrição completa
- preço
- preço anterior
- desconto
- imagens
- categoria
- marca
- SKU
- estoque
- avaliação
- número de avaliações
- tags
- status

Criar filtros por:

- categoria;
- preço;
- marca;
- avaliação;
- disponibilidade;
- ofertas.

Criar ordenação por:

- relevância;
- menor preço;
- maior preço;
- mais recentes;
- mais vendidos.

Criar busca com estado de carregamento, resultados e estado sem resultados.

## Carrinho

Implementar carrinho funcional no frontend:

- adicionar produto;
- remover produto;
- alterar quantidade;
- subtotal;
- desconto;
- frete placeholder;
- total;
- persistência local enquanto não houver backend.

Preparar arquitetura para posterior integração com backend/banco de dados.

## UX

A experiência precisa parecer de uma grande loja online:

- skeleton loading;
- estados vazios;
- mensagens de erro elegantes;
- feedback ao adicionar produto;
- toast discreto;
- navegação mobile excelente;
- acessibilidade básica;
- foco visível;
- contraste adequado;
- botões com estados hover/active/disabled;
- imagens com lazy loading quando apropriado.

## Responsividade

Prioridade absoluta para:

- desktop;
- notebook;
- tablet;
- celular.

No mobile, não simplesmente reduzir o desktop. Reorganizar os componentes para uma experiência de e-commerce realmente mobile-first.

## SEO

Implementar:

- títulos por página;
- meta descriptions;
- Open Graph;
- URLs amigáveis;
- sitemap preparado;
- robots preparado;
- dados estruturados de produto quando houver dados suficientes;
- headings semânticos;
- alt text nas imagens.

## Performance

Priorizar:

- componentes leves;
- lazy loading;
- imagens otimizadas;
- evitar bibliotecas desnecessárias;
- evitar animações pesadas;
- evitar efeitos que prejudiquem Core Web Vitals.

## Tecnologia

Se o projeto estiver sendo criado do zero, preferir:

- React + TypeScript;
- Vite;
- Tailwind CSS;
- componentes reutilizáveis;
- arquitetura organizada por features/components/pages;
- lucide-react ou biblioteca de ícones equivalente e leve;
- gerenciamento de estado simples e apropriado ao tamanho do projeto.

Não instalar dependências desnecessárias.

## Arquitetura

Organizar o código para facilitar evolução futura:

- `src/components`
- `src/pages`
- `src/features`
- `src/data`
- `src/lib`
- `src/hooks`
- `src/types`
- `src/assets`

Separar dados mockados da UI para que o catálogo real possa ser conectado depois.

## Segurança

- Nunca colocar chaves privadas no frontend.
- Nunca colocar tokens secretos no código.
- Usar `.env.example` para variáveis necessárias.
- Validar entradas de formulários.
- Não armazenar dados sensíveis do cliente de forma insegura.

## Conteúdo

Todo texto deve estar em **português do Brasil**.

Não inventar:

- CNPJ;
- endereço;
- telefone;
- avaliações reais;
- quantidade de clientes;
- número de pedidos;
- certificações;
- parceiros;
- marcas autorizadas;
- garantias que não tenham sido fornecidas.

Quando uma informação real ainda não estiver disponível, usar conteúdo neutro e claramente configurável.

## Resultado esperado

O resultado final deve parecer um e-commerce premium pronto para uma marca brasileira de importados, com design digno de uma empresa real e estrutura técnica preparada para produção.

Antes de considerar concluído:

1. Rodar o build.
2. Corrigir todos os erros TypeScript/ESLint/build.
3. Verificar rotas.
4. Verificar responsividade.
5. Verificar navegação do carrinho.
6. Verificar estados de loading/erro/vazio.
7. Verificar SEO básico.
8. Verificar acessibilidade básica.
9. Remover textos de placeholder visíveis que pareçam inacabados.
10. Não deixar links quebrados.
11. Não criar funcionalidades falsas: se algo depender de backend, deixar a integração claramente preparada.
12. Manter o código limpo e modular.

## Regra de trabalho do projeto

Este repositório é a fonte de verdade do projeto Seven Imports. Toda alteração deve ser feita dentro deste projeto, mantendo o histórico de alterações e evitando apagar funcionalidades existentes sem necessidade.

Ao implementar novas funcionalidades, primeiro analisar a estrutura existente, reutilizar componentes quando possível e preservar o que já estiver funcionando.
