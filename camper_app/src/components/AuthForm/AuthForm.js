import { StyledHeader2, StyledHeader3, StyledBoxBackground, StyledWrapper, StyledInputText, StyledButton, DivInfo, StyledLink } from "./AuthForm.style"



export const AuthForm = ({formRole,onSubmit}) => {

    
    
    return (
        <>
        <form onSubmit={onSubmit}>
        <StyledWrapper>
            {formRole === 'register' && (
                 <StyledBoxBackground>
                 <StyledHeader2>Załóż konto*</StyledHeader2>
                 <StyledHeader3>Imię:</StyledHeader3>
                 <div><StyledInputText name='name' type='text' placeholder='Podaj swoje imię' 
                 maxLength='30'/></div>  
                 <StyledHeader3>Email:</StyledHeader3>
                 <div><StyledInputText name='email' type='text' placeholder='Podaj email' 
                 maxLength='30'/></div>  
                 <StyledHeader3>Telefon:</StyledHeader3>
                 <div><StyledInputText name='telephone' type='text' placeholder='Podaj telefon' 
                 maxLength='30'/></div>      
                 <StyledHeader3>Hasło:</StyledHeader3>
                 <div><StyledInputText name='password' type='password' placeholder='Podaj hasło' 
                 maxLength='30'/></div>
                 <DivInfo>*Wypełnij wszystkie pola</DivInfo>
                 <StyledButton>Załóż konto</StyledButton>       
             </StyledBoxBackground>
            )

            }
           {formRole ==='login' && (
            <StyledBoxBackground>
            <StyledHeader2>Zaloguj się</StyledHeader2>
                <StyledHeader3>Email:</StyledHeader3>
                <div><StyledInputText name='email' type='text' placeholder='Podaj email' 
                maxLength='30'/></div>
                <StyledHeader3>Hasło:</StyledHeader3>
                <div><StyledInputText name='password' type='password' placeholder='Podaj hasło' 
                maxLength='30'/></div>
                <StyledLink>Przypomnij hasło</StyledLink>
                <StyledButton>Zaloguj się</StyledButton>        
            </StyledBoxBackground>
           )

           }
           {formRole ==='forgotPassword' && (
            <>
            </>
           )

           }
            
        </StyledWrapper>
        </form>
        </>
    )

}
