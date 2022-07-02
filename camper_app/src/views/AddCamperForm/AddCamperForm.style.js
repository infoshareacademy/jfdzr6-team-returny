import styled from "styled-components";

export const StyledHeader1 = styled.h1`
  font-family: 'Play', sans-serif;
  margin: 104px 0px 40px 50px;
  color: #519a97;
  font-size: 50px;
`;

export const StyledHeader2 = styled.h2`
  font-family: 'Play', sans-serif;
  margin: 5px 0px 20px 50px;
  color: #519a97;
  font-size: 30px;
`;

export const StyledBoxBackground = styled.div`
  background-color: rgb(210, 210, 210, 0.8);
  opacity:5;
  box-shadow: 0 2px 5px;
  width: 800px;
  margin: 0px 0px 40px 50px;
  padding: 30px;
  border-radius: 20px;
`

export const StyledInputText = styled.input`
  font-size: 16px;
  height: 40px;
  width: 400px;
  margin: 5px 5px 5px 50px;
  padding-left: 10px;
  
`
export const StyledSelect = styled.select`
  font-size: 16px;
  height: 40px;
  width: 400px;
  margin: 5px 0px 5px 50px;
  padding-left: 10px;

`

export const StyledInputFile = styled.input`
  font-size: 16px;
  font-family: 'Play', sans-serif;
  margin: 5px 0px 20px 50px;
`

export const StyledTextArea = styled.textarea`
  resize: none;
  font-family: 'Play', sans-serif;
  font-size: 14px;
  height: 200px;
  width: 400px;
  margin: 5px 0px 10px 50px;
  padding: 10px;
 
  
`

export const StyledButton = styled.button `
  width: 150px;
  height: 50px;
  font-size: 16px;
  background-color: #78cdca;
  margin-left: 700px;
  margin-bottom: 100px;
  padding:10px 10px 10px 10px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`

export const DivInfo = styled.div `
  font-family: 'Play', sans-serif;
  margin: 5px 0px 20px 50px;
  font-size: 16px;
`

export const StyledError = styled.div `
  font-family: 'Play', sans-serif;
  margin: 5px 0px 20px 50px;
  font-size: 16px;
  color: red;
`