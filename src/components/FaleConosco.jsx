import React from "react";
import "../styles/FaleConoscoStyle.scss";

const FaleConosco = () => {
  return (
    <section className="sectionFaleConosco">
      <h2>Fale conosco</h2>
      <form action="/pagina-processa-dados-do-form" method="post">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Diga o seu melhor email"
        />
        <input type="text" name="assunto" id="assunto" placeholder="Assunto" />
        <textarea
          name="mensagem"
          id="mensagem"
          rows="5"
          placeholder="Escreva a sua mensagem"
        ></textarea>
        <button type="submit">ENVIAR</button>
      </form>
    </section>
  );
};

export default FaleConosco;
