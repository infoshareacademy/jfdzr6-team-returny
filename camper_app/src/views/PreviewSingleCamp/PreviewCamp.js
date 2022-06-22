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
            <p>Kategoria: {camper.campertype}</p>
            <p>Rocznik : {camper.year}</p>
            <p>Marka : {camper.brand}</p>
            <p>Ilość osób : {camper.papacity}</p>
            <p>Cena (zł/dzień) : {camper.price}</p>
            <p>Lokalizacja :{camper.location}</p>
          </StyledCampDetails>

          <StyledDescriptionBox>
            <StyledDescription>{camper.description}</StyledDescription>
          </StyledDescriptionBox>

          {context.userData && (
            <StyledContactDetails>
              <StyledContactHead>Dane kontaktowe:</StyledContactHead>
              <p>Telefon: {camper.usertlf}</p>
              <p>E-Mail: {camper.useremail}</p>
            </StyledContactDetails>
          )}

          //tutaj jest komponent z obsluga komentarzy Wszystko co jest w CommentsArea idzie do tego komponentu
          <UsersComments2 camperData={camper} />
        </Wrapper>
      )}

       
  
        <CommentsArea>

          <h2>Komentarze:</h2>

        <StyledComment>
          <h2>Tytuł komentarza</h2>
          <p>autor: jskak@wp.pl</p>
          <p>data: 23/12/2022 </p>
          <hr></hr>
          <p>LoremIpsum</p>
        </StyledComment>
        <StyledComment>
          <h2>Tytuł komentarza</h2>
          <p>autor: jskak@wp.pl</p>
          <p>data: 23/12/2022 </p>
          <hr></hr>
          <p>LoremIpsum</p>
        </StyledComment>
        <StyledComment>
          <h2>Polecam</h2>
          <p>autor: jskak@wp.pl</p>
          <p>data: 23/12/2022 </p>
          <hr></hr>
          <p>Fajny kamper, idealny na dłuższe trasy</p>
        </StyledComment>
        <StyledComment>
          <h2>Tytuł komentarza</h2>
          <p>autor: jskak@wp.pl</p>
          <p>data: 23/12/2022 </p>
          <hr></hr>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </StyledComment>

        
        <StyledInputTextCom
                    name="comment"
                    type="text"
                    placeholder="Dodaj komentarz"
                    maxLength="120"
                  />


        <StyledButtonCom>Dodaj komentarz</StyledButtonCom>

        </CommentsArea>

    
      
    

    </>
  );
}



