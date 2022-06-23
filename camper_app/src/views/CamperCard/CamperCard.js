import React from "react";
import "./CamperCard.css";
import { useState, useEffect } from "react";
import { getAllCampers } from "../../api/getAllCampers";
import { getCampersByType } from "../../api/getCampersByType";
import { getCampersByOnlyRegion } from "../../api/getCampersByOnlyRegion";
import { Loader } from "../../components/Loader";
import { NotificationManager } from "react-notifications";
import { Card } from "../../components/Card";
import { FindCmpr } from "../../components/FindCmpr";
import { db } from "../../firebase";
import { getDocs, query, collection, where } from "firebase/firestore";

export const CamperCard = () => {
  const [campers, setCampers] = useState([]);
  const [missCamper, setMissCamper] = useState(false);
  const [search, setSearch] = useState({ type: "", region: "" });
  console.log(Boolean(search.region));
  useEffect(() => {
    if (search.type === "allcapers" && !search.region) {
      console.log("halo wszystkie");
      getAllCampers().then((data) => {
        setMissCamper(false);
        setCampers(data);
      });
    }
    if (search.type !== "allcapers" && search.region === "") {
      console.log("pobieram po typie");
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
      console.log("pobieram tylko po regionie");
      getCampersByOnlyRegion(search.region).then((data) => {
        if (data.length == 0) {
          setMissCamper(true);
          throw new Error("brak kamperow");
        }
        setCampers(data);
      });
    }
    if (search.type !== "allcapers" && search.type !== "" && search.region) {
      console.log("pobieram po typie i po regionie");
      getCamperByTypeAndRegion(search.type, search.region);
    }
  }, [search]);

  

  
  

  function getCamperByTypeAndRegion(type, region) {
    const q = query(
      collection(db, "campers"),
      where("campertype", "==", type),
      where("location", "==", region)
    );
    getDocs(q)
      .then((querySnapshot) => {
        return querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      })
      .then((data) => {
        if (data.length == 0) {
          setMissCamper(true);
          throw new Error("brak kamperow");
        }
        setCampers(data);
        console.log(data);
      });
  }

  ///////
  useEffect(() => {
    getAllCampers()
      .then((data) => {
        console.log('campery',data)
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
