import styled from "styled-components";

export const StyledHeader = styled.h2`
  text-align: center;
  margin: 20px;
  font-size: 30px;
`;

export const StyledWrapper = styled.div`
  background-color: lightgrey;
  width: 490px;
  margin: 0 auto;
  padding: 20px;
`;

export const CenteredDiv = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const StyledButton = styled.button `
  font-size: 16px;
  background-color: #78cdca;
  margin-left: 700px;
  margin-bottom: 100px;
  cursor: pointer;
  &:hover {
  color: white;
  }
`

export const YourRes = styled.div`
  font-size: 15px;
  margin: auto 0;
  box-shadow: 0 1px 3px;
  padding: 20px;
  width: auto;
  line-height: 1.8;
`;

