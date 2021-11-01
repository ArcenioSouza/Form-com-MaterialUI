import React from "react";
import styled from "styled-components";
import LandingPage from "../../components/landing/Landing";
import Form from "../../components/form/Form";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffd000;
`;

const Card = styled.div `
  width: 95%;
  height: 90vh;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 38px #424242, 0 10px 38px #424242;
  font-family: var(--font-text);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Home = () => {
  const [isForm, setIsForm] = useState(false);

  return (
    <Container>
      <Card>
        {isForm ? <Form setIsForm={setIsForm} /> : <LandingPage setIsForm={setIsForm} />}
      </Card>
    </Container>
  );
};

export default Home;
