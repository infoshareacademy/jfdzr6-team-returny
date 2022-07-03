import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  StyledButtonEdit,
  StyledTextArea,
  StyledPriceArea,
  StyledButton


 
} from "./PreviewCamp.style";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { getCamperById } from "../../api/geCamperById";
import { deleteCamper } from "../../api/deleteCamper";
import { updateCamper } from "../../api/updateCamper";
import { UsersComments2 } from "../../components/UsersComments2";
import { Calendar } from "../../components/calendar/Calendar";
import MyGallery from "../../components/MyGallery";
import { FaMapMarkerAlt, FaGripVertical, FaTruck, FaTasks, FaCalendarAlt, FaMoneyCheckAlt, FaRegTrashAlt, FaPencilAlt, FaRegMap, FaShuttleVan, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export function PreviewCamp() {
  const [camper, setCamper] = useState();
  const [isEdit, setisEdit] = useState(false);
  const [newPrice, setNewPrice] = useState("");
  const [newDescription, setnewDescription] = useState("");

  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const context = useContext(UserContext);

  useEffect(() => {
    getCamperById(id)
      .then((data) => {
        setCamper(data);
        setNewPrice(data.price);
        setnewDescription(data.description);

      })
      .catch((er) => console.log(er));
  }, []);

  function deleteCamperHandler(id) {
    deleteCamper(id)
      .then((res) => {
        NotificationManager.success("Kamper został usunięty");
        navigate("/find-camper");
      })
      .catch((er) => {
        NotificationManager.error("Coś poszło nie tak");
        console.log(er);
      });
  }

  function handleChangePrice(e) {
    setNewPrice(e.target.value);
  }

  function handleChangeDescription(e) {
    setnewDescription(e.target.value);
  }
  function handleSubmitChange(e) {
    e.preventDefault();
    updateCamper(id, newPrice, newDescription)
      .then((res) => {
        getCamperById(id)
          .then((data) => {
            setCamper(data);
          })
          .catch((er) => console.log(er));
        NotificationManager.success("Kamper został zaktualizowany");
        setisEdit(false);
      })
      .catch((er) => NotificationManager.error("Coś poszło nie tak"));
  }
  return (
    <>

    
      {camper && (





        <Wrapper>
          <CampTitle>
            <h2> {camper.title}  <hr></hr> </h2>
          </CampTitle>
         
          <MyGallery camper={camper} />

         
          {context.userData.id === camper.userid && (
            <ButtonsSection>
              <StyledEditButton onClick={() => setisEdit(true)}>
              <FaPencilAlt/> Edytuj ogłoszenie
              </StyledEditButton>
              <StyledEditButton onClick={() => deleteCamperHandler(id)}>
              <FaRegTrashAlt/> Usuń ogłoszenie
              </StyledEditButton>
            </ButtonsSection>
          )}
          {isEdit ? (
            <StyledCampDetails>
              <form onSubmit={handleSubmitChange}>
                <div>
                  <h1>Cena:</h1>
                  <StyledPriceArea
                    value={newPrice}
                    onChange={handleChangePrice}
                    placeholder="Zmień cene"
                    required
                  />
                </div>
                <div>
                  <h1>Opis:</h1>
                  <StyledTextArea
                    value={newDescription}
                    onChange={handleChangeDescription}
                    placeholder="Zmień opis"
                    required
                  />
                </div>
                <StyledButton type="submit">Zapisz</StyledButton>
                
              
                
                <StyledButton
                  onClick={(e) => {
                    e.preventDefault();
                    setisEdit(false);
                  }}
                >
                  Anuluj
                </StyledButton>
              </form>
            </StyledCampDetails>
          ) : null}

          <StyledCampDetails>
            <h2> O Camperze:</h2>
            <hr></hr>
            <p><FaGripVertical /> Kategoria: {camper.campertype}</p>
            <p><FaCalendarAlt /> Rocznik: {camper.year}</p>
            <p><FaTruck /> Marka: {camper.brand}</p>
            <p><FaTasks /> Ilość osób: {camper.papacity}</p>
            <p><FaMoneyCheckAlt /> Cena (zł/dzień): {camper.price}</p>
            <p><FaMapMarkerAlt /> Miasto : {camper.city}</p>
            <p><FaRegMap /> Lokalizacja: {camper.location}</p>
          </StyledCampDetails>

          <StyledDescriptionBox>
            <StyledDescription>
              <h2>Opis:  <hr></hr> </h2>
              {camper.description}
            </StyledDescription>
          </StyledDescriptionBox>

          {context.userData && (
            <StyledContactDetails>
              <StyledContactHead>
                <h2>Dane kontaktowe:  <hr></hr> </h2>
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
    </>
  );
}


