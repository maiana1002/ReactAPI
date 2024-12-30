import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; //hook

function Login() {
const [email, setEmail] = useState(""); // Armazena o email
const [senha, setSenha] = useState(""); // Armazena a senha

const navegar = useNavigate(); // Hook da navegação 

const realizarLogin = (e) => {
e.preventDefault(); 
navegar("/notificacao"); // Redireciona para a tela de notificação
};

return (
<div style={{ textAlign: "center", marginTop: "50px" }}>
<h1>Notificações</h1>
<p>exemplo: email 123@123 / senha 123</p>
<form onSubmit={realizarLogin}> {/* Formulário de login */}
<div>
<label>Email:</label>
<input
type="email"
value={email} // Controla o valor do input de email
onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
placeholder="Digite seu email"
required // Campo obrigatório
/>
</div>
<div>
<label>Senha:</label>
<input
type="password"
value={senha} // Controla o valor do input de senha
onChange={(e) => setSenha(e.target.value)} // Atualiza o estado da senha
placeholder="Digite sua senha"
required // Campo obrigatório
/>
</div>
<button type="submit">Login</button> {/* Botão para enviar o formulário */}
</form>
</div>
);
}

export default Login;
