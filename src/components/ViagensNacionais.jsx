import React from "react";
import "../styles/viagensNacionaisStyle.scss";
import banner01 from "../assets/banner_viagens_01.png";
import banner02 from "../assets/banner_viagens_02.png";
import banner03 from "../assets/banner_viagens_03.png";
import card01 from "../assets/card_viagem_01.png";
import card02 from "../assets/card_viagem_02.png";
import card03 from "../assets/card_viagem_03.png";
import card04 from "../assets/card_viagem_04.png";

const ViagensNacionais = () => {

  const viagensCards = [
    {
      id: 1,
      nome: "rio de janeiro",
      img: card01
    },
    {
      id: 2,
      nome: "rio das ostras",
      img: card02
    },
    {
      id: 3,
      nome: "caldas novas",
      img: card03
    },
    {
      id: 4,
      nome: "amazônia",
      img: card04
    }
  ];

  return (
      <section className="sectionViagensNacionais">
        <div className="banner01">
          <div className="bannerImg">
            <img src={banner01} alt="Banner 01" />
          </div>
          <div className="bannerText">
            <span>viagens nacionais</span>
            <h2>O clima perfeito, no lugar perfeito</h2>
            <p>
              Planeje sua viagem com a sua paquera, compartilhar momentos
              preciosos juntos não tem preço.
            </p>
            <button className="btn1">agendar</button>
          </div>
        </div>
        <div className="banner02">
          <div className="bannerImg">
            <img src={banner02} alt="Banner 02" />
          </div>
          <div className="bannerText">
            <span>viagens nacionais</span>
            <h2>Curta uma nova vibe entre amigos</h2>
            <p>
            Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos Planos Multi.
            </p>
            <button className="btn2">agendar</button>
          </div>
        </div>
        <div className="banner03">
          <div className="bannerImg">
            <img src={banner03} alt="Banner 03" />
          </div>
          <div className="bannerText">
            <span>viagens nacionais</span>
            <h2>Algumas experiências são inexplicáveis</h2>
            <p>
              Conheça as fontes termais de Caldas Novas, Goiás. Águas quentes, num clima sereno, relaxante e natural.
            </p>
            <button className="btn1">agendar</button>
          </div>
        </div>
        <div className="cardsViagem">
          {viagensCards.map((card) => 
            <figure className="card">
              <img src={card.img} alt={card.id} />
              <button>{card.nome}</button>
            </figure>
          )}
        </div>
      </section>
  );
};

export default ViagensNacionais;
