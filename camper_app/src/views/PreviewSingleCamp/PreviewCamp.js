import { useEffect, useState, useContext } from "react";
import { useParams,useNavigate } from "react-router-dom";
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
  StyledEditButton,
  ButtonsSection,
} from "./PreviewCamp.style";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { getCamperById } from "../../api/geCamperById";
import { deleteCamper } from "../../api/deleteCamper";
import { UsersComments2 } from "../../components/UsersComments2";
import { Calendar } from "../../components/calendar/Calendar";
import MyGallery from "../../components/MyGallery";

export function PreviewCamp() {
  const [camper, setCamper] = useState();
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const context = useContext(UserContext);
  useEffect(() => {
    getCamperById(id)
      .then((data) => {
        setCamper(data);
      })
      .catch((er) => console.log(er));
  }, []);
function deleteCamperHandler(id){

  deleteCamper(id).then(res=>{
    NotificationManager.success("Kamper został usunięty");
    navigate('/find-camper')
  }).catch(er=>{
    NotificationManager.error("Coś poszło nie tak");
    console.log(er)})

}
  return (
    <>
      {camper && (
        <Wrapper>

          <CampTitle>
            <h2>{camper.title}</h2>
          </CampTitle>

          <MyGallery camper={camper} />

          <ButtonsSection>
            <StyledEditButton>
              Edytuj ogłoszenie
            </StyledEditButton>
            <StyledEditButton onClick={()=>deleteCamperHandler(id)}>
              Usuń ogłoszenie
            </StyledEditButton>
          </ButtonsSection>

          <StyledCampDetails>
            <h2>O camperze:</h2>
            <p>Kategoria: {camper.campertype}</p>
            <p>Rocznik : {camper.year}</p> 
            <p>Marka : {camper.brand}</p>
            <p>Ilość osób : {camper.papacity}</p>
            <p>Cena (zł/dzień) : {camper.price}</p>
            <p>Miasto : {camper.city}</p>
            <p>Lokalizacja : {camper.location}</p>
          </StyledCampDetails>

          <StyledDescriptionBox>
            <StyledDescription>
              <h2>Opis:</h2>
              {camper.description}
            </StyledDescription>
          </StyledDescriptionBox>

          {context.userData && (
            <StyledContactDetails>
              <StyledContactHead>
                <h2>Dane kontaktowe:</h2>
              </StyledContactHead>
              <p>Telefon: {camper.usertlf}</p>
              <p>E-Mail: {camper.useremail}</p>
            </StyledContactDetails>
          )}

          <Calendar camper={camper} user={context.userData} />

          <UsersComments2 camperData={camper} />
        </Wrapper>
      )}
    </>
  );
}
