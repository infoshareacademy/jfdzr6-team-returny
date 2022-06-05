import { StyledBoxBackground, StyledHeader1, StyledHeader2, StyledTextArea
    , StyledInputFile, StyledInputText,StyledSelect } from './AddCamperForm.style'

export const AddCamperForm = () => {
    return (
    <div>
        <StyledHeader1>Dodaj pojazd</StyledHeader1>
        <StyledBoxBackground>
            <form>
                <div><StyledInputText type='text' placeholder='Tytuł ogłoszenia' /></div>
                <StyledSelect id="camper-type">
                    <option value="">Kategoria campera</option>
                    <option value="campervan">Campervan</option>
                    <option value="integra">Integra</option>
                    <option value="polintegra">Półintegra</option>
                    <option value="alkowa">Alkowa</option>
                </StyledSelect>   
                <div><StyledInputText type='text' placeholder='Rocznik' /></div>
                <div><StyledInputText type='text' placeholder='Marka' /></div>
                <div><StyledInputText type='text' placeholder='Ilość osób' /></div>
                <div><StyledInputText type='text' placeholder='Cena [pln]' /> zł/tydzień</div>
                <StyledSelect id="rent-duration">
                    <option value="">Okres wynajmu</option>
                    <option value="campervan">1 tydzień</option>
                    <option value="integra">2 tygodnie</option>
                    <option value="polintegra">3 tygodnie</option>
                    <option value="alkowa">4 tygodnie</option>
                </StyledSelect>  
            </form>
        </StyledBoxBackground>

        <StyledBoxBackground>
        <StyledHeader2>Zdjęcia</StyledHeader2>
        <StyledInputFile type='file' />
        <StyledInputFile type='file' />
        <StyledInputFile type='file' />
        </StyledBoxBackground>

        <StyledBoxBackground>
        <StyledHeader2>Opis pojazdu:</StyledHeader2>
        <div><StyledTextArea type='text' placeholder='Opisz swój pojazd...' 
        cols="40" rows="5"/></div>
        </StyledBoxBackground>

    </div>)
}
