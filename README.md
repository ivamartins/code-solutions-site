# Code Solutions — Site Profissional

Site estático lindo e profissional para **Code Solutions** (Ivã Martins) — posicionando serviços de Engenharia Backend Sênior (20+ anos de legado, migrações, APIs, event-driven) + **criação de agentes e automações com IA** de forma profissional e entregável.

- **Bilingue** (PT-BR primário + EN)
- **Zero build / zero custo de hospedagem** (Tailwind via CDN)
- **Alta conversão**: formulário + WhatsApp flutuante + CTAs claros
- **Prova social real**: cases de Sicredi (plataforma digital padrão), Panvel, Quartile + o projeto real do **whatsapp-grok-bot** como exemplo vivo de "agentes como serviço"

## Arquivos principais

- `index.html` — Site completo (único arquivo + pasta assets)
- `assets/hero.jpg` — Banner principal (gerado com IA)
- `assets/portrait.jpg` — Foto profissional / about (gerado com IA)
- `assets/agents-icon.jpg` — Ícone ilustrativo para o serviço de Agentes

## Como rodar localmente (teste rápido)

```bash
cd ~/code-solutions-site
python3 -m http.server 8000
# ou
npx serve .
```

Abra http://localhost:8000

- Teste o switcher de idioma (PT / EN) no topo
- Role todas as seções
- Teste os botões de WhatsApp (abrem wa.me com texto pré-preenchido)
- O formulário está apontando para placeholder do Formspree (veja abaixo)

## Como editar o conteúdo

1. Abra `index.html` em qualquer editor (VS Code, Zed, vim...).
2. Busque por trechos em português (`lang-pt`) e inglês (`lang-en`).
3. Os cases usam frases reais extraídas do currículo (Sicredi, Panvel, Quartile etc.).
4. O exemplo de **Agentes IA** referencia diretamente a arquitetura do projeto `~/whatsapp-grok-bot` (leia o README dele para mais detalhes).

Dica de bilingual: o switcher simplesmente alterna `lang` no `<html>` e usa CSS + classes `.lang-pt` / `.lang-en`. É simples e confiável.

## Imagens

- `hero.jpg` e `agents-icon.jpg`: geradas com IA (xAI Imagine) para visual profissional e moderno.
- `portrait.jpg`: **baseada na sua foto real** (editada com `image_edit` usando a foto como referência principal para criar um headshot profissional limpo, com fundo neutro moderno, iluminação de estúdio e crop adequado para site de serviços). Preserva sua aparência real com polimento para uso corporativo.

Referências salvas em `assets/`:
- `user-original-photo.jpg`: sua foto original completa (para referência futura).
- `linkedin-profile-page.png`: versão anterior do LinkedIn (ainda mantida como backup).

Para regenerar ou refazer o retrato:
- Use a ferramenta `image_edit` passando `assets/user-original-photo.jpg` como imagem de referência + prompt detalhado (ex: "Create a clean professional head-and-shoulders corporate portrait from this reference photo... tight crop, studio lighting, neutral background...").
- Ou simplesmente substitua `assets/portrait.jpg` por uma versão editada sua.

Hero e ícone podem ser regenerados com `image_gen` usando prompts semelhantes (hero 16:9 abstrato tech+AI, ícone 1:1 para agentes).

Copie os arquivos resultantes para a pasta `assets/`.

## Hospedagem — A forma MAIS BARATA e profissional (zero custo de hosting)

### Opção recomendada (gratuita + excelente)

1. Crie um repositório no GitHub (pode ser privado). Recomendo o nome `code-solutions-site`.
2. Adicione o remote e faça push (repo já está inicializado com histórico):

```bash
cd ~/code-solutions-site
git remote add origin git@github.com:SEU_USUARIO/code-solutions-site.git
git branch -M main
git push -u origin main
```

   (Substitua `SEU_USUARIO` pelo seu username do GitHub. Use HTTPS `https://github.com/SEU_USUARIO/...` se preferir.)

3. Vá em [Cloudflare Pages](https://pages.cloudflare.com) → Create a project → Connect to Git → selecione o repo.
   - Framework preset: **None**
   - Build command: (deixe vazio)
   - Output directory: `.` (ou `dist` se você adicionar build depois)
4. Deploy automático em cada push. URL grátis tipo `seu-projeto.pages.dev`.

**Alternativa simples (GitHub Pages):**
- A página que você está vendo agora (https://github.com/ivamartins/code-solutions-site/settings/pages) é a correta do repositório.
- Em **Build and deployment**:
  - Source está em **GitHub Actions** (dropdown).
  - Abaixo aparecem dois cards sugeridos:
    - **GitHub Pages Jekyll** (ícone com "i") — ignore, é para sites Jekyll.
    - **Static HTML** (ícone HTML5) — **este é o que você precisa** (deploy de arquivos estáticos sem build).
  - Clique no botão **Configure** do card **Static HTML**.
- Isso vai abrir o editor do workflow (arquivo .github/workflows/static.yml com o template padrão para static HTML).
- No topo direito, clique no botão verde **Commit changes...**
  - Deixe a mensagem padrão ou personalize (ex: "Configure GitHub Pages static deploy").
  - Selecione "Commit directly to the main branch".
  - Clique **Commit changes**.
- Isso adiciona o workflow ao repo e dispara o deploy automaticamente.
- A seção "Verified domains" (com "Add a domain") é opcional para domínio customizado. Pode ignorar por enquanto.
- Aguarde 1-2 minutos. Vá na aba **Actions** do repo para ver o workflow "pages build and deployment" rodando.
- O site será publicado em `https://ivamartins.github.io/code-solutions-site/`.
- Se aparecer "Your site is ready to be published", clique para habilitar.

**Importante:** Se o repositório estiver privado no plano gratuito, pode aparecer aviso para tornar público ou usar Enterprise. Para portfólio, tornar público é normal e recomendado. Se quiser manter privado, use Cloudflare Pages (veja abaixo).

**Vantagens do Cloudflare**: CDN global mais rápido, bandwidth ilimitado, custom domain grátis fácil, analytics grátis.

Alternativa excelente: **Netlify** (ótimo para forms e previews).

### Domínio próprio (barato)

- **.com.br**: registro.br (~R$ 40–60/ano)
- **.com**: Namecheap ou Hostinger em promoção (US$ 8–12 no primeiro ano)

Depois de comprar:
- No Cloudflare Pages adicione o domínio customizado.
- Siga as instruções de DNS (normalmente um CNAME).
- Cloudflare pode gerenciar seu domínio inteiro (melhor performance + proxy grátis).

Custo total ano 1: **R$ 0 de hospedagem + R$ 50–120 de domínio**.

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

A nota antiga de instrução foi removida do site visível (agora só "Seus dados são enviados de forma segura." / versão em inglês).

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

## Deploy passo a passo (copie e cole)

```bash
# 1. Vá para a pasta
cd ~/code-solutions-site

# 2. (Opcional) teste local
python3 -m http.server 8000

# 3. Git + push (primeira vez)
git init
git add .
git commit -m "Initial professional site"
git remote add origin git@github.com:SEU-USUARIO/code-solutions-site.git
git push -u origin main

# Depois só: git add . && git commit -m "update" && git push
```

Conecte o repo no Cloudflare Pages (ou Netlify). Feito.

## Estrutura de pastas sugerida para evolução

```
code-solutions-site/
├── index.html          # O site (edite aqui)
├── README.md
├── assets/
│   ├── hero.jpg
│   ├── portrait.jpg
│   └── agents-icon.jpg
└── (futuro) CNAME, _redirects, robots.txt etc.
```

## Dicas de manutenção

- Quer adicionar um novo case? Copie o padrão das divs `.case-card`.
- Quer mudar cores? Edite as classes Tailwind ou o script de config.
- Quer versão com framework depois? Adicione Vite + converta para componentes quando o volume justificar (o site atual continua funcionando para sempre sem dependências).
- Atualize o email no HTML e no README se mudar.

## Fontes de conteúdo (alta fidelidade)

- Bio narrativa principal: `~/Hello my name is Ivã Martins.txt`
- Experiência detalhada, clientes, tecnologias e bullets de impacto: currículos em `~/Documents/` e `~/Downloads/` (especialmente `Ivã_Martins_Resume.pdf` e os `Currículo*.pdf`)
- Exemplo vivo de agentes: pasta completa `~/whatsapp-grok-bot/` (leia especialmente o README dele — explica a arquitetura auto-contida com `.grok/agents` e `.grok/skills`)
- Agente deep-researcher: `~/.grok/agents/deep-researcher.md` (ótimo para oferecer "agentes de pesquisa profunda em codebases legadas")

## Próximos passos sugeridos após o site no ar

- Veja o guia completo em `LINKEDIN.md` (texto pronto para Experience, About, post de lançamento + orientação para a página "Code Solutions" que já existe no LinkedIn).
- Use as planilhas em `~/Downloads/` (`LISTA DE EMPRESAS SC2024.xlsx` etc.) para outreach dirigido.
- Ofereça "piloto de agente" de 2–4 semanas como entrada de baixo risco.
- Mais tarde podemos adicionar um PDF one-pager ou até um mini-site de cases mais profundos.

## Créditos / Contexto

Site construído com Grok (xAI) usando todo o contexto profissional do seu currículo + a conversa compartilhada sobre trajetória backend + a experiência prática de construção de agentes customizados que fizemos aqui (whatsapp-grok-bot + skills/agents).

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

— Grok (executado em modo de implementação após aprovação do plano)