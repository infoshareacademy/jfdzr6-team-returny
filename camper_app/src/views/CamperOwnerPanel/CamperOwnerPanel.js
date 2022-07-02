import React from "react";
import { useState, useEffect } from "react";
import { getAllCampers } from "../../api/getAllCampers";
import { getCampersByUserId } from "../../api/getCampersByUserId";
import { Loader } from "../../components/Loader";
import { NotificationManager } from "react-notifications";
import { CardOwner } from "./CardOwner";
import { StyledHeader1, StyledWrapper } from "./CamperOwnerPanel.style"

// sdk... do pobrania camperow
// getDocs, filter po userid uzytkownika (ciag znakow)
// useEffect
// 
// 

export const CamperOwnerPanel = () => {

    const [myCampers, setMyCampers] = useState([]);
    const [missCamper, setMissCamper] = useState(false);
    const [search, setSearch] = useState({ userid: "W5wsue1D3GZWrO8Nf8cqwFVtIfx2" });
  
    useEffect(() => {
      // if (search.type === "allcapers" && !search.region) {
      //   getAllCampers().then((data) => {
      //     setMissCamper(false);
      //     setMyCampers(data);
      //   });
      // }
      if (search.type !== "allcapers" && search.userid === "W5wsue1D3GZWrO8Nf8cqwFVtIfx2") {
        getCampersByUserId(search.userid)
          .then((data) => {
            if (data.length == 0) {
              setMissCamper(true);
              throw new Error("Nie masz żadnych camperów");
            }
            setMyCampers(data);
          })
          .catch((err) => console.log(err));
      }
    }, [search]);
    
    useEffect(() => {
      getAllCampers()
        .then((data) => {
          setMissCamper(false);
          setMyCampers(data);
          return data;
        })
        .then((err) => {
          if (err.length == 0) {
            NotificationManager.error("coś poszło nie tak");
          }
        });
    }, []);

    return (
      <>
        <StyledHeader1>Lista moich camperów</StyledHeader1>
        {myCampers.length !== 0 ? (
          <>
            {/* <FindCmpr  setSearch={setSearch} setMissCamper={setMissCamper} /> */}
            {!missCamper ? (
              <StyledWrapper>
                {myCampers && myCampers.map((el) => <CardOwner key={el.id} data={el} />)}
              </StyledWrapper>
            ) : (
              <h3 style={{ textAlign: "center", marginBottom: "50px" }}>
                Brak kamperów do wyświetlenia
              </h3>
            )}
          </>
        ) : (
          <Loader />
        )}
      </>
    );
};