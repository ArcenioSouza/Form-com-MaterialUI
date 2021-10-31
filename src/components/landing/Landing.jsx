import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Landing = styled.div`
  padding: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 456px) {
    padding: 10px;
  }

  div h1 {
    font-size: 48px;
    text-align: center;

    @media (max-width: 800px) {
      font-size: 30px;
    }

    @media (max-width: 456px) {
      font-size: 1.3rem;
      padding: 10px;
    }
  }

  div h2 {
    font-size: 40px;
    padding: 15px;
    text-align: center;

    @media (max-width: 800px) {
      font-size: 20px;
    }

    @media (max-width: 456px) {
      font-size: 1rem;
    }
  }

  .wrapper {
    display: flex;
    padding: 10px;
  }

  .wrapper-paragraph {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 1.7em;
    margin-top: 40px;

    @media (max-width: 956px) {
      font-size: 20px;
    }

    @media (max-width: 456px) {
      margin-top: 10px;
      font-size: 1rem;
    }
  }

  p {
    padding-top: 20px;
  }

  Button {
    margin-top: 25px;
    width: 500px;

    @media (max-width: 956px) {
      width: 200px;
    }
  }

  img {
    position: static;
    bottom: 0;
    width: 600px;
    height: 350px;

    @media (max-width: 956px) {
      width: 500px;
      height: 250px;
    }

    @media (max-width: 725px) {
      display: none;
    }
  }
`;

const Span = styled.span`
  margin-left: 10px;
  color: #ffd000;
  font-size: 50px;
  font-family: var(--font-title);
  letter-spacing: 2px;
  text-shadow: 2px 2px 8px #424242;

  @media (max-width: 486px) {
    font-size: 1.5em;
  }
`;

const LandingPage = ({ setIsForm }) => {
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
        <div className="wrapper">
          <div className="wrapper-paragraph">
            <p>
              Em seis meses você estará dominando as skills necessárias para
              conseguir sua sonhada oportunidade no mercado de trabalho.
            </p>
            <p>
              Se inscreva em uma de nossas trilhas
              <br />
              <strong>Formação WebDev Full Stack</strong>
              <br />
              <strong>Formação em Data Analytics</strong>
            </p>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setIsForm(true)}
            >
              Fazer Inscrição
            </Button>
          </div>
          <img
            src="https://i.pinimg.com/564x/7b/f9/f7/7bf9f782cdf21b0ed3c74865bef0c4ec.jpg"
            alt="imagemFundo"
          />
        </div>
      </div>
    </Landing>
  );
};

export default LandingPage;
