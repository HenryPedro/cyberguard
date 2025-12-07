# 🛡️ CyberGuard (Frontend Client)

> **Status:** 🏗️ Prototipagem & Design de Interface | **Fase:** 0.1 (Skeleton)

## 📖 Sobre o Projeto

Este repositório contém exclusivamente a camada de **Frontend** (Interface de Usuário) do projeto **CyberGuard**, um futuro sistema de NOC (Network Operations Center).

Atualmente, o código serve como um **esqueleto arquitetural (blueprint)** e prova de conceito visual. O objetivo nesta fase é validar a experiência do usuário (UX), a responsividade dos dashboards e a estrutura de componentes antes da integração com serviços reais.

**⚠️ Nota Importante:**
* **Dados Estáticos:** Os gráficos e tabelas exibidos atualmente utilizam dados "mockados" (fictícios) para fins de visualização.
* **Sem Backend:** A API e a lógica de processamento de dados **não** estão incluídas neste repositório ainda.
* **Layout Volátil:** A interface está sujeita a mudanças drásticas conforme o desenvolvimento do backend ditar novas necessidades de visualização.

---

## 🗺️ Roadmap de Desenvolvimento

O projeto está sendo construído em etapas. Estamos atualmente na **Fase 1**.

- [x] **Fase 1: Frontend Skeleton** (Atual)
    - [x] Configuração do ambiente (Vite + TypeScript).
    - [x] Definição do Design System (Tailwind CSS).
    - [x] Criação de componentes base (Botões, Cards, Layouts).
    - [ ] Prototipagem das telas de Dashboard.

- [ ] **Fase 2: Construção da API (Em Planejamento)**
    - [ ] Desenvolvimento do Backend (Python/FastAPI ou Node.js).
    - [ ] Definição de Schemas de Banco de Dados.
    - [ ] Criação de Agentes de Coleta de Métricas.

- [ ] **Fase 3: Integração**
    - [ ] Conexão via WebSocket para dados em tempo real.
    - [ ] Autenticação e Controle de Acesso.

---

## 🛠️ Tecnologias (Camada de Apresentação)

Este esqueleto foi construído utilizando uma stack moderna e performática:

* **Core:** [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Componentes:** Baseado em shadcn/ui (Radix UI).

---

## 🤖 Engenharia Assistida por I.A.

Este protótipo utiliza **Inteligência Artificial** como ferramenta de aceleração de desenvolvimento.

**Uso Transparente:**
1.  **Geração de Boilerplate:** A estrutura inicial de arquivos e configurações do Vite/Tailwind foi agilizada via I.A.
2.  **Componentes de UI:** A I.A. auxiliou na escrita de componentes repetitivos e na sugestão de paletas de cores e espaçamentos (UX), permitindo foco na arquitetura do projeto.

*O código resultante é revisado e adaptado para garantir boas práticas de estruturação de pastas e tipagem.*

---

## 🚀 Como Executar o Protótipo

Como este é apenas o Frontend, você pode rodá-lo localmente para visualizar a interface:

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/HenryPedro/cyberguard.git](https://github.com/HenryPedro/cyberguard.git)
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Execute o servidor local:
    ```bash
    npm run dev
    ```
4.  Acesse `http://localhost:5173` para visualizar o esqueleto da aplicação.

---

## 📬 Contato

Desenvolvido por **[HenryPedro]**.
Este é um projeto de estudo contínuo. Sugestões sobre UX/UI são bem-vindas.
