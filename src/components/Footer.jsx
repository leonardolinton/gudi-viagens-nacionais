import React from "react";
import "../styles/footerStyle.scss";
import logo from "../assets/logo.png" 


const Footer = () => {
    return(
        <footer className="sectionFooter">
            <ul>
                <div className="footerLogo"><img src={logo} alt="Logo Gudi - Viagens Nacionais" /></div>
                <li>Sobre nós</li>
                <li>Mural de memórias</li>
                <li>Eventos Gudi</li>
                <li>Nosso blog</li>
            </ul>
            <ul>
                <h3>Contato</h3>
                <li>Chat Virtual</li>
                <li>SAC Online</li>
                <li>Ouvidoria</li>
                <li>FAQ</li>
            </ul>
            <ul>
                <h3>Benefícios</h3>
                <li>Conta digital Gudi</li>
                <li>Viaje com Milhas</li>
                <li>C6 Átomos</li>
                <li>iD Jovem</li>
            </ul>
            <ul>
                <h3>Lugares</h3>
                <li>O melhor do Brasil</li>
                <li>Cidade frequentes</li>
                <li>Pontos turísticos</li>
                <li>Restaurantes</li>
            </ul>
            <ul>
                <h3>Curiosidades</h3>
                <li>Cultura e tradições</li>
                <li>Pratos típicos</li>
                <li>Mitos brasileiros</li>
                <li>Carnaval</li>
            </ul>
        </footer>
    )
}

export default Footer;