# 🚀 Guia de Deploy - Social Scheduler AI

## Plataforma Recomendada: **Vercel**

A aplicação foi otimizada para deploy no **Vercel**, que oferece as melhores integrações para Next.js com animações pesadas.

## Por que Vercel?

✅ **Otimização automática** do Next.js  
✅ **Edge Functions** para reduzir latência global  
✅ **Image Optimization** nativo e automático  
✅ **Suporte excelente** para builds complexos (Three.js, GSAP, WebGL)  
✅ **Deploy automático** via Git (push = deploy)  
✅ **Preview Deployments** para cada Pull Request  
✅ **Analytics e Monitoring** integrados  
✅ **CDN global** para todos os assets  
✅ **Zero configuration** - funciona out of the box  

## 📋 Pré-requisitos

1. Conta no [Vercel](https://vercel.com) (gratuita)
2. Repositório no GitHub/GitLab/Bitbucket
3. Variáveis de ambiente configuradas

## 🔧 Passos para Deploy

### Opção 1: Deploy via Dashboard (Recomendado)

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **"Add New Project"**
3. Importe seu repositório do GitHub/GitLab/Bitbucket
4. Configure o projeto:
   - **Framework Preset**: Next.js (detectado automaticamente)
   - **Root Directory**: `./` (raiz do projeto)
   - **Build Command**: `yarn build` (ou `npm run build`)
   - **Output Directory**: `.next` (automático)
5. Configure as **Environment Variables**:
   ```
   NEXT_PUBLIC_APP_URL=https://app.exemplo.com
   NEXT_PUBLIC_TRY_URL=https://app.exemplo.com/try
   NEXT_PUBLIC_HELP_URL=https://help.exemplo.com
   ```
6. Clique em **"Deploy"**

### Opção 2: Deploy via CLI

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Fazer login
vercel login

# Deploy (primeira vez - configuração interativa)
vercel

# Deploy em produção
vercel --prod
```

## ⚙️ Configurações de Build

O projeto já está configurado com:

- ✅ **vercel.json** - Configurações específicas do Vercel
- ✅ **next.config.ts** - Otimizações de performance e imagens
- ✅ **Dynamic imports** - Componentes pesados carregados sob demanda
- ✅ **Image optimization** - AVIF/WebP automático
- ✅ **Cache headers** - Imagens cacheadas por 1 ano

## 🎯 Variáveis de Ambiente

Crie um arquivo `.env.local` (ou configure no Vercel):

```env
# URLs da aplicação
NEXT_PUBLIC_APP_URL=https://app.exemplo.com
NEXT_PUBLIC_TRY_URL=https://app.exemplo.com/try
NEXT_PUBLIC_HELP_URL=https://help.exemplo.com

# Opcional: Analytics e Monitoring
# NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
# NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
```

**Importante**: As variáveis `NEXT_PUBLIC_*` são expostas ao cliente. Não coloque secrets aqui.

## 📊 Build Times

Devido às animações pesadas (Three.js, GSAP, WebGL):

- **Build inicial**: 3-5 minutos (normal)
- **Builds subsequentes**: 1-2 minutos (cache do Vercel)
- **Hot reloads**: Instantâneo em desenvolvimento

## 🚨 Troubleshooting

### Build falha com erro de memória

Se o build falhar por falta de memória:

1. No Vercel Dashboard, vá em **Settings → General**
2. Aumente o **Function Memory** para 3000MB ou mais
3. Ou configure no `vercel.json`:
   ```json
   {
     "functions": {
       "app/**/*.{ts,tsx}": {
         "maxDuration": 30,
         "memory": 3000
       }
     }
   }
   ```

### Animações não funcionam em produção

1. Verifique se componentes estão usando `"use client"`
2. Verifique se dynamic imports estão configurados (já está feito)
3. Verifique console do navegador para erros

### Imagens não carregam

1. Verifique se as imagens estão em `public/`
2. Use caminhos absolutos: `/imagem.jpg` (não `./imagem.jpg`)
3. Verifique se `next/image` está sendo usado corretamente

## 🔄 Deploy Contínuo

Após o primeiro deploy, cada push para:

- **`main`** ou **`master`** → Deploy em produção
- **Outras branches** → Preview deployment (URL único)

## 📈 Monitoring e Analytics

O Vercel oferece:

- **Analytics** - Page views, performance metrics
- **Speed Insights** - Core Web Vitals
- **Logs** - Erros e warnings em tempo real

Ative em: **Dashboard → Settings → Analytics**

## 🎨 Custom Domain

1. No Vercel Dashboard, vá em **Settings → Domains**
2. Adicione seu domínio customizado
3. Configure DNS conforme instruções do Vercel
4. Aguarde propagação (pode levar até 48h)

## 🔐 Segurança

- ✅ Headers de segurança configurados no `next.config.ts`
- ✅ HTTPS automático (Vercel)
- ✅ Não exponha secrets em `NEXT_PUBLIC_*`
- ✅ Use variáveis de ambiente server-side para APIs

## 💰 Custos

**Plano Hobby (Gratuito)**:
- ✅ 100GB bandwidth/mês
- ✅ Deploys ilimitados
- ✅ Preview deployments ilimitados
- ✅ Domínios customizados
- ✅ SSL automático

Para mais tráfego, considere o **Pro Plan** ($20/mês)

---

**Pronto!** Sua aplicação estará no ar em minutos 🚀

