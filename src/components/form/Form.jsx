import React from "react";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

const Container = styled.div`
  width: 95%;
  height: 90vh;
  position: absolute;
  top: 80px;
  font-family: var(--font-text);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 48px;
    text-align: center;

    @media (max-width: 556px) {
      font-size: 32px;
    }

    @media (max-width: 376px) {
      font-size: 24px;
    }
  }

  h2 {
    color: #ffd000;
    padding-top: 5px;
    font-size: 40px;
    font-family: var(--font-title);
    text-shadow: 0 5px 20px #424242;

    @media (max-width: 556px) {
      font-size: 22px;
    }

    @media (max-width: 376px) {
      font-size: 14px;
    }
  }
`;

const WrapperInputs = styled.div`
  width: 95%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`;

const Form = ({ setIsForm }) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffd700"
          fill-opacity="1"
          d="M0,192L26.7,170.7C53.3,149,107,107,160,122.7C213.3,139,267,213,320,229.3C373.3,245,427,203,480,192C533.3,181,587,203,640,202.7C693.3,203,747,181,800,170.7C853.3,160,907,160,960,144C1013.3,128,1067,96,1120,96C1173.3,96,1227,128,1280,149.3C1333.3,171,1387,181,1413,186.7L1440,192L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
      <Container>
        <h1>Processo seletivo</h1>
        <h2>RESÍLIA 2021</h2>
        <br />
        <WrapperInputs>
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            placeholder="Digite seu nome completo"
            fullWidth
          />
        </WrapperInputs>
        <WrapperInputs>
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            placeholder="exemplo@exemplo.com"
            fullWidth
          />
        </WrapperInputs>
        <WrapperInputs>
          <TextField
            id="outlined-basic"
            label="Telefone celular"
            variant="outlined"
            placeholder="11983473336"
            fullWidth
          />
        </WrapperInputs>
        <WrapperInputs>
          <TextField
            id="outlined-basic"
            label="Data de Nascimento"
            variant="outlined"
            placeholder="25/12/2000"
            fullWidth
          />
        </WrapperInputs>

        <Button
          variant="outlined"
          color="primary"
          onClick={() => setIsForm(false)}
        >
          Enviar informações
        </Button>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffd700"
          fill-opacity="1"
          d="M0,192L26.7,170.7C53.3,149,107,107,160,122.7C213.3,139,267,213,320,229.3C373.3,245,427,203,480,192C533.3,181,587,203,640,202.7C693.3,203,747,181,800,170.7C853.3,160,907,160,960,144C1013.3,128,1067,96,1120,96C1173.3,96,1227,128,1280,149.3C1333.3,171,1387,181,1413,186.7L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default Form;
