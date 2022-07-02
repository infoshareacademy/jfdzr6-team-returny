import React from "react";
import { 
  StyledInsurance1,
  StyledInsuranceDiv1,
  StyledInsuranceHeader1,
  StyledInsuranceParagraphs1
 } from "./Insurance.style";

export function Insurance() {
  return (
    <>
      <StyledInsurance1>
        <StyledInsuranceDiv1>
          <StyledInsuranceHeader1>Ubezpiecz swój pojazd!</StyledInsuranceHeader1>

          <StyledInsuranceParagraphs1>
            Z ogromnej pasji do podróżowania powstała nasza strony internetowa
            poświęcona wynajmowi camperów! To właśnie tutaj łączymy podróżników
            i właścicieli pojazdów chętnych wynająć swój mobilny dom!
          </StyledInsuranceParagraphs1>

        </StyledInsuranceDiv1>
      </StyledInsurance1>
    </>
  );
}

