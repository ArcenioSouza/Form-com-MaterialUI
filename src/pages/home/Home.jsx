import React from "react";
import styled from "styled-components";
import LandingPage from "../../components/landing/Landing";
import Form from "../../components/form/Form";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffd0005e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {

  const [isForm, setIsForm] = useState(false);

  return (
    <Container>
      {isForm ? <Form setIsForm={setIsForm} /> : <LandingPage setIsForm={setIsForm} />}
    </Container>
  );
};

export default Home;
