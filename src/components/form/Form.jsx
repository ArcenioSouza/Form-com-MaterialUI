import React from "react";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";
import background from '../../assets/img/background.png'

const Container = styled.div`
  width: 85%;
  height: 90vh;
  font-family: var(--font-text);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .background{
    position: absolute;
    width: 300px;
    height: 89.5vh;
    top: 50px;
    right: 50px;    

    img{
      width: 100%;
      height: 100%;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px ;
    }
  }

  h1 {
    font-size: 48px;
    text-align: center;

    @media(max-width: 556px){
        font-size: 32px;
    }

    @media(max-width: 376px){
        font-size: 24px;
    }
  }

  h2 {
    color: #ffd000;
    padding-top: 5px;
    font-size: 40px;
    font-family: var(--font-title);
    text-shadow: 0 5px 20px #424242;

    @media(max-width: 556px){
        font-size: 22px;
    }

    @media(max-width: 376px){
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
    <Container>
      <div className="background"><img src={background} alt="imagemback" /></div>
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
      <div className="background"></div>
    </Container>
  );
};

export default Form;
