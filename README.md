# Tela de Login e Exibição de Notificações 🔔 - REACT

Este projeto consiste na criação de duas páginas com REACT: uma página de login fake e uma página para exibição de notificações. A página de login simula a autenticação do usuário sem a necessidade de conexão com uma API real. Após o login, o usuário é redirecionado para a página de notificações, onde são exibidas as informações de title e body de posts, que são consultadas através da API pública JSONPlaceholder (endpoint: GET https://jsonplaceholder.typicode.com/posts?userId=1). A página de notificações realiza uma requisição para a API e exibe as notificações na tela de maneira simples e organizada.

# Tecnologias e Ferramentas Utilizadas: 
React: Utilizado para construção das interfaces dinâmicas
Frontend: HTML, CSS, JavaScript
API: JSONPlaceholder (para consulta de notificações)
React Router: Para navegação entre as páginas de login e notificações.
State Management: Gerenciamento de estados do login e das notificações com o useState e useEffect do React.

Simulação de login: Simulação simples de login com verificação de usuário fictício (sem backend real).

# Fluxo: 
Ao acessar a tela de login, preencher qualquer informação nos campos.
Na tela de Notificações é exibido um (🔔), ao clicar, uma Pop-up é exibida contendo as informações da API.
