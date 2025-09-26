# DETRAN Questions

O **DETRAN Questions** é uma aplicação web desenvolvida para auxiliar alunos nos estudos das provas teóricas do DETRAN, centralizando informações e questões organizadas por categorias para facilitar o aprendizado e a preparação para os exames.

## 🎯 Objetivo

Este aplicativo tem como objetivo centralizar e organizar questões das provas teóricas do DETRAN, permitindo que os alunos:
- Estudem questões categorizadas por temas específicos
- Pesquisem questões por palavras-chave
- Visualizem estatísticas de distribuição por categoria
- Gerenciem um banco de questões personalizado
- Tenham acesso a explicações detalhadas para cada questão

## 🚀 Tecnologias Utilizadas

### Frontend
- **[Next.js 15.5.4](https://nextjs.org/)** - Framework React para aplicações web
- **[React 19.1.0](https://react.dev/)** - Biblioteca para construção de interfaces
- **[TypeScript 5](https://www.typescriptlang.org/)** - Superset do JavaScript com tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Radix UI](https://www.radix-ui.com/)** - Componentes de interface acessíveis
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones
- **[Class Variance Authority](https://cva.style/)** - Utilitário para variantes de classes CSS

### Ferramentas de Desenvolvimento
- **[Biome](https://biomejs.dev/)** - Linter e formatador de código
- **[PostCSS](https://postcss.org/)** - Processador CSS
- **TW Animate CSS** - Animações para Tailwind CSS

### Categorias de Questões
O sistema organiza as questões nas seguintes categorias:
- 🚦 **Sinalização** - Placas e sinais de trânsito
- 🛡️ **Direção Defensiva** - Técnicas de condução segura
- 🔧 **Mecânica** - Conhecimentos técnicos do veículo
- 🌱 **Meio Ambiente** - Impacto ambiental e sustentabilidade
- ⚖️ **Legislação** - Leis e regulamentações de trânsito
- 🚑 **Primeiros Socorros** - Procedimentos de emergência

## 🛠️ Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/detran-questions.git
cd detran-questions
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter (Biome)
- `npm run format` - Formata o código automaticamente

## 🎨 Funcionalidades

- ✅ **Gestão de Questões**: Adicionar, editar e excluir questões
- 🔍 **Sistema de Busca**: Pesquisar questões por texto
- 🏷️ **Filtros por Categoria**: Organizar questões por tema
- 📊 **Dashboard com Estatísticas**: Visualizar distribuição de questões
- 📱 **Design Responsivo**: Interface adaptável para mobile e desktop
- 🎯 **Interface Intuitiva**: Design moderno e fácil de usar

## 🚀 Deploy

Para fazer deploy da aplicação, você pode usar:

- **[Vercel](https://vercel.com/)** - Plataforma recomendada para Next.js
- **[Netlify](https://netlify.com/)** - Alternativa para deploy
- **[Railway](https://railway.app/)** - Plataforma de deploy simples

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
