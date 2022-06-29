import { useContext } from "react";
import * as yup from 'yup';
import { Formik, Form } from "formik";
import { UserContext } from "../../context/userContext";
import {
  StyledBoxBackground,
  StyledHeader1,
  StyledHeader2,
  StyledTextArea,
  StyledInputFile,
  StyledInputText,
  StyledSelect,
  StyledButton,
  DivInfo,
  StyledError,
} from "./AddCamperForm.style";
import { addCamper } from "../../api/addCamper";
import { storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { useState } from "react";
import uuid from "react-uuid";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { Loader } from "../../components/Loader";




export const AddCamperForm = () => {
  const [error, setError] = useState("");
  const [sendLoader, setsendLoader] = useState(false);
  const context = useContext(UserContext);

  const handleSubmitCamper = async (e) => {
    e.preventDefault();
    setsendLoader(true);
    const form = e.target;
    const {
      title,
      campertype,
      year,
      brand,
      capacity,
      price,
      city,
      location,
      description,
      imgcollection,
    } = form;

    if (imgcollection.files["length"] > 5) {
      setsendLoader(false);
      setError("Mozna dodać maksymalnie 5 zdjęć.");
      throw new Error("Zbyt wiele zdjęć");
      return;
    }
    const images = [];
    try {
      for (let prop in imgcollection.files) {
        if (typeof imgcollection.files[prop] === "object") {
          const storageRef = ref(
            storage,
            `campers/${imgcollection.files[prop].name}+${uuid()}`
          );
          const snapshot = await uploadBytes(
            storageRef,
            imgcollection.files[prop]
          );
          const downloadUrl = await getDownloadURL(snapshot.ref);
          images.push(downloadUrl);
        }
      }
    } catch (er) {
      console.log(er);
    }

    const camperData = {
      title: title.value,
      campertype: campertype.value,
      year: year.value,
      brand: brand.value,
      papacity: capacity.value,
      price: price.value,
      images: images,
      location: location.value,
      city:city.value,
      description: description.value,
      usertlf: context.userData.mobil,
      userid: context.userData.id,
      useremail: context.userData.email,
    };
<<<<<<< HEAD
    const isValid = await validationSchema.isValid(camperData);

=======
    
>>>>>>> city
    addCamper(camperData)
      .then((res) => {
        NotificationManager.success("Kamper został wysłany");
        setsendLoader(false);
      })
      .catch((err) => {
        NotificationManager.error("Błąd wysyłania");
        setsendLoader(false);
      });
    form.reset();
  };
  
  
  const validationSchema = yup.object().shape({
    title: yup.string().min(3).max(20).required(),
    year: yup.string().required(),
  });

  return (
    <>
      {!sendLoader ? (
        <div>
          <StyledHeader1>Dodaj campera</StyledHeader1>
          <Formik>
            {formik=>{
              console.log(formik);
            }}
          </Formik>
          <form onSubmit={handleSubmitCamper} encType="multipart/form-data">
            <StyledBoxBackground>
              <div>
                <StyledInputText
                  name="title"
                  type="text"
                  placeholder="Tytuł ogłoszenia"
                  maxLength="60"
                />
              </div>
              <StyledSelect name="campertype">
                <option value="">Kategoria campera</option>
                <option value="campervan">Campervan</option>
                <option value="integra">Integra</option>
                <option value="polintegra">Półintegra</option>
                <option value="alkowa">Alkowa</option>
              </StyledSelect>
              <div>
                <StyledInputText
                  name="year"
                  type="text"
                  placeholder="Rocznik"
                  maxLength="4"
                />
              </div>
              <div>
                <StyledInputText
                  name="brand"
                  type="text"
                  placeholder="Marka"
                  maxLength="20"
                />
              </div>

              <div>
                <StyledInputText
                  name="capacity"
                  type="text"
                  placeholder="Ilość osób"
                  maxLength="1"
                />
              </div>
              <div>
                <StyledInputText
                  name="price"
                  type="text"
                  placeholder="Cena [pln]"
                />{" "}
                zł/dzień
              </div>
              <div>
                <StyledInputText
                  name="city"
                  type="text"
                  placeholder="Miasto"
                />
               
              </div>
              <StyledSelect name="location">
                <option value="">Lokalizacja campera (województwo)</option>
                <option value="mazowieckie">mazowieckie</option>
                <option value="slaskie">śląskie</option>
                <option value="wielkopolskie">wielkopolskie</option>
                <option value="malopolskie">małopolskie</option>
                <option value="dolnoslaskie">dolnośląskie</option>
                <option value="lodzkie">łódzkie</option>
                <option value="pomorskie">pomorskie</option>
                <option value="podkarpackie">podkarpackie</option>
                <option value="lubelskie">lubelskie</option>
                <option value="kujawsko-pomorskie">kujawsko-pomorskie</option>
                <option value="zachodniopomorskie">zachodniopomorskie</option>
                <option value="warminsko-mazurskie">warmińsko-mazurskie</option>
                <option value="swietokrzyskie">świętokrzyskie</option>
                <option value="podlaskie">podlaskie</option>
                <option value="lubuskie">lubuskie</option>
                <option value="opolskie">opolskie</option>
              </StyledSelect>
            </StyledBoxBackground>

            <StyledBoxBackground>
              <StyledHeader2>Zdjęcia</StyledHeader2>
              <DivInfo>Maksymalna ilość zdjęć: 5</DivInfo>
              <StyledInputFile
                type="file"
                onBlur={() => setError("")}
                name="imgcollection"
                multiple
                accept="image/jpg, image/png"
              />
              <StyledError> {error && error} </StyledError>
            </StyledBoxBackground>

            <StyledBoxBackground>
              <StyledHeader2>Opis pojazdu:</StyledHeader2>
              <div>
                <StyledTextArea
                  name="description"
                  type="text"
                  placeholder="Opisz swój pojazd..."
                />
              </div>
            </StyledBoxBackground>

            <StyledButton>Dodaj campera</StyledButton>
          </form>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
