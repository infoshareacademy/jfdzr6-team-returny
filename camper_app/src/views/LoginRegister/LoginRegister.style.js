import styled from "styled-components";

export const StyledHeader2 = styled.h2`
  font-family: 'Play', sans-serif;
  color: #519a97;
  font-size: 30px;
`;

export const StyledHeader3 = styled.h3`
  font-family: 'Play', sans-serif;
  margin: 25px 0px 10px 3px;
  font-size: 20px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  padding: 30px;
`

export const StyledBoxBackground = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: rgb(210, 210, 210);
  box-shadow: 0 2px 5px;
  width: 300px;
  margin: 0px 0px 40px 50px;
  padding: 30px;
`

export const StyledInputText = styled.input`
  font-size: 16px;
  height: 30px;
  width: 200px;
  padding-left: 10px;
  border-radius: 8px;
  border: 1px solid black;
`
// export const StyledSelect = styled.select`
//   font-size: 16px;
//   height: 40px;
//   width: 400px;
//   margin: 5px 0px 5px 50px;
//   padding-left: 10px;
//   border-radius: 8px;
//   border: 1px solid black;
// `

// export const StyledInputFile = styled.input`
//   font-size: 16px;
//   font-family: 'Play', sans-serif;
//   margin: 5px 0px 20px 50px;
// `

// export const StyledTextArea = styled.textarea`
//   resize: none;
//   font-family: 'Play', sans-serif;
//   font-size: 20px;
//   height: 200px;
//   width: 400px;
//   margin: 5px 0px 10px 50px;
//   padding: 10px;
//   border-radius: 8px;
//   border: 1px solid black;
// `

export const StyledButton = styled.button `
  width: 150px;
  height: 50px;
  font-size: 16px;
  background-color: #78cdca;
  margin-top: 20px;
  padding: 5px;
  cursor: pointer;
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