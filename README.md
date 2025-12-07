# ✅ Todo List – Lista de Tarefas em JavaScript

## 📌 Descrição do Projeto

Este projeto é uma **aplicação de Lista de Tarefas (Todo List)** desenvolvida com **HTML, CSS e JavaScript puro**, com o objetivo de praticar manipulação do DOM, eventos e organização de layout com Flexbox.

A aplicação permite que o usuário **adicione tarefas dinamicamente**, sem recarregar a página, mantendo uma interface simples, organizada e funcional.

---

## 🎯 Objetivo

O principal objetivo deste projeto é:

- Praticar fundamentos de **JavaScript**
- Aprender a manipular elementos do **DOM**
- Trabalhar com **eventos de formulário**
- Criar um layout organizado usando **CSS Flexbox**
- Desenvolver uma aplicação funcional sem uso de frameworks

---

## 🧩 Funcionalidades

- ✅ Adicionar novas tarefas  
- ✅ Evitar inserção de tarefas vazias  
- ✅ Atualização dinâmica da lista (sem refresh)  
- ✅ Limpeza automática do campo de texto após adicionar  
- ✅ Suporte ao clique no botão e à tecla Enter  

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** – Estrutura da aplicação  
- **CSS3** – Estilização e layout com Flexbox  
- **JavaScript (Vanilla JS)** – Lógica e manipulação do DOM  

---

## ⚙️ Como Funciona

1. O usuário digita uma tarefa no campo de texto.  
2. Ao clicar em **Adicionar** ou pressionar **Enter**, o formulário dispara um evento.  
3. O JavaScript captura esse evento e impede o recarregamento da página.  
4. O texto digitado é validado (para evitar tarefas vazias).  
5. Um novo elemento `<li>` é criado dinamicamente.  
6. O item é adicionado à lista de tarefas exibida na tela.  
7. O campo de input é limpo automaticamente e recebe foco novamente.  

---

## 🗂️ Estrutura do Projeto

```text
todo-list/
│
├── index.html      # Estrutura HTML da aplicação
├── style.css       # Estilos CSS
├── scripts.js      # Lógica em JavaScript
└── README.md       # Documentação do projeto
