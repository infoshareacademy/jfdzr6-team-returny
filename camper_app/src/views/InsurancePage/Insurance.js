import React from "react";
import {
  StyledInsurance1,
  StyledInsuranceDiv1,
  StyledInsuranceHeader1,
  StyledInsuranceParagraphs1,
  StyledSpan,
  StyledP
} from "./Insurance.style";

export function Insurance() {
  return (
    <>
      <StyledInsurance1>
        <StyledInsuranceDiv1>
          <StyledInsuranceHeader1>
            Ubezpiecz swój pojazd!
          </StyledInsuranceHeader1>

          <StyledInsuranceParagraphs1>
            Jeżeli pojazd jest zarobkowo wynajmowany lub wypożyczany,
            podnajmowany lub wydzierżawiany innym osobom lub podmiotom, to
            ubezpieczyciele stosują zwyżki za podwyższone ryzyko. Składka jest
            wtedy przeważnie dwukrotnie wyższa niż w sytuacji, gdy kampera
            używamy wyłącznie na własne potrzeby. Z drugiej strony wypożyczalnie
            kamperów mogą skorzystać z ubezpieczeń flotowych. Takie polisy
            zapewniają m.in. lepsze warunki naliczania składki, gdy klient
            wypożyczalni spowoduje szkodę.
          </StyledInsuranceParagraphs1>

          <StyledInsuranceParagraphs1>
            Jeśli wypożyczamy kampera, powinniśmy upewnić się, że ma on aktualną
            polisę OC. Jeśli nie ma, grozi nam pokrywanie ewentualnych
            wyrządzonych przez nas szkód z własnej kieszeni.
          </StyledInsuranceParagraphs1>
          <StyledSpan>
          Zapoznaj się z ofertami ubezpieczeń:
          </StyledSpan>
          <StyledP>
            
            <a
              href="https://rankomat.pl/kalkulator/oc-ac/?calculationId=ZKRLV3&visitType=Cookie#/s/auto_2"
              target="_blank"
              rel="noreferrer"
            >
              KLIKNIJ TUTAJ
            </a>
          </StyledP>
        </StyledInsuranceDiv1>
      </StyledInsurance1>
    </>
  );
}
