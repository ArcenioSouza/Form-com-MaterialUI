import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
   width: 100%;
   height: 100vh;
   background-color: #bdbdbd89;
   display: flex;
   justify-content: center;
   align-items: center;
`

const Form = styled.div `
   width: 85%;
   height: 80vh;
   background-color: #fff;   
   border: 2px solid #000;
   border-radius: 15px;
   box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
   font-family: var(--font-text);
   padding: 10px;
`

const Span = styled.span `
   margin-left: 10px;
   color: #ffd000;
   font-size: 40px;
   font-family: var(--font-title);
   letter-spacing: 2px;
`

const Home = () => {
   return (
      <Container>
         <Form>
            <div>
               <h1>Se inscreva e faça parte da família<Span>RESÍLIA</Span></h1>
               <p>Vamos ajudar você a trilhar seu caminho pelo mundo da tecnologia</p>
               <p>basta preencher esse formulário que entraremos em contato.</p>
            </div>            
            <img src='./assets/img/imageForm.png' alt="ImageForm" />
                        
         </Form>
      </Container>
   )
}

export default Home
