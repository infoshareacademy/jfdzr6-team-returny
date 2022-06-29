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
  StyledEditButton,
  ButtonsSection,
  StyledCalendar,
  StyledCalendarDiv,
  StyledCalendarDiv2,
 
} from "./PreviewCamp.style";
import { getCamperById } from "../../api/geCamperById";
import { UsersComments2 } from "../../components/UsersComments2";
import { Calendar } from "../../components/calendar/Calendar";
import MyGallery from "../../components/MyGallery";
import { FaGripVertical, FaTruck, FaTasks, FaCalendarAlt, FaMoneyCheckAlt, FaRegTrashAlt, FaPencilAlt, FaRegMap, FaShuttleVan, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

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
            <h2> {camper.title}</h2>
          </CampTitle>

          <MyGallery camper={camper} />

          <ButtonsSection>
            <StyledEditButton>
              <FaPencilAlt />  Edytuj ogłoszenie
            </StyledEditButton>
            <StyledEditButton>
              <FaRegTrashAlt />   Usuń ogłoszenie
            </StyledEditButton>
          </ButtonsSection>

          <StyledCampDetails>
            <h2><FaShuttleVan /> O camperze:</h2>
            <p><FaGripVertical /> Kategoria: {camper.campertype}</p>
            <p><FaCalendarAlt /> Rocznik : {camper.year}</p>
            <p><FaTruck /> Marka : {camper.brand}</p>
            <p><FaTasks /> Ilość osób : {camper.papacity}</p>
            <p><FaMoneyCheckAlt /> Cena (zł/dzień) : {camper.price}</p>
            <p><FaRegMap /> Lokalizacja :{camper.location}</p>
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
              <p><FaPhoneAlt /> Telefon: {camper.usertlf}</p>
              <p><FaEnvelope /> E-Mail: {camper.useremail}</p>
            </StyledContactDetails>
          )}
          

        <StyledCalendarDiv>
          <StyledCalendar>
          <Calendar camper={camper} user={context.userData} />
          </StyledCalendar>       
        </StyledCalendarDiv>


          <UsersComments2 camperData={camper} />

            
          

        </Wrapper>
      


      )}


<div className="StyledCalendarDiv2">

  test

</div>


    </>
  );
}


