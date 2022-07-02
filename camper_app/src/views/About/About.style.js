import styled from "styled-components";
import BackgroundCar from "../../assets/camper.jpg";

export const StyledAboutSection = styled.section`
  display: flex;
  background: url(${BackgroundCar});
  font-family: "Play", sans-serif;
  height: 90%;
  width: 100%;
`;

export const StyledSquareDiv = styled.div`
  background: rgb(210, 210, 210, 0.8);
  margin: 80px;
  padding: 20px;
  border-radius: 15px;
  width: 50vw;
  height: 70%;
`;

export const StyledHeader = styled.h1`
  margin: 20px;
  font-size: 40px;
`;

export const StyledParagraphs = styled.div`
  margin: 20px;
  width: 76%;
  font-size: 20px;
`;

export const StyledParagraphs2 = styled.div`
  margin-left: 20px;
  margin-bottom: -15px;
  width: 76%;
  font-size: 21px;
  text-decoration: underline;
`;

export const StyledParagraphs3 = styled.div`
  margin-left: 20px;
  margin-bottom: -15px;
  width: 76%;
  font-size: 21px;
  text-decoration: underline;
`;

export const StyledParagraphs1 = styled.div`
  margin: 22px;
  width: 76%;
  font-size: 23px;
  font-weight: bold;
`;
