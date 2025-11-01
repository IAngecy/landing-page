# ⚙️ Configuração do Deploy na Vercel

## ✅ Checklist de Configuração

### 1. **Variáveis de Ambiente (Obrigatório)**

No painel da Vercel, vá em **Settings → Environment Variables** e adicione:

```
NEXT_PUBLIC_APP_URL=https://app.exemplo.com
NEXT_PUBLIC_TRY_URL=https://app.exemplo.com/try
NEXT_PUBLIC_HELP_URL=https://help.exemplo.com
```

**⚠️ Importante:** Substitua pelos URLs reais da sua aplicação.

### 2. **Configurações de Build**

No painel da Vercel, vá em **Settings → General** e verifique:

- **Framework Preset**: `Next.js` (deve ser detectado automaticamente)
- **Build Command**: `yarn build` (ou `npm run build`)
- **Output Directory**: `.next` (automático)
- **Install Command**: `yarn install` (ou `npm install`)
- **Node.js Version**: `20.x` ou superior (recomendado)

### 3. **Memória e Performance (Opcional - Recomendado para Builds Pesados)**

Se o build falhar por falta de memória:

1. Vá em **Settings → General**
2. Role até **Build & Development Settings**
3. Aumente **Function Memory** para `3000MB` ou mais
4. Configure **Function Max Duration** para `300` segundos (5 minutos)

Ou adicione no `vercel.json`:
```json
{
  "functions": {
    "app/**/*.{ts,tsx}": {
      "memory": 3000,
      "maxDuration": 300
    }
  }
}
```

### 4. **Configurações de Domínio (Opcional)**

Se você tem um domínio customizado:

1. Vá em **Settings → Domains**
2. Adicione seu domínio
3. Configure DNS conforme instruções da Vercel
4. Aguarde propagação (pode levar até 48h)

### 5. **Configurações de Deploy Automático**

1. Vá em **Settings → Git**
2. Verifique se o repositório está conectado
3. Configure **Production Branch**: `main` ou `master`
4. Habilite **Automatic Deployments from Git**

### 6. **Preview Deployments (Recomendado)**

Por padrão, cada PR cria um preview deployment. Para desabilitar:

1. Vá em **Settings → Git**
2. Desabilite **Create Preview Deployments for Pull Requests**

## 🚀 Configurações já Implementadas

O projeto já vem configurado com:

✅ **vercel.json** - Configurações otimizadas  
✅ **next.config.ts** - Otimizações de performance  
✅ **Dynamic imports** - Componentes pesados sob demanda  
✅ **Image optimization** - AVIF/WebP automático  
✅ **Cache headers** - Assets cacheados corretamente  
✅ **Node memory** - Configurado para 4GB (vercel.json)  

## ⚠️ Possíveis Problemas e Soluções

### Build falha com "Out of Memory"

**Solução:**
1. Aumente `Function Memory` para 3000MB+
2. Ou remova temporariamente animações pesadas no build

### Build demora muito (>5 minutos)

**Solução:**
1. Isso é **normal** para projetos com Three.js/GSAP
2. O Vercel usa cache para builds subsequentes
3. Considere aumentar `maxDuration` no vercel.json

### Erro de TypeScript no build

**Solução:**
1. Verifique se todos os tipos estão corretos localmente:
   ```bash
   yarn build
   ```
2. Se funcionar localmente, pode ser cache do Vercel
3. Limpe o cache em **Settings → General → Clear Build Cache**

### Erro "Module not found"

**Solução:**
1. Verifique se `yarn.lock` ou `package-lock.json` está commitado
2. Garanta que todas as dependências estão no `package.json`
3. Não use `node_modules` no `.gitignore` (já deve estar assim)

## 📊 Monitoramento Após Deploy

Após o deploy bem-sucedido:

1. **Analytics** - Ative em **Settings → Analytics**
2. **Speed Insights** - Ative em **Settings → Speed Insights**
3. **Logs** - Verifique em **Deployments → View Function Logs**

## 🔄 Atualizar Deploy

Após fazer push para a branch de produção:

1. O Vercel detecta automaticamente
2. Cria um novo deployment
3. Testa em preview antes de ir para produção (se configurado)
4. Atualiza automaticamente quando passar nos testes

## 💡 Dicas Extras

1. **Use Preview Deployments** - Teste cada PR antes de fazer merge
2. **Monitore Logs** - Verifique erros em tempo real
3. **Use Edge Functions** - Para rotas que precisam de baixa latência
4. **Otimize Imagens** - Use sempre `next/image` (já configurado)

---

**Pronto!** Com essas configurações, seu deploy deve funcionar perfeitamente! 🚀

