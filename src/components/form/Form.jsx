import React from "react";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

const Container = styled.div`
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
  justify-content: center;

  h1 {
    font-size: 48px;
  }

  h2 {
    color: #ffd000;
    padding-top: 5px;
    font-size: 40px;
    font-family: var(--font-title);
    text-shadow: 0 5px 20px #424242;
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
  );
};

export default Form;
