# 🚀 Social Scheduler AI - Landing Page

Uma landing page moderna e artística para o **Social Scheduler AI**, uma plataforma de calendários e aprovações de conteúdo de social media com IA.

## 📝 Sobre o Projeto

Esta landing page foi desenvolvida para apresentar uma solução inovadora que ajuda agências e equipes de marketing a gerenciar seus cronogramas de conteúdo, organizar em Kanban e coletar aprovações de clientes por link público.

## 🛠️ Tecnologias

- **Next.js 16** - Framework React
- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização
- **GSAP** - Animações avançadas
- **Three.js** - Efeitos 3D e partículas
- **React Three Fiber** - Renderização 3D

## 🚀 Como Executar

### Instalação

```bash
# Instalar dependências
yarn install
# ou
npm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
yarn dev
# ou
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver a landing page.

### Build para Produção

```bash
# Criar build de produção
yarn build
# ou
npm run build

# Iniciar servidor de produção
yarn start
# ou
npm start
```

## 📦 Scripts Disponíveis

- `yarn dev` - Inicia o servidor de desenvolvimento
- `yarn build` - Cria o build de produção
- `yarn start` - Inicia o servidor de produção
- `yarn lint` - Executa o linter
- `yarn format` - Formata o código

## 🚀 Deploy

### Vercel (Recomendado)

A melhor plataforma para fazer deploy desta aplicação é o **Vercel** (criadores do Next.js), pois oferece:

- ✅ Otimização automática do Next.js
- ✅ Edge Functions para reduzir latência
- ✅ Image Optimization nativo
- ✅ Suporte excelente para builds complexos com animações pesadas
- ✅ Deploy automático via Git
- ✅ Analytics e monitoring integrados
- ✅ Preview deployments para cada PR
- ✅ CDN global para assets estáticos

#### Passos para Deploy no Vercel:

1. **Instalar Vercel CLI** (opcional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Dashboard**:
   - Acesse [vercel.com](https://vercel.com)
   - Conecte seu repositório GitHub/GitLab/Bitbucket
   - Configure as variáveis de ambiente (ver `.env.example`)
   - Clique em "Deploy"

3. **Deploy via CLI**:
   ```bash
   vercel
   ```

4. **Configurar Variáveis de Ambiente**:
   ```
   NEXT_PUBLIC_APP_URL=https://app.exemplo.com
   NEXT_PUBLIC_TRY_URL=https://app.exemplo.com/try
   NEXT_PUBLIC_HELP_URL=https://help.exemplo.com
   ```

#### Otimizações Aplicadas:

- ✅ Dynamic imports para componentes pesados (Dither, Particles, TargetCursor)
- ✅ Compressão gzip habilitada
- ✅ Otimização de imagens com AVIF/WebP
- ✅ Cache headers configurados
- ✅ Bundle optimization para GSAP e Three.js

### Alternativas

**Netlify**: Também funciona bem, mas sem otimizações específicas do Next.js
**Railway**: Boa para apps com muitas dependências, mas pode ser mais caro
**AWS Amplify**: Complexo, melhor para empresas grandes

### Build Times

Com as animações pesadas (Three.js, GSAP), o build inicial pode levar 3-5 minutos. Isso é normal e o Vercel otimiza builds subsequentes usando cache.

---

Desenvolvido com ❤️ para apresentar o Social Scheduler AI
