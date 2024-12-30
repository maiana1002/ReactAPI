import React, { useState, useEffect } from "react";

function Notificacao() {
const [notificacoes, setNotificacoes] = useState([]); // armazena as notificações
const [carregando, setCarregando] = useState(false); // controle do carregamento
const [exibirNotificacoes, setExibirNotificacoes] = useState(false); // controle das exibições das notificações

const buscarNotificacoes = () => {
if (!notificacoes.length && !carregando) { //carregando notificações
setCarregando(true); 
fetch("https://jsonplaceholder.typicode.com/posts?userId=1") // busca as notificações na API
.then((resposta) => resposta.json()) // converte a resposta para JSON
.then((dados) => {
setNotificacoes(dados); 
setCarregando(false); // finaliza o carregamento
});
}
setExibirNotificacoes(!exibirNotificacoes); // alterna a exibição das notificações
};

return (
<div style={{ position: "relative", height: "100vh", width: "100vw", backgroundColor: "white" }}>

{/* Logo da kognit de fundo  */}
<div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat", width: "300px", height: "150px" }}></div>

{/* sino para mostrar/ocultar as notificações */}
<button onClick={buscarNotificacoes} style={{ position: "absolute", top: "10px", right: "10px", background: "none", border: "none", cursor: "pointer", fontSize: "24px", color: "#333" }}>🔔</button>

{/* exibe as notificações como uma pop-up  */}
{exibirNotificacoes && (
<div style={{ position: "absolute", top: "50px", right: "10px", width: "250px", maxHeight: "200px", overflowY: "auto", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "white", padding: "10px" }}>

{carregando ? (
<p style={{ textAlign: "center" }}>Carregando...</p> // Exibe a mensagem de carregamento

) : notificacoes.length ? (
notificacoes.map((notificacao) => (
<div key={notificacao.id} style={{ marginBottom: "10px", padding: "5px", borderBottom: "1px solid #ddd" }}>
<h4 style={{ fontSize: "14px", margin: "0 0 5px" }}>{notificacao.title}</h4>
<p style={{ fontSize: "12px", margin: 0 }}>{notificacao.body}</p>
</div>
))
) : (
<p style={{ textAlign: "center" }}>Sem notificações</p> // exibe se não houver notificações
)}
</div>
)}
</div>
);
}

export default Notificacao;
