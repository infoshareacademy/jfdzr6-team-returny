import React from "react";
import { useState, useEffect } from "react";
import { getAllCampers } from "../../api/getAllCampers";
import { getCampersByType } from "../../api/getCampersByType";
import { Loader } from "../../components/Loader";
import { NotificationManager } from "react-notifications";
import { CardOwner } from "../../components/CardOwner";

import { StyledHeader1 } from "./CamperOwnerPanel.style";

export const CamperOwnerPanel = () => {

    const [myCampers, setMyCampers] = useState([]);
    const [missCamper, setMissCamper] = useState(false);
    const [search, setSearch] = useState({ type: "", region: "" });
  
    useEffect(() => {
      if (search.type === "allcapers" && !search.region) {
        getAllCampers().then((data) => {
          setMissCamper(false);
          setMyCampers(data);
        });
      }
      if (search.type !== "allcapers" && search.region === "") {
        getCampersByType(search.type)
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
              <div className="wrapper">
                {myCampers && myCampers.map((el) => <CardOwner key={el.id} data={el} />)}
              </div>
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