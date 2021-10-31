import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Landing = styled.div`  
  padding: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  div h1 {
    font-size: 48px;
    text-align: center;
  }

  div h2 {
    font-size: 40px;
    padding: 15px;
    text-align: center;
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
    font-size: 30px;
    margin-top: 40px;

    p{
      padding-top: 20px;
    }

    Button{
      margin-top: 25px;
      width: 500px;
    }
  }

  img{
      position: static;
      width: 600px;
      height: 350px;
  }
`;

const Span = styled.span`
  margin-left: 10px;
  color: #ffd000;
  font-size: 50px;
  font-family: var(--font-title);
  letter-spacing: 2px;
  text-shadow: 2px 2px 8px #424242;
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
