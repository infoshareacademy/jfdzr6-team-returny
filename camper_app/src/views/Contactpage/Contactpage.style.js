import styled from "styled-components";
import BackgroundCar from "../../assets/camper.jpg";

export const StyledContactSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: url(${BackgroundCar});
  font-family: "Play", sans-serif;
`;

export const StyledEmailSection = styled.section`
  background: rgb(210, 210, 210, 0.65);
  margin: 10px 10px 10px 10px;
  padding: 20px;
  border-radius: 15px;
  width: 40%;
  font-family: "Play", sans-serif;
`;

export const StyledMapDetails = styled.section`
  background: rgb(210, 210, 210, 0.65);
  margin: 20px 20px;
  padding: 20px;
  border-radius: 15px;
  width: 422px;
  height: 593px;
`;

export const StyledFormHeader = styled.h1`
  margin: 20px 20px;
  font-family: "Play", sans-serif;
  font-size: 30px;
`;

export const StyledMap = styled.div`

  font-family: "Play", sans-serif;
  font-size: 30px;
  margin: -10px;

`;

export const StyledContactHeader = styled.h1`
  display: flex;
  justify-content: center;
  margin: auto 20px;
  font-family: "Play", sans-serif;
  font-size: 26px;
`;

export const StyledTextArea = styled.textarea`
  resize: none;
  width: 400px;
  padding: 15px;
  border-radius: 15px;
  height: 200px;
  font-family: "Play", sans-serif;
  border: 0;
`;

export const StyledFormElements = styled.div`
  padding: 10px;
  margin: auto 10px;
`;

export const StyledInput = styled.input`
  width: 250px;
  padding: 15px;
  border-radius: 15px;
  font-family: "Play", sans-serif;
  border: 0;
`;

export const StyledFormButton = styled.button`
  margin-left: 15px;
  width: 90px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
export const StyledList = styled.ul`
  width: 250px;
  padding: 15px;
  border-radius: 15px;
  font-family: "Play", sans-serif;
  margin-top: 20px;
  border: 0;
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export const StyledLists = styled.li`
  list-style-type: none;
  width: 250px;
  padding: 20px;
  font-family: "Play", sans-serif;
  border: 0;
`;

export const StyledListsAddress = styled.li`
  font-family: "Play", sans-serif;
  list-style-type: none;
  padding: 20px;
  display: flex;
  width: 300px;
  height: auto;
`;

export const StyledListsMap = styled.li`
  font-family: "Play", sans-serif;
  list-style-type: none;
  padding: 20px;
  display: flex;
  width: 300px;
  height: auto;
`;
