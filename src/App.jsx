import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
}

body{
  background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");
  
}
`;

const Titulo = styled.h1`
  text-align: center;
  color: white;
  font-family: "Sevillana", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 60px;
`;

export default function App() {
  const [lampada, setLampada] = useState(false);
  const trocarLampada = () => {
    setLampada(!lampada);
    
  };

  const Img = styled.img `
  border: red solid;
  margin-left: 30%;
  height: 80vh;
  `


  const Button = styled.button`
  border: green solid;
    width: 18vw;
    height: 8vh;
    color: white;
    font-size: 30px;
    font-family: "Sevillana", cursive;
    background-color: #007bff;
    border-radius: 20px;
    margin-left: 40%;
  `;

  return (
    <main>
      <GlobalStyle />
      <Titulo>
        "Liberte a magia da programação com a Lâmpada de Alladin".
      </Titulo>
      <Img
        src={
          lampada
            ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
            : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
        }
        alt="Lâmpada"
        onClick={trocarLampada}
      />
      <Button>Clique na lâmpada</Button>;
    </main>
  );
}
