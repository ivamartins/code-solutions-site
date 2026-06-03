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
- No seu repositório no GitHub, vá em **Settings → Pages**
- Em "Build and deployment" (ou "Source"):
  - Se aparecer a opção "Deploy from a branch", use:
    - Source: **Deploy from a branch**
    - Branch: **main**
    - Folder: **/ (root)**
    - Clique **Save**.
  - Se não aparecer "Deploy from a branch" (comum na UI atual ou contas novas), use **GitHub Actions**:
    - Source: **GitHub Actions**
    - Salve. O repositório já inclui o workflow `.github/workflows/deploy-pages.yml` que faz o deploy estático automaticamente no push.
- A seção "Verified domains" é opcional (só aparece se você quiser usar domínio customizado). Pode ignorar por enquanto.
- Aguarde 1-2 minutos após o push (ou acione manualmente via Actions tab). O site ficará disponível em `https://ivamartins.github.io/code-solutions-site/`
- Se aparecer mensagem de erro ou "Your site is ready to be published", clique para habilitar.

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

O formulário já está no HTML apontando para:

```html
action="https://formspree.io/f/YOUR_FORM_ID_HERE"
```

Passos:
1. Acesse https://formspree.io (conta grátis)
2. Crie um novo form
3. Copie o ID (ex: `xayz1234`)
4. Substitua `YOUR_FORM_ID_HERE` no `index.html`
5. Pronto — envios chegam no seu email (tier gratuito tem limite generoso para começar)

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

- Compartilhe o link em LinkedIn + com a rede.
- Use as planilhas em `~/Downloads/` (`LISTA DE EMPRESAS SC2024.xlsx` etc.) para outreach dirigido.
- Ofereça "piloto de agente" de 2–4 semanas como entrada de baixo risco.
- Mais tarde podemos adicionar um PDF one-pager ou até um mini-site de cases mais profundos.

## Créditos / Contexto

Site construído com Grok (xAI) usando todo o contexto profissional do seu currículo + a conversa compartilhada sobre trajetória backend + a experiência prática de construção de agentes customizados que fizemos aqui (whatsapp-grok-bot + skills/agents).

Qualquer dúvida ou ajuste (texto, layout, nova imagem, adicionar mais um case), é só pedir — edições são rápidas via search/replace ou re-geração.

Boa sorte nas propostas! O site está pronto para converter.

— Grok (executado em modo de implementação após aprovação do plano)