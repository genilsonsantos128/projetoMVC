# 🏛️ Comunidade Viva

Uma plataforma digital moderna e segura para igrejas, ministérios e comunidades religiosas, focada em conectar membros, facilitar pedidos de oração e promover o engajamento contínuo durante toda a semana.

## ✨ Funcionalidades

### 🙏 Mural de Oração
- **Compartilhamento de Pedidos**: Usuários podem publicar pedidos de oração com categorias (Família, Saúde, Trabalho, Espiritual, etc.)
- **Interação da Comunidade**: Outros membros podem clicar em "Estou orando", comentar ou reagir com emojis
- **Marcação de Urgência**: Pedidos urgentes são destacados na interface
- **Sistema de Categorias**: Organização por temas para facilitar a busca

### 💬 Fóruns Temáticos
- **Estudos Bíblicos**: Discussões sobre passagens bíblicas e estudos teológicos
- **Dúvidas sobre Fé**: Espaço para esclarecimentos e crescimento espiritual
- **Testemunhos**: Compartilhamento de experiências e testemunhos
- **Vida Cristã**: Discussões sobre o dia a dia da vida cristã

### 👥 Grupos de Interesse
- **Criação e Gerenciamento**: Grupos como Jovens, Casais, Mães em Oração, etc.
- **Controle de Membros**: Sistema de convites e aprovação de membros
- **Grupos Privados**: Opção de criar grupos fechados
- **Limite de Membros**: Controle opcional do número máximo de participantes

### 👤 Diretório de Membros
- **Perfis Personalizados**: Nome, ministério, bio e informações de contato
- **Busca e Filtros**: Encontre membros por nome, ministério ou interesses
- **Privacidade**: Controle sobre quais informações são visíveis

### 🔒 Recursos de Segurança
- **Sistema de Moderação**: Ferramentas para administradores e moderadores
- **Denúncias**: Sistema de reportes para conteúdo inadequado
- **Controle de Acesso**: Diferentes níveis de permissão (Admin, Moderador, Líder, Membro)
- **Ambiente Seguro**: Validações e filtros para manter um ambiente saudável

### 📱 Design Responsivo
- **Interface Intuitiva**: Design limpo e fácil navegação para todas as idades
- **Mobile-First**: Otimizado para dispositivos móveis
- **Acessibilidade**: Desenvolvido seguindo padrões de acessibilidade

## 🚀 Tecnologias Utilizadas

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: TailwindCSS
- **Backend**: Next.js API Routes
- **Banco de Dados**: SQLite com Prisma ORM
- **Autenticação**: NextAuth.js (preparado)
- **Validação**: Validações client-side e server-side
- **Deploy**: Pronto para Vercel/Netlify

## 📦 Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/comunidade-viva.git
cd comunidade-viva
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o banco de dados
```bash
# Gerar o cliente Prisma
npx prisma generate

# Criar e sincronizar o banco de dados
npx prisma db push

# Popular com dados iniciais (opcional)
npm run db:seed
```

### 4. Configure as variáveis de ambiente
O arquivo `.env` já está configurado com valores padrão para desenvolvimento:

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=comunidade-viva-secret-key-2024
APP_NAME="Comunidade Viva"
APP_DESCRIPTION="Plataforma digital para comunidades religiosas"
```

### 5. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

## 📚 Uso da Plataforma

### Primeiros Passos

1. **Acesse a aplicação** em [http://localhost:3000](http://localhost:3000)
2. **Crie uma conta** clicando em "Cadastrar" 
3. **Faça login** com suas credenciais
4. **Explore o dashboard** com todas as funcionalidades

### Credenciais de Demo

Para teste rápido, use as credenciais pré-configuradas:

- **E-mail**: `admin@comunidadeviva.com`
- **Senha**: `demo123`

### Navegação Principal

- **Mural de Oração**: Visualize e interaja com pedidos de oração
- **Fóruns**: Participe de discussões temáticas
- **Grupos**: Crie ou participe de grupos de interesse
- **Membros**: Conheça outros membros da comunidade

## 🗄️ Estrutura do Banco de Dados

### Principais Entidades

- **Users**: Informações dos usuários e perfis
- **PrayerRequests**: Pedidos de oração com categorias
- **PrayerResponses**: Interações nos pedidos (orando, comentários)
- **Forums**: Fóruns temáticos de discussão
- **ForumPosts**: Tópicos dentro dos fóruns
- **ForumComments**: Comentários nos tópicos
- **Groups**: Grupos de interesse
- **GroupMembers**: Membros dos grupos com roles
- **Notifications**: Sistema de notificações
- **Reports**: Sistema de denúncias e moderação

### Relacionamentos

- Usuários podem criar múltiplos pedidos de oração
- Pedidos recebem respostas (orações, comentários) de outros usuários
- Grupos têm donos e membros com diferentes roles
- Sistema completo de notificações para engajamento

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento

# Build e Deploy
npm run build           # Build para produção
npm run start           # Inicia servidor de produção

# Banco de Dados
npm run db:seed         # Popula banco com dados iniciais
npm run db:reset        # Reseta e repopula o banco

# Qualidade do Código
npm run lint            # Verifica problemas de código
```

## 🎨 Personalização

### Identidade Visual

A plataforma foi desenvolvida para ser facilmente personalizável:

1. **Logo e Nome**: Altere em `src/app/page.tsx` e `src/app/layout.tsx`
2. **Cores**: Modifique as classes do TailwindCSS nos componentes
3. **Configurações**: Ajuste as variáveis em `.env`

### Adaptação para sua Igreja

1. **Nome da Organização**: Configure `APP_NAME` no `.env`
2. **Dados Iniciais**: Modifique `prisma/seed.ts` com dados da sua igreja
3. **Ministérios**: Atualize as opções em `src/app/auth/register/page.tsx`
4. **Fóruns**: Personalize os fóruns padrão no seed

## 🔐 Segurança e Privacidade

- **Validação de Dados**: Todas as entradas são validadas
- **Controle de Acesso**: Sistema de roles e permissões
- **Moderação**: Ferramentas para manter ambiente saudável
- **Privacidade**: Usuários controlam visibilidade de suas informações

## 🚀 Deploy

### Vercel (Recomendado)

1. **Push para GitHub**: Faça push do código para um repositório
2. **Conecte no Vercel**: Importe o projeto no Vercel
3. **Configure Variáveis**: Adicione as variáveis de ambiente
4. **Deploy**: O deploy é automático

### Outras Plataformas

A aplicação é compatível com:
- Netlify
- Railway
- Heroku
- DigitalOcean App Platform

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para dúvidas, sugestões ou suporte:

- **Issues**: Abra uma issue no GitHub
- **Email**: contato@comunidadeviva.com (exemplo)
- **Documentação**: Consulte este README

---

**Comunidade Viva** - Conectando corações através da fé 🙏

Desenvolvido com ❤️ para fortalecer comunidades religiosas no mundo digital.
