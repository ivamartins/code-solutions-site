# Code Solutions — Software house (Grande Porto Alegre)

Site estático da **Code Solutions**: software house boutique em Porto Alegre focada em **software sob medida**, **integrações** e **automação** para empresas da Grande POA.

- **URL:** https://ivamartins.github.io/code-solutions-site/
- **CNPJ:** 43.985.337/0001-08
- **Stack do site:** HTML multi-página + Tailwind CDN + JS vanilla (i18n PT/EN)
- **Formulário:** Formspree `xwvjebjd`
- **Analytics:** GA4 `G-4HE7M2HJV3`

## Posicionamento

- Software house **unipessoal** (fundador no código), não body shop.
- Oferta principal: sistemas sob medida, integrações, automação WhatsApp.
- Secundário: legado, relatórios, IA aplicada.
- SEO local: Porto Alegre / Grande POA.
- Trajetória do fundador (Sicredi, Panvel/Dimed, Quartile) é **contexto de carreira**, não carteira de clientes da empresa — ver página Sobre.

## Páginas

| Arquivo | Função |
|---------|--------|
| `index.html` | Home — empresa, dores, 3 pilares, região, CTA |
| `solucoes.html` | Catálogo de soluções + mockups de produto |
| `sobre.html` | Empresa + fundador (foto) + FAQ honesto |
| `contato.html` | Form + WhatsApp + dados CNPJ / cidades |
| `assets/site.css` | Estilos e mockups UI |
| `assets/site.js` | Idioma, menu, form, links de contato |

## Preview local

```bash
cd /home/iva/workspace/code-solutions-site
python3 -m http.server 8000
# http://localhost:8000
```

## Publicar

```bash
git add -A
git commit -m "reposition: software house multi-page for Grande POA"
git push
```

GitHub Pages publica a raiz do repo via Actions.

## Contato no site

WhatsApp e email são montados em JS (`assets/site.js`) para reduzir scraping.
Formspree: atualize o ID em `contato.html` se recriar o form.

## Relação com o portfolio

- **Este site** = empresa B2B (leads locais).
- **Portfolio** (`ivamartins.github.io/portfolio` ou repo `portfolio`) = carreira / recrutadores.
- Cross-link discreto no footer / Sobre.
