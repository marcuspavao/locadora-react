import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./views/Contato";
import CadastroCliente from "./views/CadastroCliente";
import CadastroLocadora from "./views/CadastroLocadora";
import MainPage from "./views/MainPage";
import Duvidas from "./views/Duvidas";
import CadastroVeiculos from "./views/CadastroVeiculos";
import TodasReservas from "./views/TodasReservas";
import AtualizarPerfil from "./views/AtualizarPerfil";
import Login from "./views/Login";
import HistoricoReservasView from "./views/HistoricoReservasView";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cadastrocliente" element={<CadastroCliente />} />
        <Route path="/atualizar" element={<AtualizarPerfil />} />
        <Route path="/cadastrolocadora" element={<CadastroLocadora />} />
        <Route path="/cadastroveiculos" element={<CadastroVeiculos />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route path="/todasreservas" element={<TodasReservas />} />
        <Route path="/historicoreservas" element={<HistoricoReservasView />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
