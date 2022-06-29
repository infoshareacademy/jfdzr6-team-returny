import { 
    StyledAboutSection, 
    StyledSquareDiv,
    StyledParagraphs,
    StyledHeader,
    StyledParagraphs1,
    StyledParagraphs2,
    StyledParagraphs3
} from "./About.style";

export function About() {
  return (
    <>
      <StyledAboutSection>
        <StyledSquareDiv>
          <StyledHeader>Poznaj nasz serwis</StyledHeader>

          <StyledParagraphs>
            Z ogromnej pasji do podróżowania powstała nasza strony internetowa
            poświęcona wynajmowi camperów! To właśnie tutaj łączymy podróżników
            i właścicieli pojazdów chętnych wynająć swój mobilny dom!
            </StyledParagraphs>

            <StyledParagraphs>
              Odnalezienie odpowiedniego campera jest proste i szybkie. Przed
              dokonaniem rezerwacji masz możliwość przejrzenia ofert i zdjęć
              pojazdów dostępnych w interesujących Ciebie terminach. Następnie
              wybierz ten, który chcesz wynająć, potwierdź i zacznij planować
              swoją podróż.
            </StyledParagraphs>

            <StyledParagraphs2>
            Dla podróżników: 
            </StyledParagraphs2>

            <StyledParagraphs>Znajdz typ campera oraz swoją lokalizację w celu
            znalezienia ofert z najbliższej okolicy. Przejrzyj ogłoszenia
            dostępnych pojazdów i wybierz ten, który Ci najbardziej odpowiada.
            Rozpocznij swoją podróż!
            </StyledParagraphs>

            <StyledParagraphs3>
                Dla właścicieli camperów: 
            </StyledParagraphs3>

            <StyledParagraphs>
            Zarejestruj konto. Wystaw swojego campera na wynajem. Wpisz dostępne terminy, cenę, zdjęcia i opis i zarabiaj, zamiast
            trzymać swój pojazd w garażu. 
            </StyledParagraphs>

            <StyledParagraphs1>
            W razie pytań zachęcamy do kontaktu mailowego
            </StyledParagraphs1>

        </StyledSquareDiv>
      </StyledAboutSection>
    </>
  );
}
