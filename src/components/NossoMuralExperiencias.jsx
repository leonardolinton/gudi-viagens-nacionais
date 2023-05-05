import React from "react";
import "../styles/nossoMuralStyle.scss";

import card1 from "../assets/card_mural_01.png";
import card2 from "../assets/card_mural_02.png";
import card3 from "../assets/card_mural_03.png";
import card4 from "../assets/card_mural_04.png";
import card5 from "../assets/card_mural_05.png";
import card6 from "../assets/card_mural_06.png";

import icon1 from "../assets/icon_01.png";
import icon2 from "../assets/icon_02.png";
import icon3 from "../assets/icon_03.png";
import icon4 from "../assets/icon_04.png";

const NossoMuralExperiencias = () => {
  const muralCards = [
    {
      id: 1,
      img: card1,
    },
    {
      id: 2,
      img: card2,
    },
    {
      id: 3,
      img: card3,
    },
    {
      id: 4,
      img: card4,
    },
    {
      id: 5,
      img: card5,
    },
    {
      id: 6,
      img: card6,
    },
  ];

  return (
    <section className="nossoMural">
      <p>use a hashtag #brasilisverigudi</p>
      <h2>Nosso mural de Experiências</h2>
      <div className="cardsMural">
        {muralCards.map((card) => (
          <figure>
            <img src={card.img} alt={card.id} />
          </figure>
        ))}
      </div>
      <div className="iconsOpcoes">
        <figure className="icon1">
          <img src={icon1} alt="O melhor do Brasil" />
          <p>O melhor do Brasil</p>
        </figure>
        <figure className="icon2">
          <img src={icon2} alt="Cidades mais frequentadas" />
          <p>Cidades mais frequentadas</p>
        </figure>
        <figure className="icon3">
          <img src={icon3} alt="Pontos turísticos" />
          <p>Pontos turísticos</p>
        </figure>
        <figure className="icon4">
          <img src={icon4} alt="Restaurantes" />
          <p>Restaurantes</p>
        </figure>
      </div>
    </section>
  );
};

export default NossoMuralExperiencias;
