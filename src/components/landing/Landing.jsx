import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Landing = styled.div`
  width: 85%;
  height: 80vh;
  background-color: #eeebeb;
  border-radius: 15px;
  box-shadow: 0 10px 38px #424242, 0 10px 38px #424242;
  font-family: var(--font-text);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 2;

  div h1 {
    font-size: 48px;
  }

  div h2 {
    font-size: 30px;
    padding: 15px;
  }

  div p {
    margin-right: 400px;
    margin-top: 50px;
    padding-bottom: 40px;
    font-size: 20px;
  }

  Button {
    margin-right: 400px;
    width: 250px;
    font-size: 20px;
    font-family: var(--font-text);
    font-weight: 600;
  }

  div .wrapper{
    display: flex;
  }

  div .wrapper .wrapper-paragraph{
    width: 30%;
  }
  div .wrapper .wrapper-image{
    width: 30%;
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
          <div className="wraper-paragraph">
            <p>
              Em seis meses você estará dominando as skills necessárias para
              conseguir sua sonhada oportunidade no mercado de trabalho.
              <br />
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
        </div>
        <div className="wrapper-image">
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
