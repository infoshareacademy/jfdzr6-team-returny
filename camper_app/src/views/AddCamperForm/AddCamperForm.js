import { useContext } from "react";
import * as yup from "yup";
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

  const handleSubmitCamper = async (values, { resetForm }) => {
    setsendLoader(true);

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
    } = values;
    console.log(imgcollection);
    console.log(imgcollection[0].name);

    if (imgcollection["length"] > 5) {
      setsendLoader(false);
      setError("Mozna dodać maksymalnie 5 zdjęć.");
      throw new Error("Zbyt wiele zdjęć");
      return;
    }
    const images = [];
    try {
      for (let prop in imgcollection) {
        if (typeof imgcollection[prop] === "object") {
          const storageRef = ref(
            storage,
            `campers/${imgcollection[prop].name}+${uuid()}`
          );
          const snapshot = await uploadBytes(storageRef, imgcollection[prop]);
          const downloadUrl = await getDownloadURL(snapshot.ref);
          console.log(downloadUrl);
          images.push(downloadUrl);
        }
      }
    } catch (er) {
      console.log(er);
    }

    const camperData = {
      title: title,
      campertype: campertype,
      year: year,
      brand: brand,
      papacity: capacity,
      price: price,
      images: images,
      city: city,
      location: location,
      description: description,
      usertlf: context.userData.mobil,
      userid: context.userData.id,
      useremail: context.userData.email,
    };
    console.log(camperData);

    addCamper(camperData)
      .then((res) => {
        NotificationManager.success("Kamper został wysłany");
        setsendLoader(false);
      })
      .catch((err) => {
        NotificationManager.error("Błąd wysyłania");
        setsendLoader(false);
      });
    resetForm();
  };

  

  const validationSchema = yup.object().shape({
    title: yup
      .string()
      .min(3, "Minimalna ilość znaków 3")
      .max(20, "Maksymalna ilość znaków 20")
      .required("Wymagane"),
    campertype: yup.string().required("Wymagane"),
    year: yup.number().typeError("Niewłaściwy format danych").required("Wymagane"),
    brand: yup.string().required("Wymagane"),
    capacity: yup.number().typeError("Niewłaściwy format danych").required("Wymagane"),
    price: yup.number().typeError("Niewłaściwy format danych").required("Wymagane"),
    city: yup.string().min(2, "Minimalna ilość znaków 2").required("Wymagane"),
    location: yup.string().required("Wymagane"),
    imgcollection: yup.mixed().required("Wymagane"),
    description: yup.string().min(20, "Minimalna ilość znaków 20").required("Wymagane"),
  });

  return (
    <>
      {!sendLoader ? (
        <div>
          <StyledHeader1>Dodaj campera</StyledHeader1>
          <Formik
            onSubmit={handleSubmitCamper}
            initialValues={{
              title: "",
              campertype: "",
              year: "",
              brand: "",
              papacity: "",
              price: "",
              imgcollection: null,
              city: "",
              location: "",
              description: "",
            }}
            validationSchema={validationSchema}
          >
            {({
              errors,
              values,
              handleChange,
              handleBlur,
              isSubmitting,
              setFieldValue,
            }) => (
              <Form>
                <StyledBoxBackground>
                  <div>
                    <StyledInputText
                      name="title"
                      type="text"
                      placeholder="Tytuł ogłoszenia"
                      maxLength="60"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                    />
                    {errors.title ? (
                      <p
                        style={{ color: "red", margin: "0", fontSize: "12px" }}
                      >
                        {errors.title}
                      </p>
                    ) : null}
                  </div>

                  <StyledSelect
                    name="campertype"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.campertype}
                  >
                    <option value="">Kategoria campera</option>
                    <option value="campervan">Campervan</option>
                    <option value="integra">Integra</option>
                    <option value="polintegra">Półintegra</option>
                    <option value="alkowa">Alkowa</option>
                  </StyledSelect>
                  {errors.campertype ? (
                    <p style={{ color: "red", margin: "0", fontSize: "12px" }}>
                      {errors.campertype}
                    </p>
                  ) : null}
                  <div>
                    <StyledInputText
                      name="year"
                      type="text"
                      placeholder="Rocznik"
                      maxLength="4"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.year}
                    />
                    {errors.year ? (
                      <p
                        style={{ color: "red", margin: "0", fontSize: "12px" }}
                      >
                        {errors.year}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <StyledInputText
                      name="brand"
                      type="text"
                      placeholder="Marka"
                      maxLength="20"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.brand}
                    />
                    {errors.brand ? (
                      <p
                        style={{ color: "red", margin: "0", fontSize: "12px" }}
                      >
                        {errors.brand}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <StyledInputText
                      name="capacity"
                      type="text"
                      placeholder="Ilość osób"
                      maxLength="1"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.capacity}
                    />
                    {errors.capacity ? (
                      <p
                        style={{ color: "red", margin: "0", fontSize: "12px" }}
                      >
                        {errors.capacity}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <StyledInputText
                      name="price"
                      type="text"
                      placeholder="Cena [pln]"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                    />
                    zł/dzień
                    {errors.price ? (
                      <p
                        style={{ color: "red", margin: "0", fontSize: "12px" }}
                      >
                        {errors.price}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <StyledInputText
                      name="city"
                      type="text"
                      placeholder="Miasto"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                    />
                    {errors.city ? (
                      <p
                        style={{ color: "red", margin: "0", fontSize: "12px" }}
                      >
                        {errors.city}
                      </p>
                    ) : null}
                  </div>
                  <StyledSelect
                    name="location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.location}
                  >
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
                    <option value="kujawsko-pomorskie">
                      kujawsko-pomorskie
                    </option>
                    <option value="zachodniopomorskie">
                      zachodniopomorskie
                    </option>
                    <option value="warminsko-mazurskie">
                      warmińsko-mazurskie
                    </option>
                    <option value="swietokrzyskie">świętokrzyskie</option>
                    <option value="podlaskie">podlaskie</option>
                    <option value="lubuskie">lubuskie</option>
                    <option value="opolskie">opolskie</option>
                  </StyledSelect>
                  {errors.location ? (
                    <p style={{ color: "red", margin: "0", fontSize: "12px" }}>
                      {errors.location}
                    </p>
                  ) : null}
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
                    required
                    onChange={(event) => {
                      setFieldValue("imgcollection", event.currentTarget.files);
                    }}
                  />
                  {errors.imgcollection ? (
                    <p style={{ color: "red", margin: "0", fontSize: "12px" }}>
                      {errors.imgcollection}
                    </p>
                  ) : null}

                  <StyledError> {error && error} </StyledError>
                </StyledBoxBackground>
                <StyledBoxBackground>
                  <StyledHeader2>Opis pojazdu:</StyledHeader2>
                  <div>
                    <StyledTextArea
                      name="description"
                      type="text"
                      placeholder="Opisz swój pojazd..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                    />
                    {errors.description ? (
                      <p
                        style={{ color: "red", margin: "0", fontSize: "12px" }}
                      >
                        {errors.description}
                      </p>
                    ) : null}
                  </div>
                </StyledBoxBackground>
                <StyledButton disabled={isSubmitting} type="submit">
                  Dodaj campera
                </StyledButton>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
