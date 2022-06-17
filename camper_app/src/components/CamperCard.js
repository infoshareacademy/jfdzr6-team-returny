import React from "react";
import "./CamperCard.css";
import { useState, useEffect } from "react";
import { getAllCampers } from "../api/getAllCampers";
import { getCampersByType } from "../api/getCampersByType";
import { Loader } from "./Loader";
import { NotificationManager } from "react-notifications";
import { Card } from "./Card";
import { FindCmpr } from "./FindCmpr";

export const CamperCard = () => {
  const [campers, setCampers] = useState([]);

  function getCamperType(type) {
   
    if (type == "allcapers") {
      getAllCampers().then((data) => {
        setCampers(data);
      });
    } else {
      getCampersByType(type)
        .then((data) => {
          setCampers(data);
        })
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    getAllCampers()
      .then((data) => {
       
        setCampers(data);
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
      {campers.length !== 0 ? (
        <>
          <FindCmpr getCamperType={getCamperType} />
          <div className="wrapper">
            {campers && campers.map((el) => <Card key={el.id} data={el} />)}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};



