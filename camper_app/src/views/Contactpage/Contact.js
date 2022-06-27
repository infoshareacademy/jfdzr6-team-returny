import React from "react";
import { 
  StyledTextArea,
  StyledContactSection,
  StyledFormElements,
  StyledFormHeader,
  StyledMapDetails,
  StyledEmailSection,
  StyledContactHeader,
  StyledInput,
  StyledFormButton,
  StyledList,
  StyledLists,
  StyledListsAddress,
  StyledListsMap
} from "./Contactpage.style";
import { 
  FaHome,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegPaperPlane
} from "react-icons/fa";
import emailjs from "emailjs-com"


export function Contact() {

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_nwtzf2l', e.target, 'uovqm0wbm9ul6DmnK')
      .then((result) => {
          console.log(result.text);
          console.prompt('Wiadomość wysłania')
      }, (error) => {
          console.log(error.text);
          console.dir('Błąd wysyłania wiadomości')
      });
      e.target.reset()
  }

  return (
    <>
      <StyledContactSection>
        <StyledEmailSection>
        <StyledFormHeader>Wyślij zapytanie</StyledFormHeader>
        <div>
          <form onSubmit={sendEmail}>
            <StyledFormElements>
              <StyledInput
                name="name"
                type="text"
                placeholder="Imie i Nazwisko"
                maxLength="50"
              />
            </StyledFormElements>
            <StyledFormElements>
              <StyledInput
                name="email"
                type="email"
                placeholder="Podaj adres e-mail"
                maxLength="50"
              />
              
            </StyledFormElements>

            <StyledFormElements>
              <StyledInput
                name="subject"
                type="text"
                placeholder="Podaj temat wiadomości"
                maxLength="100"
              />
              
            </StyledFormElements>

            <StyledFormElements>
              <StyledTextArea
                name="message"
                type="text"
                placeholder="Podaj swoją wiadomość"
              />
            </StyledFormElements>
            <StyledFormButton type="submit">Wyślij</StyledFormButton>
          </form>
        </div>
        </StyledEmailSection>

      <StyledMapDetails>

        <StyledContactHeader>
          Skontakuj się z nami
        </StyledContactHeader>

        <StyledList>

          <StyledListsAddress>
            <FaHome/>    Plac Defilad 1, 00-901, Warszawa
            </StyledListsAddress>

          <StyledLists>
          <FaPhoneAlt /> (+48) 987-123-456 
          </StyledLists>

          <StyledLists>
          <FaRegPaperPlane /> returnyISA@gmail.com
          </StyledLists>

          <StyledListsMap>
          <FaMapMarkerAlt/> <a href="https://goo.gl/maps/7UugKNUEuSZNHvqz9" target="_blank">Sprawdz jak do nas dojechać!</a>
          </StyledListsMap>

        </StyledList>

      </StyledMapDetails>

      </StyledContactSection>


    </>
  );
}
