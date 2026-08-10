# Code Solutions — handoff completo (contexto + progresso)

> **Para qualquer LLM/agente que retome este trabalho:** leia este arquivo **por completo** antes de editar. Ele é a fonte de verdade de negócio, honestidade, arquitetura do site, o que já foi feito e o que falta.  
> **Não desfaça** o reposicionamento de software house / Grande POA / narrativa honesta.  
> **Não reintroduza** a home antiga de “frameworks open core / produtos para licenciar” como eixo principal.

| Campo | Valor |
|--------|--------|
| Atualizado | 2026-08-10 (SEO off-page documentado; copy Sobre esclarecida) |
| Path local | `/home/iva/workspace/code-solutions-site` |
| Remote Git | `https://github.com/ivamartins/code-solutions-site.git` |
| Branch | `main` |
| Deploy | GitHub Pages (push em `main` → workflow em `.github/workflows/`) |
| URL live | https://ivamartins.github.io/code-solutions-site/ |
| Commits-chave | `828a31e` multi-page · `a4a183e` handoff · ver git log para mais recentes |
| Dono / fundador | Ivã Martins |
| Empresa | Code Solutions |
| CNPJ | **43.985.337/0001-08** |
| Base geográfica | Porto Alegre / RS · Grande Porto Alegre |
| Idiomas do site | PT-BR (primário SEO) + EN (i18n completo nas páginas) |

**Relacionado (outro repo):** portfolio pessoal em `/home/iva/workspace/portfolio` · remote `https://github.com/ivamartins/portfolio.git` · URL alvo `https://ivamartins.github.io/` (ou project pages do repo portfolio). **Não misturar** site de empresa com site de candidatura.

---

## 0. Como retomar (instruções operacionais para a próxima LLM)

1. Leia este `PROGRESSO.md` inteiro.
2. Rode `git status` e `git log -5 --oneline` no path local acima.
3. Confira o checklist **§11** — só implemente itens ainda `[ ]`.
4. Antes de mudar copy/SEO, releia **§2 (honestidade)** e **§3 (produtos)**.
5. Preview: `python3 -m http.server 8000` na raiz do projeto; abra as 4 páginas + PT/EN + mobile.
6. Publique só com pedido explícito do usuário, ou se o usuário já pediu “publique” nesta sessão:
   ```bash
   cd /home/iva/workspace/code-solutions-site
   git add -A && git status
   git commit -m "mensagem clara"
   git push origin main
   ```
7. Após push: `curl -s https://ivamartins.github.io/code-solutions-site/ | head` e marque o checklist.
8. Ao terminar, **atualize este arquivo**: data, commits, `[x]` nos itens feitos, notas no §12.

**Prompt mínimo se o usuário só disser “continue”:**  
`Leia /home/iva/workspace/code-solutions-site/PROGRESSO.md e continue pelos itens pendentes do checklist. Mantenha posicionamento software house Grande POA e regras de honestidade.`

---

## 1. Por que este projeto existe (história da decisão)

### 1.1 Antes
- `code-solutions-site` era um **single-page** posicionando a Code Solutions como empresa de **produtos/frameworks open core** (Akka, Flink, AI Agent Kit, dbt, etc.), com forte presença do fundador, banner de recrutador e catálogo técnico.
- Resultado comercial percebido pelo usuário: **0 leads / 0 resultado** para o tipo de cliente desejado.
- Em paralelo, o usuário **segmentou** o portfólio pessoal em `/home/iva/workspace/portfolio` (candidatura, CV, contractor internacional).

### 1.2 Depois (estado desejado e já implementado na base)
- Code Solutions = **software house de software customizado sob demanda**, boutique unipessoal.
- Foco em **jobs locais** (Grande POA) que o fundador consegue entregar **sozinho**, com ajuda de IA no desenvolvimento.
- Público: PME / médio porte com dor operacional (planilha, sistemas que não integram, WhatsApp caótico, legado, relatórios).
- Site **multi-página**, visual de software house profissional, mockups de produto (não cases inventados), fundador **secundário** (foto e bio longas só em Sobre).
- SEO para buscas do tipo: *software house Porto Alegre*, *software sob medida*, *sistema customizado*, *integração de sistemas*, *automação WhatsApp empresas*.

### 1.3 O que o usuário pediu explicitamente ao longo da conversa
1. Entender split portfolio vs code-solutions (só contexto no início).
2. Ideia de reposicionamento (sem executar de início).
3. Experiência CLT/PJ embutido — trazer sem mentir.
4. Clientes tipo madereira, contábil, médio porte regional.
5. Lista de **produtos** oferecidos + CNPJ `43.985.337/0001-08`.
6. Site profissional software house; mockups se fizer sentido; menos foto na home; **não single-page**.
7. Implementar a mudança grande + arquivo de progresso + publicar.
8. (esta etapa) Detalhar o arquivo a ponto de **outra LLM** seguir + publicar de novo.

---

## 2. Regras de honestidade (CRÍTICO — não violar)

### 2.1 Realidade da carreira do fundador
- 20+ anos em engenharia de software em produção.
- Grande parte da vida: **CLT ou PJ embutido** (funcionário de fato em times de empresas).
- Situação atual (contexto interno; **não colocar no site comercial** sem pedido):
  - PJ **terceirizado** Dimed/Panvel
  - PJ **direto** Quartile
- Passagens relevantes de carreira (como engenheiro em times, **não** como “Code Solutions vendeu para…”): Sicredi, Panvel/Dimed, Quartile, CIEE, e outras do CV/portfolio.

### 2.2 Pode dizer no site
- Code Solutions é a empresa do Ivã Martins (CNPJ ativo).
- Boutique unipessoal: fundador no diagnóstico e no código.
- Experiência do **fundador** em sistemas de varejo, financeiro, plataformas digitais de escala.
- Citar nomes (Sicredi, Panvel, Quartile, etc.) **apenas** como trajetória/contexto de carreira.
- Stack e capacidade técnica reais.
- Ofertas futuras de software sob medida para clientes da região (sem inventar cases locais).

### 2.3 Não pode dizer no site
- “Clientes da Code Solutions: Sicredi / Panvel / Quartile”.
- “Entregamos o core do Sicredi Digital para o cliente X” como se a CS fosse a fornecedora contratada.
- Depoimentos inventados, logos de clientes locais falsos, “N projetos na Grande POA” se N for inventado.
- “Equipe de N desenvolvedores” se for só o fundador.
- Preços inventados sem o usuário definir.
- Detalhar vínculos atuais de PJ com Panvel/Quartile na home (confunde “está disponível?”).

### 2.4 Onde isso já está codificado
- Home trust bar: nota *“Contexto da trajetória do fundador — não são clientes comerciais da Code Solutions.”*
- `sobre.html`: parágrafo explícito + FAQ *“Sicredi / Panvel / Quartile são clientes de vocês?”* → **Não como clientes da CS**.
- Qualquer case futuro de cliente real: só com autorização e linguagem “cliente na Grande POA / setor / resultado”.

---

## 3. Produtos / ofertas (canônico para copy)

### 3.1 Pilares (hero de marketing)

| # | Nome PT | Nome EN (site) | Dor | Entrega |
|---|---------|----------------|-----|---------|
| 1 | Sistema sob medida | Custom business system | Processo não cabe em Excel/ERP genérico | Sistema web: pedidos, estoque, clientes, agenda, regras do cliente; MVP + fases |
| 2 | Integração de sistemas | System integration | Digitar duas vezes; sistemas isolados | APIs, jobs, webhooks, CSV, cola ERP↔web↔planilha |
| 3 | Automação WhatsApp | WhatsApp automation | Chat caótico, perde venda | Fluxos orçamento/status/triagem; IA opcional com regras e base da empresa |

### 3.2 Também fazemos (secundário)

| Nome | Quando | Nota |
|------|--------|------|
| Evolução de legado | Já existe sistema | Módulo novo, API na frente, estabilizar; sem big-bang |
| Relatórios e painéis | Decisão no feeling/Excel | Jobs + dashboard simples |
| IA aplicada ao negócio | Processo e conteúdo já existem | RAG/busca em docs; **não** porta de entrada típica PME |
| Evolução mensal | Pós go-live | Suporte/melhorias com prioridade combinada (ainda não é página própria) |

### 3.3 Não oferecer como produto de entrada
- Frameworks open source / open core como herói comercial
- Kafka+Flink+Akka em escala como oferta para madereira/contábil (pode ser “capacidade” na stack)
- App mobile nativo do zero como default
- ERP completo tipo TOTVS
- Body shop / alocação de dev

### 3.4 Modelo comercial (copy)
1. Conversa (discovery)  
2. Proposta por **escopo fechado** ou fases  
3. Entrega incremental com demos  
4. Handoff (acessos, docs) + opcional mensal  

Frase útil: *“Proposta por escopo. Sem fábrica de orçamento genérico / sem body shop.”*

---

## 4. Posicionamento e SEO

### 4.1 Frase de posicionamento
> Code Solutions — software house em Porto Alegre. Sistemas sob medida, integrações e automação para empresas da Grande POA. Engenharia sênior, atendimento direto, CNPJ 43.985.337/0001-08.

### 4.2 Meta home (já no `index.html`)
- **Title:** `Code Solutions | Software sob medida em Porto Alegre e Grande POA`
- **Description:** menciona software house POA, CNPJ, sistemas sob medida, integrações, automação WhatsApp, Grande Porto Alegre, atendimento direto, escopo claro.

### 4.3 Keywords naturais (não stuffing)
software house Porto Alegre, software sob medida, desenvolvimento de software Grande Porto Alegre, sistema customizado, integração de sistemas, automação WhatsApp empresas, software para empresa, Code Solutions, CNPJ.

### 4.4 Cidades (`areaServed` / copy)
Porto Alegre, Canoas, Novo Hamburgo, São Leopoldo, Gravataí, Cachoeirinha, Esteio, Sapucaia do Sul, Guaíba, Alvorada + região. Remoto quando fizer sentido.

### 4.5 Schema.org
- Home: `ProfessionalService` + `WebSite` (JSON-LD), taxID CNPJ, address Porto Alegre RS, hasOfferCatalog com serviços.
- Sobre: `AboutPage` + ProfessionalService.
- Contato: `ContactPage` + ProfessionalService.
- **Não** marcar Sicredi etc. como `customer` / `client`.

### 4.6 Canonical / hreflang
Base: `https://ivamartins.github.io/code-solutions-site/`  
Páginas: `.../`, `.../solucoes.html`, `.../sobre.html`, `.../contato.html`  
hreflang pt-BR e en apontam para as mesmas URLs (site bilíngue client-side, não URLs separadas por idioma).

---

## 5. Arquitetura técnica do site

### 5.1 Princípios
- **Zero build**, zero framework SPA, sem npm obrigatório.
- HTML estático multi-página + **Tailwind via CDN** + Font Awesome 6.5 + Google Fonts (Inter, Space Grotesk).
- CSS compartilhado: `assets/site.css`
- JS compartilhado: `assets/site.js`
- Deploy: arquivos da raiz do repo no GitHub Pages.
- Analytics: GA4 `G-4HE7M2HJV3` em cada página.
- Formspree: `https://formspree.io/f/xwvjebjd` (só em `contato.html` no fluxo atual).
- Verificações SEO antigas mantidas no head da home quando possível:
  - `google-site-verification`: `UgodlMJvAhbkR8a8RzggV6O04Rpbf2jRk1eKt8O9GnE`
  - `msvalidate.01`: `663F4891153290862AC32EEE704A517D`

### 5.2 Árvore de arquivos (estado atual)

```
/home/iva/workspace/code-solutions-site/
├── PROGRESSO.md              # ESTE handoff
├── README.md                 # visão curta do projeto
├── LINKEDIN.md               # ⚠️ AINDA no posicionamento ANTIGO (frameworks) — pendente
├── index.html                # Home software house
├── solucoes.html             # Catálogo de soluções + mockups
├── sobre.html                # Empresa + fundador (foto) + FAQ
├── contato.html              # Form + WA + email + CNPJ + cidades
├── robots.txt
├── sitemap.xml               # 4 URLs
├── assets/
│   ├── site.css              # layout, i18n helpers, mock UI frames
│   ├── site.js               # lang, menu, form, WA/email, nav active
│   ├── og-image.jpg          # regenerado visual software house
│   ├── portrait.jpg          # fundador — USAR só em sobre (e similar)
│   ├── logo-cs.png           # nav/footer
│   ├── logo-monogram.png     # LinkedIn etc. (legado)
│   ├── hero.jpg              # legado; home atual não depende
│   ├── agents-icon.jpg       # legado
│   └── linkedin-banner.jpg   # legado
└── .github/workflows/        # deploy Pages
```

### 5.3 Mapa de páginas e conteúdo

| Página | Papel | Conteúdo principal | Foto fundador? |
|--------|--------|--------------------|----------------|
| `index.html` | Aquisição + SEO | Hero empresa, trust bar honesta, dores, 3 pilares+mockups, como trabalhamos (01–04), bloco Grande POA, CTA | **Não** (só logo) |
| `solucoes.html` | Produto | Detalhe pilares 1–3 com mockups; cards legado/relatórios/IA; stack pills | Não |
| `sobre.html` | Confiança | O que somos / não somos; fundador + portrait; FAQ; links portfolio/GitHub/LinkedIn | **Sim** |
| `contato.html` | Conversão | Formspree fields + success state; WA; email; CNPJ; lista cidades | Não |

### 5.4 Navegação (deve ser igual em todas as páginas)
- Logo → `index.html`
- Links: Home · Soluções · Sobre · Contato
- PT/EN buttons: `id="lang-pt-btn"` / `id="lang-en-btn"` → `onclick="switchLang('pt'|'en')"`
- CTA “Pedir proposta” → `contato.html`
- Mobile: `#mobile-menu-btn` + `#mobile-menu`
- Active nav: atributo `data-nav` (`home` | `solucoes.html` | `sobre.html` | `contato.html`); `site.js` marca `is-active`

### 5.5 Internacionalização (i18n)
- Classes: `lang-pt` e `lang-en` em spans/blocos.
- CSS em `site.css`:
  - `.lang-en { display: none !important; }`
  - `html[lang="en"] .lang-pt { display: none !important; }`
  - `html[lang="en"] .lang-en { display: revert !important; }`
- `localStorage` key: `cs_lang` — **só grava** quando o usuário clica PT/EN.
- Auto-detect: `navigator.languages[0]` / `navigator.language` → se começa com `pt` então PT, senão EN; **não** persistir auto-detect.
- Atalho: Cmd+L alterna idioma.
- Após trocar idioma, `setupContactLinks()` recria mensagem WA no idioma.

### 5.6 Contatos (anti-crawler)
Em `assets/site.js` → `setupContactLinks()`:
- WhatsApp: prefixo `55` + DDD `51` + número `981151474` → `https://wa.me/...?text=...`
- Elementos: qualquer `[data-wa]` (anchor ou button)
- Email: `ivamartins` + `@` + `gmail.com` → `[data-email]`
- **Não** colocar telefone/email em texto estático no HTML.

### 5.7 Formulário (`contato.html`)
- `action="https://formspree.io/f/xwvjebjd"` method POST
- Campos: `name`, `company`, `email`, `phone`, `interest` (select), `message`
- Hidden: `_subject` = `Nova proposta via site Code Solutions`
- Honeypot: `_gotcha`
- AJAX via `setupForm()`; sucesso mostra `#form-success`; `resetContactForm()` global
- Select options bilíngues em texto único (option não suporta spans lang bem)

### 5.8 Visual / design tokens
- Fundo: slate quase preto (`#020617` body)
- Accent: amarelo `rgb(234 179 8)` / yellow-400 Tailwind
- Fontes: Space Grotesk (títulos `.font-display`), Inter (corpo)
- Cards: borda slate-800, hover lift `.product-card`
- Mockups: `.mock-frame`, `.mock-chrome`, `.mock-card`, `.mock-chat`, `.mock-bubble`, `.mock-node` — **HTML/CSS**, não screenshots de clientes reais
- Por quê mockups em código: texto legível, sem inventar UI de cliente, consistente com dark theme

### 5.9 O que foi removido de propósito (não trazer de volta sem pedido)
- Single-page monstro de frameworks/produtos open core como eixo
- Banner topo “Recrutador(a)?” e float pill de recrutador
- Hero “Frameworks battle-tested para licenciar”
- Catalogação pesada de repos (akka-scala-base, etc.) como produtos de venda
- Foto grande do fundador na home

Open source / GitHub pode existir como prova técnica leve (footer Sobre/links), não como catálogo comercial principal.

---

## 6. Separação portfolio vs empresa

| | Code Solutions (este repo) | Portfolio (`/home/iva/workspace/portfolio`) |
|--|----------------------------|--------------------------------------------|
| Objetivo | Leads B2B, proposta, WhatsApp | Recrutadores, CV, contractor |
| CTA | Pedir proposta / WhatsApp | Download CV / LinkedIn |
| Tom | Software house regional | Senior engineer internacional |
| CNPJ | Sim, em destaque | Não necessário |
| Cross-link | Footer/Sobre → portfolio fundador | Footer deve apontar Code Solutions (pode estar desatualizado — ver pendências) |

Links conhecidos:
- Portfolio live (alvo): `https://ivamartins.github.io/` ou path do repo portfolio no Pages
- GitHub pessoa: `https://github.com/ivamartins`
- LinkedIn: `https://www.linkedin.com/in/ivamartins/`

---

## 7. Preferências do usuário (agente)

- Português do Brasil na conversa com o usuário.
- Site bilíngue PT/EN no produto.
- Não inventar features “por precaução”.
- Não mentir em cases/clientes.
- Preferir editar estrutura estática simples (como portfolio) a introduzir build/React/etc. sem pedido.
- Documentar progresso neste arquivo quando o trabalho for grande.
- Publicar com commit message clara + push `main`.

---

## 8. Integrações e IDs (referência rápida)

| Serviço | ID / valor |
|---------|------------|
| Formspree | `xwvjebjd` → `https://formspree.io/f/xwvjebjd` |
| GA4 | `G-4HE7M2HJV3` |
| Google site verification | `UgodlMJvAhbkR8a8RzggV6O04Rpbf2jRk1eKt8O9GnE` |
| Bing msvalidate | `663F4891153290862AC32EEE704A517D` |
| WhatsApp | 55 51 98115-1474 (montado no JS) |
| Email | ivamartins@gmail.com (montado no JS) |
| CNPJ | 43.985.337/0001-08 |

---

## 9. Comandos

```bash
# Entrar no projeto
cd /home/iva/workspace/code-solutions-site

# Preview local
python3 -m http.server 8000
# http://localhost:8000
# http://localhost:8000/solucoes.html
# http://localhost:8000/sobre.html
# http://localhost:8000/contato.html

# Status / publicar
git status
git add -A
git commit -m "descrição"
git push origin main

# Conferir live
curl -sI https://ivamartins.github.io/code-solutions-site/
curl -s https://ivamartins.github.io/code-solutions-site/ | head -n 15
```

---

## 10. Testes manuais esperados (checklist de qualidade)

- [ ] Home carrega sem erro de CSS/JS
- [ ] Menu mobile abre/fecha
- [ ] PT/EN alterna textos visíveis em todas as páginas
- [ ] Links Soluções/Sobre/Contato OK (paths relativos — funciona em project Pages)
- [ ] Mockups legíveis no desktop e aceitáveis no mobile
- [ ] Clique WhatsApp abre wa.me com mensagem
- [ ] Email monta mailto
- [ ] Form envia (Formspree) e mostra sucesso (precisa rede)
- [ ] Sobre: portrait carrega; FAQ responde honestidade de clientes
- [ ] Footer mostra CNPJ
- [ ] `sitemap.xml` e `robots.txt` acessíveis na live
- [ ] Não há claim “cliente Sicredi da Code Solutions”

---

## 11. Checklist mestre de implementação

### 11.1 Feito (não refazer do zero)

- [x] Decisão de posicionamento: software house boutique Grande POA
- [x] Definição de 3 pilares + secundários
- [x] Regras de honestidade documentadas e aplicadas no HTML
- [x] Multi-page: `index.html`, `solucoes.html`, `sobre.html`, `contato.html`
- [x] `assets/site.css` + `assets/site.js`
- [x] i18n PT/EN com auto-detect e persistência só em clique
- [x] Mockups HTML/CSS (painel, integração, WhatsApp)
- [x] SEO local: titles, descriptions, keywords, schema, cidades
- [x] CNPJ em home, contato, footers, schema taxID
- [x] Formspree + honeypot + AJAX
- [x] WA/email via JS anti-crawler
- [x] GA4 nas páginas
- [x] `sitemap.xml` (4 URLs) + `robots.txt`
- [x] `README.md` reescrito para novo posicionamento
- [x] `og-image.jpg` regenerado (visual software house)
- [x] Remoção do eixo frameworks open core da home
- [x] Foto do fundador só em Sobre
- [x] Trust bar com disclaimer de carreira ≠ clientes CS
- [x] FAQ honestidade em Sobre
- [x] Commit `828a31e` + push
- [x] Verificação live: HTTP 200, title novo na home
- [x] Este `PROGRESSO.md` expandido para handoff LLM

### 11.2 Pendente (próximo trabalho útil)

- [ ] **Revisar visual real no browser** (usuário + agente se possível): mobile, contraste, portrait crop no Sobre (`object-cover object-top` — portrait é landscape 1504×688; pode precisar crop melhor)
- [ ] **Atualizar `LINKEDIN.md`** — ainda descreve posicionamento antigo de frameworks/produtos; alinhar a software house Grande POA ou marcar como arquivo histórico
- [ ] **Alinhar portfolio** (`/home/iva/workspace/portfolio`): footer/cross-link e qualquer texto que ainda aponte Code Solutions como “frameworks open core”
- [ ] **SEO off-page e conteúdo** — ver checklist completo **§16** (GBP, Search Console, páginas de conteúdo, NAP, reviews, domínio)
- [ ] **1º case real local** quando existir cliente + autorização
- [ ] Opcional: limpar assets órfãos (`hero.jpg`, `agents-icon.jpg`) se não forem mais referenciados
- [ ] Opcional: mensagem WA distinta por página/interesse

### 11.3 Fora de escopo salvo pedido explícito
- Reescrever o site em React/Next/Astro
- Inventar preços na home
- Adicionar equipe fictícia
- Voltar catálogo open core como produto principal
- Detalhar contratos atuais Panvel/Quartile no site da empresa

---

## 12. Log de sessão (append-only)

### 2026-08-10 — sessão de reposicionamento
- Conversa: pivot de frameworks → software house; produtos; honestidade; multi-page; mockups; menos ego na home.
- Implementado HTML multi-page + css/js + SEO + CNPJ + publish.
- Commits: `828a31e` reposition multi-page; `017b4a0` docs progress; `a4a183e` handoff detalhado.
- Live confirmada com title: `Code Solutions | Software sob medida em Porto Alegre e Grande POA`.

### 2026-08-10 — SEO + copy Sobre
- Usuário perguntou o que ainda falta para ranquear no Google (buscas de PME local).
- Conclusão: **on-page do site está no essencial**; o que mais move ranking é **fora do HTML** (GBP, Search Console, conteúdo, reviews, NAP, domínio).
- Documentado em **§16** com checklist priorizado (quem faz: usuário vs agente).
- Frase confusa no Sobre (“fábrica de currículos”) trocada por copy clara: *“Software house enxuta: quem conversa com você é quem desenvolve”* (a antiga era jargão anti-body-shop, difícil para dono de PME).
- Próximo foco: usuário faz GBP + Search Console; agente pode criar 2–3 landing pages de conteúdo se pedido.

### (próximas entradas)
_Adicionar data, o que mudou, commits, o que ainda falta._

---

## 13. Snippets de referência (para não “adivinhar”)

### 13.1 Marcar item feito neste arquivo
Troque `- [ ]` por `- [x]` e acrescente nota no §12.

### 13.2 Padrão de bloco bilíngue
```html
<span class="lang-pt">Texto em português</span>
<span class="lang-en">English text</span>
```

### 13.3 Botão WhatsApp
```html
<a href="#" data-wa class="...">WhatsApp</a>
```

### 13.4 Email
```html
<a href="#" data-email class="...">Email</a>
```

### 13.5 Nav item
```html
<a href="solucoes.html" data-nav="solucoes.html" class="nav-link">...</a>
```

### 13.6 Incluir assets em toda página nova
```html
<link rel="stylesheet" href="assets/site.css">
<script src="assets/site.js"></script>
```
+ Tailwind CDN + Font Awesome + GA snippet (copiar de `index.html`).

### 13.7 Paths relativos
O site é **project page** sob `/code-solutions-site/`. Usar paths relativos (`assets/...`, `contato.html`), **não** paths absolutos da raiz do domínio `ivamartins.github.io/` sem o prefixo do projeto (exceto links canônicos absolutos no SEO).

---

## 14. Critérios de “pronto o suficiente” para o negócio

O site está **pronto para divulgação** se:
1. Home explica em 5 segundos o que a empresa faz e para quem (Grande POA).
2. Três ofertas claras com CTA para contato.
3. CNPJ e base local visíveis.
4. Contato por form + WhatsApp funciona.
5. Nenhuma frase implica clientes enterprise falsos da CS.
6. Sobre humaniza a boutique sem transformar o site em currículo.

Melhorias pós-lançamento (conteúdo real, cases, GBP, domínio) vêm **depois** de ter o posicionamento estável — que já está no ar.

---

## 15. Contato com o humano (usuário deste workspace)

- Usuário: Ivã (`/home/iva`)
- Preferência: português, direto, pouca cerimônia
- Workspace home também tem memória Grok em `~/.grok/memory/` — útil para preferências, mas **este arquivo é a fonte de verdade do site Code Solutions**

---

## 16. SEO — o que já está feito vs o que ainda vale a pena

> Contexto: o usuário quer aparecer no Google quando **empresas da Grande POA** buscam software sob medida / software house / integração / automação WhatsApp.  
> Avaliação (2026-08-10): **on-page do site está no essencial.** Ranking local real depende mais de **ações off-page e conteúdo**, não de reescrever meta tags de novo.

### 16.1 Já feito no site (on-page) — não refazer do zero

- [x] Titles e descriptions com Porto Alegre / software sob medida / software house / Grande POA
- [x] Texto da home e soluções com linguagem de dor do cliente local (não só stack técnica)
- [x] Multi-página indexável (`/`, `solucoes.html`, `sobre.html`, `contato.html`)
- [x] `canonical`, `robots.txt`, `sitemap.xml` com as 4 URLs
- [x] Schema JSON-LD `ProfessionalService` + taxID (CNPJ) + `areaServed` + catálogo de ofertas
- [x] CNPJ e base Porto Alegre visíveis (confiança + sinais locais)
- [x] Lista de cidades da Grande POA (home/contato)
- [x] OG/Twitter, GA4, links internos entre páginas e CTAs
- [x] URLs estáticas em GitHub Pages (crawlable)

**Conclusão on-page:** re-otimizar o mesmo HTML traz **retorno mínimo**. Próximo salto é §16.2–16.4.

### 16.2 O que NÃO vale a pena agora

- Keyword stuffing / dezenas de páginas finas “software em Canoas”, “em NH”, etc.
- Comprar backlinks genéricos
- Ferramenta SEO cara cedo demais (Search Console grátis basta no início)
- Inventar schema de Review / depoimentos falsos
- Competir só por termos genéricos nacionais (“desenvolvimento de software Brasil”)
- Trocar React/Next só “por SEO” (site estático já é indexável)

### 16.3 Checklist priorizado — quem faz o quê

#### Prioridade 1 — Google Business Profile / Meu Negócio (**usuário**, maior ROI local)

- [ ] Criar ou reclamar perfil em [Google Business Profile](https://business.google.com/) / Google Meu Negócio
- [ ] Nome **exato** como no site: `Code Solutions` (NAP consistente)
- [ ] Categoria principal: desenvolvimento de software / programação de sistemas (a mais próxima disponível)
- [ ] Área de atendimento: Porto Alegre + Grande POA (serviço na região; se não tiver loja física, usar modelo “atende clientes na região” / service area conforme regras do Google)
- [ ] Descrição alinhada ao site: software sob medida, integrações, automação WhatsApp, CNPJ
- [ ] Site: `https://ivamartins.github.io/code-solutions-site/`
- [ ] Telefone/WhatsApp: o mesmo do site (51 98115-1474)
- [ ] Fotos (logo, trabalho, se possível)
- [ ] Serviços cadastrados (os 3 pilares + secundários)
- [ ] Pedir **3–5 avaliações reais** (ex-colegas de projeto / primeiros clientes — só o que for verdadeiro)

Sem GBP, quase não aparece no **pacote de mapas** do Google.

#### Prioridade 2 — Google Search Console (**usuário**, ~15 min)

- [ ] Propriedade: `https://ivamartins.github.io/code-solutions-site/` (já existe verification meta no HTML se precisar)
- [ ] Enviar sitemap: `https://ivamartins.github.io/code-solutions-site/sitemap.xml`
- [ ] Inspecionar URL das 4 páginas e solicitar indexação
- [ ] Monitorar cobertura / queries nas semanas seguintes (expectativa: semanas para termos competitivos)

#### Prioridade 3 — Conteúdo com intenção de busca (**agente**, se o usuário pedir)

Criar **2–3 páginas** substanciais (não spam de cidade), ~600–1200 palavras úteis + FAQ + CTA contato. Atualizar `sitemap.xml` e nav se fizer sentido.

Sugestões de páginas (escolher com o usuário):

| Página sugerida | Buscas-alvo |
|-----------------|-------------|
| Sistema sob medida em Porto Alegre | software sob medida POA, sistema para empresa, software house |
| Integração de sistemas / sair do Excel | integrar ERP, sistemas que não conversam |
| Automação WhatsApp para empresas | chatbot WhatsApp empresa, automação WhatsApp POA |

- [ ] Página 1 (conteúdo) — não criada ainda
- [ ] Página 2 (conteúdo) — não criada ainda
- [ ] Página 3 (conteúdo) — não criada ainda
- [ ] Incluir no `sitemap.xml` + links a partir de Soluções/Home
- [ ] Manter tom honesto; sem cases inventados

#### Prioridade 4 — Autoridade e menções (misto)

- [ ] LinkedIn Company Page (ou perfil) com link do site + posicionamento software house POA
- [ ] LinkedIn pessoal: seção experiência/destaque apontando Code Solutions (empresa), não só “busco vaga”
- [ ] GitHub bio/README com link do site da empresa
- [ ] Atualizar `LINKEDIN.md` no repo (ainda texto antigo de frameworks)
- [ ] Alinhar footer do **portfolio** para a mensagem nova da CS
- [ ] Parcerias locais (contador, consultor) com link mútuo quando houver confiança
- [ ] Evitar compra de link

#### Prioridade 5 — NAP consistente (Nome · contato · cidade)

Repetir **igual** em site, GBP, LinkedIn, PDFs de proposta:

| Campo | Valor canônico |
|-------|----------------|
| Nome | Code Solutions |
| CNPJ | 43.985.337/0001-08 |
| Cidade | Porto Alegre / RS · Grande Porto Alegre |
| WhatsApp | 55 51 98115-1474 |
| Site | https://ivamartins.github.io/code-solutions-site/ |

- [ ] Usuário confere NAP em todos os canais

#### Prioridade 6 — Domínio próprio (opcional, médio prazo)

- [ ] Avaliar `.com.br` (ex. codesolutions… se disponível) + apontar para Pages ou Cloudflare
- [ ] Redirect do github.io para o domínio
- [ ] Atualizar canonical, sitemap, schema, GBP, Search Console

Ajuda branding e confiança; SEO não é milagre só com domínio.

### 16.4 Expectativa realista de ranking

| Tipo de busca | Só com o site atual | Com GBP + reviews + 2–3 páginas de conteúdo |
|---------------|---------------------|-----------------------------------------------|
| “software house Porto Alegre” | Baixa no curto prazo | Média em meses |
| “sistema sob medida Porto Alegre” | Baixa–média | Melhor |
| “automação WhatsApp empresa POA” | Média (menos concorrência) | Boa |
| Pacote Google Maps | Quase zero sem GBP | Depende do GBP + reviews |

SEO local = relevância + proximidade + autoridade. HTML sozinho não fecha o ciclo.

### 16.5 Ordem recomendada de execução

1. Usuário: Google Meu Negócio  
2. Usuário: Search Console + sitemap  
3. Agente (pedido): 2–3 landing pages de conteúdo + sitemap  
4. Usuário: reviews reais + LinkedIn  
5. Depois: domínio .com.br se quiser  

### 16.6 Copy — frase confusa corrigida

- **Antes (Sobre, H1):** “Uma software house boutique, não uma fábrica de currículos”  
  - Intenção: dizer que não somos body shop que só “vende gente/CV”.  
  - Problema: dono de PME local **não entende** a metáfora.
- **Agora:** “Software house enxuta: quem conversa com você é quem desenvolve”  
  - EN: “A lean software house: the person you talk to is the one who builds”

---

**Fim do handoff.** Qualquer trabalho futuro deve começar pelo §0, §11 e §16 (SEO), e terminar atualizando §11 + §12 + §16 + data no topo.
