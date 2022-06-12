import { useParams } from "react-router-dom";
import { StyledDescriptionBox, StyledDescription, Wrapper, StyledCampImg, CampTitle, StyledContactDetails, StyledContactHead, StyledCampDetails } from './PreviewCamp.style'



export function PreviewCamp () {
    const params = useParams();
    const { id } = params;


    return (
        <Wrapper>

                <CampTitle>
                    <h2>Chausson - 627GA Premium</h2>
                </CampTitle>

                <StyledCampImg>
                    <img src= "#" alt="Tutaj jest camper"/>
                </StyledCampImg>

                <StyledCampDetails>
                    <p>Kategoria</p>
                    <p>Rocznik</p>
                    <p>Marka</p>
                    <p>Ilość osób</p>
                    <p>Cena (zł/dzień)</p>
                    <p>Lokalizacja</p>
                </StyledCampDetails>

                <StyledDescriptionBox>
                    <StyledDescription>Duża lodówka 134 L z systemem AES 2 oddzielne łóżka wzdłużne 90 cm z możliwością połączenia w łoże małżeńskie 
                        Przestronny luk bagażowy z dostępem z 2 stron i regulacją wysokości zamykany łazienka z obrotową przegrodą 5 miejsc do jazdy</StyledDescription>
                </StyledDescriptionBox>

                <StyledContactDetails>
                    <StyledContactHead>Dane kontaktowe:</StyledContactHead>
                    <p>Imię:</p>
                    <p>Telefon:</p>
                    <p>E-Mail:</p>
                </StyledContactDetails>

        </Wrapper>
    )
}