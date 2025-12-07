odo List – Lista de Tarefas em JavaScript
📌 Descrição do Projeto

Este projeto é uma aplicação de Lista de Tarefas (Todo List) desenvolvida com HTML, CSS e JavaScript puro, com o objetivo de praticar manipulação do DOM, eventos e organização de layout com Flexbox.

A aplicação permite que o usuário adicione tarefas dinamicamente, sem recarregar a página, mantendo uma interface simples, organizada e funcional.

🎯 Objetivo

O principal objetivo deste projeto é:

Praticar fundamentos de JavaScript

Aprender a manipular elementos do DOM

Trabalhar com eventos de formulário

Criar um layout organizado usando CSS Flexbox

Desenvolver uma aplicação funcional sem uso de frameworks

🧩 Funcionalidades

✅ Adicionar novas tarefas

✅ Evitar inserção de tarefas vazias

✅ Atualização dinâmica da lista (sem refresh)

✅ Limpeza automática do campo de texto após adicionar

✅ Suporte ao clique no botão e à tecla Enter

🛠️ Tecnologias Utilizadas

HTML5 – Estrutura da aplicação

CSS3 – Estilização e layout com Flexbox

JavaScript (Vanilla JS) – Lógica e manipulação do DOM

⚙️ Como Funciona

O usuário digita uma tarefa no campo de texto.

Ao clicar em Adicionar ou pressionar Enter, o formulário dispara um evento.

O JavaScript captura esse evento e impede o recarregamento da página.

O texto digitado é validado (para evitar tarefas vazias).

Um novo elemento <li> é criado dinamicamente.

O item é adicionado à lista de tarefas exibida na tela.

O campo de input é limpo automaticamente e recebe foco novamente.

🗂️ Estrutura do Projeto
todo-list/
│
├── index.html      # Estrutura HTML da aplicação
├── style.css       # Estilos CSS
├── scripts.js      # Lógica em JavaScript
└── README.md       # Documentação do projeto

🧠 Conceitos Aplicados

Manipulação do DOM (document.createElement, appendChild)

Eventos JavaScript (addEventListener)

Prevenção de comportamento padrão (event.preventDefault)

Flexbox (display: flex, flex-direction)

Boas práticas de código (organização e legibilidade)

🚀 Como Executar o Projeto

Clone ou baixe este repositório.

Abra o arquivo index.html em qualquer navegador moderno.

Comece a adicionar suas tarefas.

📚 Aprendizado

Este projeto foi desenvolvido como parte do aprendizado em desenvolvimento front-end, sendo ideal para quem está começando com JavaScript e deseja entender como aplicações interativas funcionam sem o uso de bibliotecas ou frameworks.

🧑‍💻 Autor

Projeto desenvolvido para fins educacionais, com foco em aprendizado e prática de conceitos fundamentais do Front-end.
