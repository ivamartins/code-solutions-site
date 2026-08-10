# Code Solutions — contexto e progresso do reposicionamento

> Arquivo de continuidade. Se a sessão acabar ou faltar tokens, leia este arquivo e retome pelos itens **pendentes**.  
> Atualizado: 2026-08-10 (commit `828a31e` em `main`, push feito)  
> Repo local: `/home/iva/workspace/code-solutions-site`  
> Remote: `https://github.com/ivamartins/code-solutions-site.git`  
> URL publicada: `https://ivamartins.github.io/code-solutions-site/`

---

## 1. Objetivo do negócio

Transformar o site de uma vitrine de **frameworks / open core / produtos técnicos** (que gerou **0 resultado comercial**) em uma **software house boutique** focada em:

- **Software sob medida** (sistemas web alinhados ao processo do cliente)
- **Integrações** entre sistemas (ERP, e-commerce, planilhas, APIs)
- **Automação de WhatsApp** (orçamento, status, triagem; IA opcional com regras)
- Secundário: evolução de legado, relatórios/painéis, IA aplicada ao negócio
- **Público:** empresas de médio porte da **Grande Porto Alegre** (madereira, escritório contábil, distribuidora, clínica, indústria leve, B2B, etc.)
- **Modelo:** unipessoal, fundador no código, proposta por escopo, CNPJ brasileiro
- **CNPJ:** `43.985.337/0001-08`
- **Não é:** body shop, fábrica de juniores, ERP genérico engessado, “app milagroso em 48h”

### Separação de sites

| Site | Repo / path | Papel |
|------|-------------|--------|
| Code Solutions (empresa) | `code-solutions-site` | Leads B2B, software house, SEO local |
| Portfolio (pessoa) | `/home/iva/workspace/portfolio` · `github.com/ivamartins/portfolio` | Recrutadores, CV, contractor |

Cross-link discreto: footer / Sobre → portfolio do fundador. Portfolio → serviços PJ / Code Solutions (quando alinhar).

---

## 2. Honestidade / narrativa (não mentir)

- Fundador tem 20+ anos em produção (CLT e PJ embutido em times).
- Hoje: PJ terceirizado Dimed/Panvel + PJ direto Quartile — **não detalhar vínculos atuais no site comercial** (confunde disponibilidade).
- **Pode:** “experiência do fundador em varejo, financeiro, plataformas digitais”; citar Sicredi / Panvel-Dimed / Quartile como **trajetória de carreira**.
- **Não pode:** “clientes da Code Solutions: Sicredi/Panvel/Quartile”.
- Trust bar na home tem nota explícita: contexto do fundador, não clientes da empresa.
- FAQ no Sobre reforça a mesma regra.
- Sem depoimentos inventados, sem logos de cliente local falso, sem “equipe de N devs”.

---

## 3. Produtos / ofertas (copy canônica)

### Pilar 1 — Sistema sob medida
Do processo da empresa para sistema web: pedidos, estoque, clientes, agenda, regras próprias. MVP + fases.

### Pilar 2 — Integrações
APIs, sync, import/export; sistemas conversando sem digitar duas vezes.

### Pilar 3 — Automação WhatsApp
Fluxos de orçamento/status/triagem; IA só com base/regras da empresa quando couber.

### Também
- Evolução de legado (sem big-bang)
- Relatórios e painéis (sair do Excel frágil)
- IA aplicada (secundário, não hero de entrada)
- Evolução mensal pós go-live (opcional, recorrente)

### Stack (capacidade, não hero de marketing)
Java, Spring Boot, Quarkus, APIs REST, PostgreSQL, Docker, Python, Kafka/integrações, Azure/AWS, WhatsApp automation, IA/RAG quando couber.

---

## 4. SEO local (direção)

- Title home: `Code Solutions | Software sob medida em Porto Alegre e Grande POA`
- Keywords naturais: software house Porto Alegre, software sob medida, sistema customizado, integração de sistemas, automação WhatsApp empresas, Grande Porto Alegre
- Cidades: Porto Alegre, Canoas, Novo Hamburgo, São Leopoldo, Gravataí, Cachoeirinha, Esteio, Sapucaia do Sul, Guaíba, Alvorada
- Schema: `ProfessionalService` + `areaServed` + taxID CNPJ
- Sitemap com as 4 páginas

---

## 5. Decisões de UX / estrutura

- **Multi-página** (não single-page)
- **Home = empresa** (sem foto grande do fundador)
- **Sobre = fundador** (foto `assets/portrait.jpg` + texto honesto)
- **Mockups** em HTML/CSS (painel, pipeline, chat) — não prints falsos de clientes reais
- i18n PT/EN (`lang-pt` / `lang-en`, `cs_lang` no localStorage, auto-detect navegador)
- Formspree: `https://formspree.io/f/xwvjebjd`
- GA4: `G-4HE7M2HJV3`
- WhatsApp/email montados em JS (anti-crawler) em `assets/site.js`
- Removido banner/float de recrutador da home antiga
- Visual: dark slate + amarelo accent, Space Grotesk + Inter, Tailwind CDN

---

## 6. Checklist de implementação

### Feito

- [x] Definição de posicionamento software house Grande POA
- [x] Lista de produtos / pilares
- [x] Regras de honestidade (cases vs carreira)
- [x] `assets/site.css` — estilos + mockups UI
- [x] `assets/site.js` — idioma, menu mobile, Formspree AJAX, WA/email, nav ativa
- [x] `index.html` — home software house (empresa first)
- [x] `solucoes.html` — catálogo + mockups
- [x] `sobre.html` — empresa + fundador + FAQ
- [x] `contato.html` — form + canais + CNPJ + cidades
- [x] `sitemap.xml` — 4 URLs
- [x] `robots.txt` — sitemap apontado
- [x] `README.md` — alinhado ao novo posicionamento
- [x] `assets/og-image.jpg` — regenerado (visual software house)
- [x] Schema.org na home / sobre / contato
- [x] Preview local validado (HTTP 200 nas 4 páginas + css/js)
- [x] Este arquivo `PROGRESSO.md` (contexto + checklist)
- [x] Commit de todas as alterações no git (`828a31e`)
- [x] Push para `origin/main` (dispara GitHub Pages)

### Em andamento / fazer agora

- [x] Verificar site ao vivo após deploy — HTTP 200, title novo na home e solucoes

### Pendente / opcional (próximas sessões)

- [ ] Revisar visual no browser (PT/EN, mobile, form, WhatsApp)
- [ ] Google Search Console: reenviar sitemap se necessário
- [ ] Alinhar footer do **portfolio** com a nova mensagem da Code Solutions
- [ ] Domínio próprio (ex.: codesolutions.com.br) — opcional
- [ ] Quando houver 1º cliente local: case real com autorização
- [ ] Atualizar `LINKEDIN.md` se ainda falar de frameworks open core
- [ ] Considerar página `/como-trabalhamos` se a home ficar curta demais (hoje o fluxo está na home)
- [ ] Google Business Profile (meunegócio) para SEO local offline — processo manual do usuário
- [ ] Conteúdo extra (blog/FAQ expandido) para long-tail local — depois de ter lead real

---

## 7. Arquivos relevantes

```
code-solutions-site/
├── PROGRESSO.md          ← este arquivo
├── README.md
├── index.html
├── solucoes.html
├── sobre.html
├── contato.html
├── robots.txt
├── sitemap.xml
├── LINKEDIN.md           ← pode estar desatualizado (posicionamento antigo)
├── assets/
│   ├── site.css
│   ├── site.js
│   ├── og-image.jpg
│   ├── portrait.jpg      ← usado no Sobre
│   ├── logo-cs.png
│   ├── logo-monogram.png
│   ├── hero.jpg          ← legado; home atual não depende
│   └── ...
└── .github/workflows/    ← deploy Pages
```

---

## 8. Comandos úteis

```bash
# Preview
cd /home/iva/workspace/code-solutions-site
python3 -m http.server 8000

# Publicar
git add -A
git status
git commit -m "reposition: software house multi-page for Grande POA"
git push origin main

# Conferir remote
git remote -v
```

WhatsApp no JS: DDD 51, número montado em `assets/site.js` (não hardcodar no HTML).  
Email: montado em `assets/site.js`.

---

## 9. Histórico de decisão (resumo da conversa)

1. Portfolio separado de `code-solutions-site` → repo `portfolio`.
2. Code Solutions pivot: de frameworks open core → software house sob demanda.
3. Foco regional Grande POA para PME/médio porte com dor de software.
4. Experiência enterprise como background do fundador, não carteira da empresa.
5. Multi-page, mockups de solução, menos “marca pessoal” na home.
6. Implementação HTML/CSS/JS estática (mesmo stack do portfolio), zero build.

---

## 10. Como retomar (prompt sugerido)

Se precisar continuar em outra sessão:

> Leia `/home/iva/workspace/code-solutions-site/PROGRESSO.md` e continue pelos itens pendentes do checklist. Não desfazer o posicionamento de software house / Grande POA / honestidade de cases.

Marque com `[x]` cada item concluído e atualize a data no topo deste arquivo.
