import styled from "styled-components";

export const StyledHeader1 = styled.h1`
  font-family: 'Play', sans-serif;
  margin: 40px 0px 20px 150px;
  color: black;
  font-size: 50px;
`;

export const StyledWrapper = styled.div`
  margin: 50px 20px 20px 150px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(1, 100%);
  gap: 3rem;
  justify-items: left;
  min-height:400px ;
  font-family: 'Play', sans-serif;
`

export const StyledCard = styled.div`
  padding: 10px;
  background-color: white;
  overflow: hidden;
  box-shadow: 0 2px 5px;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  font-family: 'Play', sans-serif;
  border-radius: 20px;
`

export const StyledImg = styled.img`
  width: 300px;
  border-radius: 20px;
`

export const StyledText = styled.div`
  width: 400px;
`

export const StyledButton = styled.button`
  padding: 10px 10px 10px 10px;
  width: 100px;
  height: 50px;
  font-family: 'Play', sans-serif;
  font-weight: bold;
  font-size: small;
  margin: 8px 14px 12px 15px;
  border: 2px;
  cursor: pointer;
  /* &:hover {
    transform: scale(1.1); */
  }
`