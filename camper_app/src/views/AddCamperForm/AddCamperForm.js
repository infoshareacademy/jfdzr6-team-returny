import { StyledBoxBackground, StyledHeader1, StyledHeader2, StyledTextArea
    , StyledInputFile, StyledInputText,StyledSelect, StyledButton } from './AddCamperForm.style'
import {addCamper} from '../../api/addCamper';
import { storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

export const AddCamperForm = () => {

    const handleSubmitCamper = (e) => {
        e.preventDefault();
        const form = e.target;
        const { title, campertype ,year,brand,capacity,price,rentduration,description} = form;
          const camperData = {
          title: title.value,
          campertype:campertype.value,
          year:year.value,
          brand:brand.value,
          papacity:capacity.value,
          price:price.value,
          rentduration:rentduration.value,
          description:description.value

          
        };
        form.reset();
        console.log(camperData);
        addCamper(camperData).then(res=>console.log(res)).catch(err=>console.log(err));
       
      };


    return (
    <div>
        <StyledHeader1>Dodaj pojazd</StyledHeader1>
            <form onSubmit={handleSubmitCamper}>
        <StyledBoxBackground>
                <div><StyledInputText name='title' type='text' placeholder='Tytuł ogłoszenia' 
                maxLength='60'/></div>
                <StyledSelect name="campertype">
                    <option value="">Kategoria campera</option>
                    <option value="campervan">Campervan</option>
                    <option value="integra">Integra</option>
                    <option value="polintegra">Półintegra</option>
                    <option value="alkowa">Alkowa</option>
                </StyledSelect>   
                <div><StyledInputText name='year' type='text' placeholder='Rocznik' maxLength='4'/></div>
                <div><StyledInputText name='brand' type='text' placeholder='Marka' maxLength='20'/></div>

                <div><StyledInputText name='capacity' type='text' placeholder='Ilość osób' maxLength='1'/></div>
                <div><StyledInputText name='price' type='text' placeholder='Cena [pln]' /> zł/tydzień</div>
                <StyledSelect name="rentduration">
                    <option value="">Okres wynajmu</option>
                    <option value="7">1 tydzień</option>
                    <option value="14">2 tygodnie</option>
                    <option value="21">3 tygodnie</option>
                    <option value="28">4 tygodnie</option>
                </StyledSelect>  
           
        </StyledBoxBackground>

        <StyledBoxBackground>
        <StyledHeader2>Zdjęcia</StyledHeader2>
        <StyledInputFile name='main-img' type='file' accept='image/jpg, image/png' />
        <StyledInputFile name='extra-img' type='file' accept='image/jpg, image/png' />
        </StyledBoxBackground>

        <StyledBoxBackground>
        <StyledHeader2>Opis pojazdu:</StyledHeader2>
        <div><StyledTextArea name='description' type='text' placeholder='Opisz swój pojazd...'/></div>
        </StyledBoxBackground>

        <StyledBoxBackground>
        <StyledHeader2>Dane kontaktowe:</StyledHeader2>
        <div>
            <p>Lokalizacja: </p>
            <p>Adres email: </p>
            <p>Nr telefonu: </p>
        </div>
        </StyledBoxBackground>

        <StyledButton>Dodaj kampera</StyledButton>
        </form>

    </div>)
}
