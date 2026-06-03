# Code Solutions — Site Profissional

**Site estático puro** (HTML + Tailwind via CDN + JavaScript) para **Code Solutions** (Ivã Martins).

Não tem backend, não tem build, não tem servidor. São só arquivos estáticos servidos pelo GitHub Pages.

- **Bilingue** (PT-BR primário + EN)
- **Zero build / zero custo de hospedagem** (Tailwind via CDN)
- **Alta conversão**: formulário + WhatsApp flutuante + CTAs claros
- **Prova social real**: cases de Sicredi (plataforma digital padrão), Panvel, Quartile + o projeto real do **whatsapp-grok-bot** como exemplo vivo de "agentes como serviço"

## Tecnologia

- HTML5 + CSS (Tailwind via CDN: `<script src="https://cdn.tailwindcss.com">` no `<head>`)
- JavaScript vanilla (navegação de idioma, links de contato protegidos, envio AJAX do form)
- Formulário: Formspree (ID `xwvjebjd`) com honeypot e handler em JS (sem redirect)
- Analytics: Google Analytics 4 (`G-4HE7M2HJV3`) + SEO (JSON-LD, sitemap, meta otimizadas para manutenção de legados Java/Play/Elasticsearch)
- Deploy: GitHub Pages + GitHub Actions (workflow estático sem build step)
- Preview local: qualquer servidor HTTP simples (python, npx serve, php etc.)

O projeto inteiro roda como arquivos estáticos. O GitHub Pages é o ambiente de produção real.

## Arquivos principais

- `index.html` — Site completo (único arquivo + pasta assets)
- `assets/hero.jpg` — Banner principal (gerado com IA)
- `assets/portrait.jpg` — Foto profissional / about
- `assets/agents-icon.jpg` — Ícone ilustrativo para o serviço de Agentes
- `assets/logo-cs.png` — Ícone CS monograma para nav do site
- `assets/logo-monogram.png` — Logo oficial para LinkedIn Company Page
- `assets/linkedin-banner.jpg` — Banner para capa da Company Page no LinkedIn

## Como visualizar localmente

O projeto é um site estático puro: apenas `index.html`, Tailwind CSS via CDN e JavaScript vanilla. Não requer build, backend, Node.js, Python ou qualquer dependência de runtime.

Para visualizar edições localmente durante o desenvolvimento, inicie um servidor HTTP simples na raiz do projeto (escolha uma opção):

```bash
cd ~/code-solutions-site

# Opções (qualquer uma funciona):
python3 -m http.server 8000
# ou
npx serve .
# ou (se PHP estiver disponível)
php -S localhost:8000 -t .
```

Acesse no navegador:  
http://localhost:8000

O site publicado é servido automaticamente pelo **GitHub Pages** (veja seção Hospedagem). Todo push na branch `main` dispara o workflow de deploy em `.github/workflows/`.

Testes recomendados no preview:
- Alternar idiomas (botões PT / EN)
- Interagir com botões de WhatsApp e email (links montados via JS na carga da página)
- Enviar o formulário de contato (integrado com Formspree via AJAX)
- Verificar layout responsivo em diferentes tamanhos de tela

## Como editar o conteúdo

1. Abra `index.html` em qualquer editor (VS Code, Zed, vim...).
2. Busque por trechos em português (`lang-pt`) e inglês (`lang-en`).
3. Os cases são baseados em frases reais extraídas do currículo.
4. O exemplo de **Agentes IA** referencia a arquitetura do projeto `whatsapp-grok-bot` (exemplo real de agente WhatsApp + Grok; leia o README dele para detalhes da estrutura com `.grok/agents` e skills).

Dica de bilingual: o switcher simplesmente alterna `lang` no `<html>` e usa CSS + classes `.lang-pt` / `.lang-en`. É simples e confiável.

## Imagens

- `hero.jpg` e `agents-icon.jpg`: geradas com IA (xAI Imagine) para visual profissional e moderno.
- `portrait.jpg`: Foto profissional do fundador (editada a partir de foto real para uso corporativo, com fundo neutro e iluminação de estúdio). Preserva a aparência real com polimento adequado para site de serviços.

Para atualizar a foto do retrato: substitua diretamente o arquivo `assets/portrait.jpg` por uma versão profissional editada sua.

Hero e ícone podem ser regenerados com `image_gen` usando prompts semelhantes (hero 16:9 abstrato tech+AI, ícone 1:1 para agentes).

Copie os arquivos resultantes para a pasta `assets/`.

## Hospedagem (GitHub Pages — zero custo)

O site está publicado em:

**https://ivamartins.github.io/code-solutions-site/**

- Hospedagem 100% gratuita via GitHub Pages.
- Deploy automático: todo `git push` na `main` executa o workflow em `.github/workflows/deploy-pages.yml` (ou `static.yml`) e publica os arquivos estáticos da raiz.
- Sem servidores, sem build, sem custo de bandwidth para a maioria dos casos.

### Comandos de rotina

```bash
cd ~/code-solutions-site

# 1. Teste local (opcional)
python3 -m http.server 8000
# ou npx serve .   ou php -S localhost:8000 -t .

# 2. Envie as alterações
git add .
git commit -m "update: descrição curta da mudança"
git push
```

Aguarde 30–90 segundos e verifique o site. Monitore o progresso na aba **Actions** do repositório (workflow "pages build and deployment").

### Reconfigurar Pages (em clone ou repo novo)

1. No GitHub: vá em **Settings → Pages**.
2. Em "Build and deployment", defina Source como **GitHub Actions**.
3. Escolha o template **Static HTML** e clique Configure → Commit changes.
4. O workflow será criado em `.github/workflows/` e o deploy começará automaticamente.

**Alternativas** (caso queira migrar futuramente):
- Cloudflare Pages: conecte o repo GitHub, preset "None", build command vazio, output directory `.`. Vantagens: CDN global, limits generosos, domínio custom fácil.
- Netlify: excelente para preview de branches e forms.

### Domínio próprio (opcional e barato)

- .com.br: registro.br (~R$50/ano)
- .com: Namecheap/Hostinger em promo (~US$8–12 primeiro ano)

Apontamento: CNAME para o domínio do Pages (ou use Cloudflare como front se migrar).

Custo total: R$ 0 de hospedagem + valor do domínio.

### Formulário de contato (Formspree — grátis)

O formulário já está configurado e funcional apontando para:

```html
action="https://formspree.io/f/xwvjebjd"
```

Envios chegam no email cadastrado no Formspree (tier gratuito tem limite generoso para começar).

### Como reconfigurar (se precisar recriar o form ou clonar o repo)

1. Acesse https://formspree.io (conta grátis)
2. Crie um novo form (nome sugerido: "Code Solutions - Contato do Site")
3. Copie o ID (ex: `xayz1234`) — o link completo fica tipo https://formspree.io/f/xayz1234
4. Substitua no `index.html` a action do form + atualize este README
5. git add index.html README.md && git commit -m "config: atualizar Formspree ID" && git push

O HTML já inclui (além dos campos normais):
- `_subject` para o email chegar com título claro ("Nova proposta via site Code Solutions")
- Honeypot (`_gotcha`) anti-spam básico
- Envio via AJAX (fetch) com mensagem de sucesso na mesma página (sem redirecionar pro Formspree)

O texto visível do form é apenas "Seus dados são enviados de forma segura." (bilíngue).

Alternativa simples (sem form): só os botões de WhatsApp + email já convertem muito bem para serviços senior.

### WhatsApp e Email (anti-crawler)

Os botões de contato (WhatsApp e Email) não expõem o número de telefone nem o endereço de email no HTML estático para evitar crawlers/spam.

- Os textos visíveis são genéricos: "Falar no WhatsApp" e "Enviar email".
- Os links reais (wa.me e mailto) são montados dinamicamente via JavaScript quando a página carrega (veja a função `setupContactLinks` no final do `<script>` em `index.html`).
- Se precisar alterar seu número ou email, edite apenas as constantes dentro dessa função JS (as strings estão divididas para dificultar extração automática).

Exemplo de como funciona internamente (não aparece no HTML renderizado):
- wa.me + número montado + mensagem codificada
- mailto + email montado

Isso mantém a usabilidade (clique no ícone funciona normalmente) enquanto protege os dados de contato.

## Comandos úteis (após setup inicial)

```bash
cd ~/code-solutions-site

# Visualizar localmente
python3 -m http.server 8000
# ou: npx serve . 

# Publicar alterações (dispara deploy automático no GitHub Pages)
git add .
git commit -m "update: ..."
git push
```

O deploy roda via GitHub Actions e fica disponível em ~1 minuto em https://ivamartins.github.io/code-solutions-site/

## Estrutura de pastas sugerida para evolução

```
code-solutions-site/
├── index.html          # O site (edite aqui)
├── README.md
├── assets/
│   ├── agents-icon.jpg
│   ├── hero.jpg
│   ├── linkedin-banner.jpg   # para capa da Company Page no LinkedIn
│   ├── logo-cs.png           # ícone CS monograma (usado no nav do site)
│   ├── logo-monogram.png     # logo oficial (usado no avatar da Company Page no LinkedIn)
│   └── portrait.jpg
└── (futuro) CNAME, _redirects, robots.txt etc.
```

## Dicas de manutenção

- Quer adicionar um novo case? Copie o padrão das divs `.case-card`.
- Quer mudar cores? Edite as classes Tailwind ou o script de config.
- Quer versão com framework depois? Adicione Vite + converta para componentes quando o volume justificar (o site atual continua funcionando para sempre sem dependências).
- Atualize o email no HTML e no README se mudar.

## Fontes de conteúdo (alta fidelidade)

- Bio narrativa principal: texto biográfico fornecido (adaptado para o site)
- Experiência detalhada, clientes, tecnologias e bullets de impacto: currículos fornecidos (com frases reais de conquistas)
- Exemplo vivo de agentes: o projeto `whatsapp-grok-bot` (veja seu README para a arquitetura auto-contida com `.grok/agents` + skills customizadas)
- Agente deep-researcher: referência em `~/.grok/agents/deep-researcher.md` (bom exemplo de skill para pesquisa profunda em codebases)

## Próximos passos sugeridos após o site no ar

- Veja o guia completo em `LINKEDIN.md` (textos prontos para Experience no LinkedIn, Company Page "Sobre", post de lançamento + estratégia para a página "Code Solutions" já existente).
- Use listas de empresas-alvo para outreach dirigido.
- Ofereça "piloto de agente" de 2–4 semanas como entrada de baixo risco.
- Mais tarde é possível adicionar um PDF one-pager ou um mini-site de cases mais profundos.

## Créditos / Contexto

Site construído com Grok (xAI) usando o contexto profissional do seu currículo e experiência prática com agentes de IA customizados.

Qualquer dúvida ou ajuste (texto, layout, nova imagem, adicionar mais um case), é só pedir — edições são rápidas via search/replace ou re-geração.

Boa sorte nas propostas! O site está pronto para converter.

## SEO (otimizações para buscas de manutenção em tecnologias)

O site foi otimizado para aparecer quando empresas buscam **manutenção, suporte e modernização** de sistemas em:

- Java / Spring Boot / Quarkus / Play Framework
- Elasticsearch (busca, indexação, ELK)
- Scala / Akka / Kafka / Flink (event-driven)
- Migração e manutenção de legados enterprise

**O que foi feito:**
- Title, meta description, keywords, canonical, Open Graph e Twitter Cards ricos em palavras-chave
- Structured data (JSON-LD Schema.org) para Person + ProfessionalService com `knowsAbout` e `serviceType` listando as tecnologias
- Headings (H1/H2/H3) e textos reescritos com foco em "manutenção de sistemas legados", "consultoria Play Framework", etc.
- Nova seção FAQ bilíngue com perguntas reais que as pessoas pesquisam (ex: "manutenção em sistemas legados Java e Play Framework")
- Imagens com alt texts otimizados
- `robots.txt` + `sitemap.xml` estáticos na raiz (servidos automaticamente pelo GitHub Pages)
- Links internos para #faq

**Dicas extras para ranquear:**
- Publique o site também em LinkedIn (guia completo em LINKEDIN.md) e compartilhe cases
- Considere um domínio próprio barato (.com.br) + apontamento para o Pages (melhora confiança)
- Adicione mais conteúdo ao longo do tempo (novos cases, posts no LinkedIn linkando o site)

O deploy do GitHub Pages inclui automaticamente robots.txt e sitemap.xml.

### Monitoramento de acesso (Analytics)

O site é estático (GitHub Pages), então para monitorar visitas, fontes de tráfego, páginas mais vistas, etc.:

1. **Google Analytics 4** (já configurado):
   - O script com ID `G-4HE7M2HJV3` já está integrado no `<head>` do `index.html`.
   - Acesse https://analytics.google.com para ver os dados (crie a propriedade GA4 se ainda não fez e vincule o ID).
   - Se precisar trocar o ID no futuro, edite o script no HTML e faça push.

2. **Alternativa mais privada e simples**: Plausible Analytics (plausible.io)
   - Sem cookies, GDPR-friendly, dashboard limpo.
   - Pago mas barato (~US$ 9/mês para 1 site).
   - Adicione o script deles no head (similar ao GA).

3. **Microsoft Clarity** (gratuito): heatmaps + gravação de sessões de usuários (bom para UX).

4. **Básico (sem script)**: GitHub repo insights mostra alguns dados de tráfego do Pages, mas é limitado.

Recomendo começar com GA4 + Clarity juntos (gratuitos).

### Links do LinkedIn por idioma

Não é possível ter URLs diferentes do LinkedIn para PT e EN.

- O perfil do LinkedIn é único (https://www.linkedin.com/in/ivã-martins-71760b89/).
- O idioma da interface é definido pela configuração da conta do visitante ou pelo idioma do navegador.
- Não existe parâmetro oficial confiável tipo `?locale=pt_BR` que force o idioma do perfil para todos os casos.

No site:
- O botão "Ver no LinkedIn" / "View on LinkedIn" e o texto abaixo agora são bilíngues (usam o sistema `.lang-pt` / `.lang-en` do site).
- O link em si é o mesmo para ambos os idiomas (e é o correto).

Se quiser forçar de alguma forma (não recomendado), pode adicionar `?locale=pt_BR` ou `en_US`, mas o LinkedIn ignora na maioria dos casos para perfis pessoais.
