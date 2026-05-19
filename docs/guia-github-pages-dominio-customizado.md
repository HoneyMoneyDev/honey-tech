# Guia — GitHub Pages + Domínio Customizado (Hostgator)

Este guia cobre dois momentos distintos:

1. **Agora**: publicar o projeto no GitHub Pages com a URL padrão do GitHub.
2. **Depois**: apontar seu domínio comprado no Hostgator para o GitHub Pages.

---

## Parte 1 — Publicar no GitHub Pages (URL padrão)

### Pré-requisitos

- Repositório criado em `https://github.com/HoneyMoneyDev/honey-tech`
- Projeto com `npm run deploy` configurado (veja `us-001-setup-projeto-react.md`)
- `vite.config.ts` com `base: '/honey-tech/'`

### Passo 1 — Fazer o primeiro deploy

```bash
npm run deploy
```

Esse comando executa `npm run build && gh-pages -d dist`, o que:
- Gera a pasta `dist/` com o build de produção
- Cria (ou atualiza) a branch `gh-pages` no repositório remoto com o conteúdo de `dist/`

### Passo 2 — Ativar GitHub Pages no repositório

1. Acesse `https://github.com/HoneyMoneyDev/honey-tech`
2. Vá em **Settings → Pages** (menu lateral esquerdo)
3. Em **Source**, selecione:
   - Branch: `gh-pages`
   - Pasta: `/ (root)`
4. Clique em **Save**

Após alguns minutos, o site estará disponível em:

```
https://honeymoneydev.github.io/honey-tech/
```

> O GitHub exibe o link exato na própria página de Settings → Pages após a ativação.

### Passo 3 — Validar o deploy

Acesse a URL acima e confirme que a landing page carrega corretamente. Se estiver em branco, verifique se o `base` no `vite.config.ts` corresponde exatamente ao nome do repositório (`/honey-tech/`).

---

## Parte 2 — Apontar seu domínio do Hostgator para o GitHub Pages

> Faça esta etapa somente quando quiser usar o domínio customizado. O site continuará funcionando na URL padrão do GitHub enquanto você não configurar isso.

### Visão geral do fluxo

```
Usuário digita seu-dominio.com.br
       ↓
DNS do Hostgator resolve para os IPs do GitHub Pages
       ↓
GitHub Pages serve o site do repositório honey-tech
```

### Passo 1 — Descobrir seu domínio

Exemplo usado neste guia: `honeytech.com.br`
Substitua pelo domínio real que você comprou no Hostgator.

### Passo 2 — Configurar os registros DNS no Hostgator

1. Acesse o painel do Hostgator: `https://www.hostgator.com.br/painel`
2. Vá em **Domínios → Gerenciar DNS** (ou "Zone Editor" no cPanel)
3. Selecione o domínio `honeytech.com.br`

#### Registros A (para o domínio raiz `honeytech.com.br`)

Adicione os quatro registros A abaixo, apontando para os IPs do GitHub Pages:

| Tipo | Nome | Valor | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

> O símbolo `@` representa o domínio raiz. Alguns painéis do Hostgator pedem para deixar o campo Nome em branco — nesse caso, deixe vazio.

#### Registro CNAME (para `www.honeytech.com.br`)

| Tipo | Nome | Valor | TTL |
|------|------|-------|-----|
| CNAME | www | honeymoneydev.github.io | 3600 |

> Isso faz com que `www.honeytech.com.br` redirecione para o GitHub Pages, que por sua vez entrega o site correto.

### Passo 3 — Adicionar o domínio customizado no GitHub

1. Acesse `https://github.com/HoneyMoneyDev/honey-tech`
2. Vá em **Settings → Pages**
3. Em **Custom domain**, digite: `honeytech.com.br`
4. Clique em **Save**

O GitHub vai criar automaticamente um arquivo `CNAME` na branch `gh-pages` com o conteúdo:

```
honeytech.com.br
```

### Passo 4 — Criar o arquivo CNAME no repositório de código

Para que o arquivo `CNAME` não seja sobrescrito em cada deploy, crie-o na pasta `public/` do projeto:

```bash
echo "honeytech.com.br" > public/CNAME
```

O Vite copia automaticamente tudo de `public/` para `dist/` no build. Assim, o arquivo `CNAME` persiste em todos os deploys futuros.

Commit:

```bash
git add public/CNAME
git commit -m "chore(deploy): adiciona CNAME para dominio customizado"
git push origin master
npm run deploy
```

### Passo 5 — Atualizar o `base` no `vite.config.ts`

Com domínio customizado, o site não fica mais em `/honey-tech/` — ele fica na raiz do domínio. Atualize:

```ts
// vite.config.ts
export default defineConfig({
  base: '/',   // era '/honey-tech/'
  ...
})
```

Faça o deploy novamente:

```bash
npm run deploy
```

### Passo 6 — Ativar HTTPS

1. Volte em **Settings → Pages** no GitHub
2. Após o DNS propagar (pode levar até 24h), a opção **Enforce HTTPS** ficará disponível
3. Marque a caixa para ativar

> O GitHub emite e renova o certificado TLS automaticamente via Let's Encrypt.

### Passo 7 — Validar

Aguarde a propagação do DNS (geralmente 30 minutos a 2 horas, máximo 24h) e acesse:

- `https://honeytech.com.br` — deve carregar a landing page
- `https://www.honeytech.com.br` — deve redirecionar para o domínio raiz

---

## Resumo dos estados

| Momento | URL de acesso | `base` no Vite | Arquivo CNAME |
|---------|--------------|----------------|---------------|
| Agora (GitHub Pages padrão) | `honeymoneydev.github.io/honey-tech/` | `/honey-tech/` | Não necessário |
| Com domínio customizado | `honeytech.com.br` | `/` | `public/CNAME` com o domínio |

---

## Referências

- Documentação oficial do GitHub Pages com domínio customizado: `https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site`
- IPs do GitHub Pages (caso mudem): `https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site`
