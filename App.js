import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/Login"; // Importa o componente Login
import Notificacao from "./components/Notificacao"; // Importa o componente Notificacao

function App() {
return (
<BrowserRouter>
<Routes>

{/* Rota para o Login */}
<Route path="/" element={<Login />} />

{/* Rota para as Notificações */}
<Route path="/notificacao" element={<Notificacao />} />

</Routes>
</BrowserRouter>
);
}

export default App;
