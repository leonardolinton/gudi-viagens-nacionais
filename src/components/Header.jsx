import React from "react";
import logo from "../assets/logo.png";
import "../styles/headerStyle.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#"><img src={logo} alt="Logo Gudi" /></a>
        </div>
        <input type="checkbox" id="checkbox" className="checkbox" />
        <label htmlFor="checkbox" className="labelMenu">
          <span className="hamburguer"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Benefícios</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <a href="#" className="optActive">Agendar</a>
          </li>
        </ul>
      </nav>
      <div className="banner">
        <h1>Para qual estado você deseja ir?</h1>
        <input type="text" placeholder="Pesquisar" />
        <button type="submit">buscar</button>
      </div>
    </header>
  );
};

export default Header;
