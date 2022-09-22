import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Cadastro } from "../pages/Cadastro";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivatePage from "../pages/PrivatePage";

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Cadastro />} />
      <Route path="/private" element={<PrivatePage />} />
    </Routes>
  );
};
export default memo(RoutesPage);
