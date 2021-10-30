import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Landing = styled.div`
  width: 85%;
  height: 80vh;
  background-image: url("https://st4.depositphotos.com/10109696/i/600/depositphotos_202495796-stock-photo-grey-metal-texture-wall-abstract.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid #424242;
  border-radius: 15px;
  box-shadow: 0 10px 38px #424242, 0 10px 38px #424242;
  font-family: var(--font-text);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  div h1 {
    font-size: 48px;
  }

  div h2 {
    font-size: 30px;
    padding: 15px;
  }

  div p {
    padding-bottom: 40px;
    font-size: 20px;
  }

  Button {
    width: 250px;
    font-size: 20px;
    font-family: var(--font-text);
    font-weight: 600;
  }
`;

const Span = styled.span`
  margin-left: 10px;
  color: #ffd000;
  font-size: 50px;
  font-family: var(--font-title);
  letter-spacing: 2px;
  text-shadow: 0 5px 20px #424242;
`;

const LandingPage = ({setIsForm}) => {
  return (
    <Landing>
      <div>
        <h1>INSCRIÇÕES ABERTAS PARA TURMAS DE DEZEMBRO DE 2021</h1>
        <br />
        <br />
        <h2>
          Se inscreva e faça parte da família
          <br />
          <Span>RESÍLIA</Span>
        </h2>
        <p>
          Vamos ajudar você a trilhar seu caminho pelo mundo da tecnologia
          <br />
          basta deixar suas informações que entraremos em contato.
        </p>
      </div>
      <Button variant="outlined" color="primary" onClick={() => setIsForm(true)}>
        Fazer Inscrição
      </Button>
    </Landing>
  );
};

export default LandingPage;
