import styled from "styled-components";

export const StyledHeader2 = styled.h2`
  font-family: 'Play', sans-serif;
  color: #519a97;
  font-size: 25px;
`;

export const StyledHeader3 = styled.h3`
  font-family: 'Play', sans-serif;
  margin: 25px 0px 10px -120px;
  font-size: 14px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 100px;
  padding: 30px;
`

export const StyledBoxBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e7e7e7;
  opacity: 0.9;
 
  width: 300px;
  margin: 0px 0px 40px 50px;
  padding: 30px;
  border-radius:20px;
  
`

export const StyledInputText = styled.input`
  font-size: 12px;
  height: 30px;
  width: 200px;
  padding-left: 10px;
  border-radius: 8px;
  border:0;
`

export const StyledLink = styled.p`
  font-family: 'Play', sans-serif;
  margin: 20px 0px 10px 3px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`

export const StyledButton = styled.button `
  width: 150px;
  height: 50px;
  font-size: 16px;
  background-color: #78cdca;
  opacity:1.0;
  margin-top: 20px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`

export const DivInfo = styled.div `
  font-family: 'Play', sans-serif;
  margin: 15px 0px 5px 0px;
  font-size: 16px;
`

export const StyledError = styled.div `
  font-family: 'Play', sans-serif;
  margin: 5px 0px 20px 50px;
  font-size: 16px;
  color: red;
`