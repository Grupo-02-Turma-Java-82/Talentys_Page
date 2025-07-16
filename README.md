<div align="center">

# Talentys - Gestão de Pessoas Simplificada

![Capa do Projeto](https://ik.imagekit.io/brunogodoy/imagens_portfolio/LogoSemFundo.png?updatedAt=1751540719796)

<p>
  <strong>Talentys</strong> é uma landing page moderna e interativa, desenvolvida para demonstrar uma plataforma completa de gestão de Recursos Humanos. O projeto foi construído com as tecnologias mais atuais do ecossistema React, incluindo <strong>Vite</strong>, <strong>TypeScript</strong>, e estilizado com <strong>Tailwind CSS</strong> e <strong>Shadcn/UI</strong> para uma interface elegante e responsiva.
</p>

</div>

---

## 🔮 Visão Geral

O objetivo desta página é apresentar as funcionalidades-chave de um sistema de RH, como gestão de colaboradores, recrutamento e controle de jornada, de uma forma visualmente atraente. A interface é totalmente responsiva, garantindo uma experiência de usuário consistente em desktops e dispositivos móveis.

### ✨ Funcionalidades Implementadas

* **Navbar Responsiva**: Menu de navegação elegante que se adapta a telas menores, utilizando um componente `Sheet` (painel lateral) para o menu mobile.
* **Seções Interativas**: A página é dividida em seções claras (`Hero`, `Funcionalidades`, `Demonstração`) com navegação suave ativada por scroll.
* **Componentização com Shadcn/UI**: Uso de componentes reutilizáveis e acessíveis como `Button`, `Sheet`, e `Separator`, seguindo as melhores práticas de design system.
* **Formulário de Demonstração**: Um formulário interativo (apenas visual, não armazena dados) para demonstrar o cadastro de novos colaboradores, com feedback de carregamento.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando um stack moderno e focado em performance e produtividade:

* **Framework**: [React](https://react.dev/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
* **Estilização**:
    * [Tailwind CSS](https://tailwindcss.com/)
    * [Shadcn/UI](https://ui.shadcn.com/) para componentes de UI
* **Ícones**: [Lucide React](https://lucide.dev/guide/packages/lucide-react) e [Phosphor Icons](https://phosphoricons.com/)

---

## 🛠️ Começando

Siga os passos abaixo para executar o projeto localmente.

### Pré-requisitos

* [Node.js](https://nodejs.org/en) (versão 18 ou superior)
* [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Instalação

1.  **Clone o repositório:**
    ```sh
    git clone [https://github.com/Grupo-02-Turma-Java-82/Talentys_Page.git]
    ```

2.  **Acesse o diretório do projeto:**
    ```sh
    cd Talentys_Page
    ```

3.  **Instale as dependências:**
    ```sh
    npm install
    ```

### Executando o Projeto

Para iniciar o servidor de desenvolvimento com Hot-Reload, execute:

```sh
npm run dev
```
Abra http://localhost:5173 (ou a porta indicada no seu terminal) para ver o projeto em ação.

### 📂 Estrutura de Arquivos
A estrutura do projeto é organizada para manter uma clara separação de responsabilidades, facilitando a manutenção e escalabilidade.
```
/src
├── components/         # Componentes React reutilizáveis
│   ├── ui/             # Componentes base do Shadcn/UI (Button, Sheet, etc.)
│   ├── CardFeature.tsx # Card para a seção de funcionalidades
│   ├── Demonstration.tsx # Seção de demonstração com o formulário
│   ├── Feature.tsx     # Seção de funcionalidades
│   ├── Footer.tsx      # Rodapé da página
│   ├── Form.tsx        # Formulário de cadastro
│   ├── Hero.tsx        # Seção principal de boas-vindas
│   └── Navbar.tsx      # Barra de navegação responsiva
├── lib/
│   └── utils.ts        # Funções utilitárias (ex: `cn` para classes)
├── pages/
│   └── Page.tsx        # Componente que organiza a estrutura da página
├── App.tsx             # Componente raiz da aplicação
└── main.tsx            # Ponto de entrada da aplicação React
```
## 6. Participantes

Este projeto foi desenvolvido por:

| Nome                | GitHub                                           | Função                 |
|---------------------|--------------------------------------------------|------------------------|
| Bruno Godoy         | [Brunogodoy2911](https://github.com/Brunogodoy2911) | Dev/Master         |
| Felipe Peronica     | [feperonica](https://github.com/feperonica)     |  Dev      |
| Jovani de Souza     | [JovaniOUnico](https://github.com/JovaniOUnico) | Dev            |
| Lívia D’Alexandri   | [liviadalexandri](https://github.com/liviadalexandri) | Dev               |
| Luiza Gonçalves     | [luizaeg](https://github.com/luizaeg)           | Dev                 |
| Maria Helena        | [squarcinihelena](https://github.com/squarcinihelena) | Dev               |
| Rafaela Giometti    | [rafagiometti](https://github.com/rafagiometti) | Dev                    |

### 🤝 Contribuindo
Contribuições são sempre bem-vindas! Se você tem sugestões para melhorar o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Faça um fork do projeto.

Crie uma nova branch (git checkout -b feature/sua-feature).

Faça o commit das suas alterações (git commit -m 'Adiciona sua-feature').

Envie para a sua branch (git push origin feature/sua-feature).

Abra um Pull Request.
