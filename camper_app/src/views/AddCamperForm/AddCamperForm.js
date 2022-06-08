import { StyledBoxBackground, StyledHeader1, StyledHeader2, StyledTextArea
    , StyledInputFile, StyledInputText,StyledSelect, StyledButton } from './AddCamperForm.style'
import {addCamper} from '../../api/addCamper';
import { storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { useState } from 'react';

export const AddCamperForm = () => {
    const [imagesUrl,setimagesUrl] =useState([]);
   

    const handleSubmitCamper = async(e) => {
        const form = e.target;
        e.preventDefault();
        const { title, campertype ,year,brand,capacity,price,rentduration,description,mainimg,extraimg} = form;
        const imageFileName=[mainimg.files[0],extraimg.files[0]];
       
        const images=[];
        try{
            for(let i in imageFileName){
                const storageRef = ref(storage, `campers/${imageFileName[i].name}`);
                const snapshot=await uploadBytes(storageRef,imageFileName[i]);
                const downloadUrl=await getDownloadURL(snapshot.ref);
                images.push(downloadUrl)
                setimagesUrl((prevstate)=>{
                 const newState=[...prevstate,downloadUrl]
                 return newState; 
                })
            }

        }catch(err){
            console.log(err)
        }
          const camperData = {
          title: title.value,
          campertype:campertype.value,
          year:year.value,
          brand:brand.value,
          papacity:capacity.value,
          price:price.value,
          images:images,
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
            {imagesUrl && imagesUrl.map((el,index)=><img key={index} src={el} width="150px" height="150px"></img>)}
            
        <StyledHeader2>Zdjęcia</StyledHeader2>
        <StyledInputFile name='mainimg' type='file' accept='image/jpg, image/png' />
        <StyledInputFile name='extraimg' type='file' accept='image/jpg, image/png' />
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
