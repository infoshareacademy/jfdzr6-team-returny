import React from "react";
import "./CamperCard.css";
import { useState, useEffect } from "react";
import { getAllCampers } from "../../api/getAllCampers";
import { getCampersByType } from "../../api/getCampersByType";
import { getCampersByOnlyRegion } from "../../api/getCampersByOnlyRegion";
import { getCamperByTypeAndRegion } from "../../api/getCamperByTypeAndRegion";
import { Loader } from "../../components/Loader";
import { NotificationManager } from "react-notifications";
import { Card } from "../../components/Card";
import { FindCmpr } from "../../components/FindCmpr";

export const CamperCard = () => {
  const [campers, setCampers] = useState([]);
  const [missCamper, setMissCamper] = useState(false);
  const [search, setSearch] = useState({ type: "allcapers", region: "" });

  useEffect(() => {
    if (search.type === "allcapers" && !search.region) {
      getAllCampers().then((data) => {
        setMissCamper(false);
        setCampers(data);
      });
    }
    if (search.type !== "allcapers" && search.region === "") {
      getCampersByType(search.type)
        .then((data) => {
          if (data.length == 0) {
            setMissCamper(true);
            throw new Error("brak kamperow");
          }
          setCampers(data);
        })
        .catch((err) => console.log(err));
    }
    if (search.type === "allcapers" && search.region) {
      getCampersByOnlyRegion(search.region).then((data) => {
        if (data.length == 0) {
          setMissCamper(true);
          throw new Error("brak kamperow");
        }
        setCampers(data);
      });
    }
    if (search.type !== "allcapers" && search.type !== "" && search.region) {
      getCamperByTypeAndRegion(search.type, search.region).then((data) => {
        if (data.length == 0) {
          setMissCamper(true);
          throw new Error("brak kamperow");
        }
        setCampers(data);
      });
    }
  }, [search]);
  

  useEffect(() => {
    getAllCampers()
      .then((data) => {
        setMissCamper(false);
        setCampers(data);
        return data;
      })
      .then((err) => {
        if (err.length == 0) {
          NotificationManager.error("coś poszło nie tak");
        }
      });
  }, []);

  console.log(search);
  return (
    <>
      {campers.length !== 0 ? (
        <>
          <FindCmpr setSearch={setSearch} setMissCamper={setMissCamper} />
          {!missCamper ? (
            <div className="wrapper">
              {campers && campers.map((el) => <Card key={el.id} data={el} />)}
            </div>
          ) : (
            <div style={{ minHeight: "400px" }}>
            <h3 style={{ textAlign: "center", marginBottom: "50px", color:"red"}}>
              Brak kamperów dla wybranej kategorii
            </h3>
            </div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
