import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import {
  StyledDescriptionBox,
  StyledDescription,
  Wrapper,
  StyledCampImg,
  CampTitle,
  StyledContactDetails,
  StyledContactHead,
  StyledCampDetails,
  CommentsArea,
  StyledButtonCom,
  StyledInputTextCom,
  StyledComment, 
} from "./PreviewCamp.style";
import { getCamperById } from "../../api/geCamperById";
import { UsersComments2 } from "../../components/UsersComments2";
import { StyledButton } from "../AddCamperForm/AddCamperForm.style";



export function PreviewCamp() {
  const [camper, setCamper] = useState();
  const params = useParams();
  const { id } = params;
  const context = useContext(UserContext);
  useEffect(() => {
    getCamperById(id)
      .then((data) => {
        setCamper(data);
      })
      .catch((er) => console.log(er));
  }, []);

  return (
    <>
      {camper && (
        <Wrapper>

          <CampTitle>
            <h2>{camper.title}</h2>
          </CampTitle>

          <StyledCampImg>
            {camper.images.map((el, index) => (
              <img
                key={index}
                src={camper.images[index]}
                alt="Tutaj jest camper"
              />
            ))}
          </StyledCampImg>

          <StyledCampDetails>
            <h2>O camperze:</h2>
            <p>Kategoria: {camper.campertype}</p>
            <p>Rocznik : {camper.year}</p>
            <p>Marka : {camper.brand}</p>
            <p>Ilość osób : {camper.papacity}</p>
            <p>Cena (zł/dzień) : {camper.price}</p>
            <p>Lokalizacja :{camper.location}</p>
          </StyledCampDetails>

          <StyledDescriptionBox>
            <StyledDescription>
            <h2>Opis:</h2>
              {camper.description}</StyledDescription>
          </StyledDescriptionBox>

          {context.userData && (
            <StyledContactDetails>
              <StyledContactHead><h2>Dane kontaktowe:</h2></StyledContactHead>
              <p>Telefon: {camper.usertlf}</p>
              <p>E-Mail: {camper.useremail}</p>
            </StyledContactDetails>
          )}

         
          <UsersComments2 camperData={camper} /> 
        </Wrapper>
      )}
    

    </>
  );
}



