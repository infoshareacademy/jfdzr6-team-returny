import React from "react";
import "./CamperCard.css";
import { useState, useEffect } from "react";
import { getAllCampers } from "../../api/getAllCampers";
import { getCampersByType } from "../../api/getCampersByType";
import { Loader } from "../../components/Loader";
import { NotificationManager } from "react-notifications";
import { Card } from "../../components/Card";
import { FindCmpr } from "../../components/FindCmpr";
import { db } from "../../firebase";
import { getDocs, query, collection, where } from "firebase/firestore";

export const CamperCard = () => {
  const [campers, setCampers] = useState([]);
  const [missCamper,setMissCamper]=useState(false);
  const [search, setSearch] = useState({ type: null, region: null });
  useEffect(() => {
    if (search.type && !search.region) {
      getCamperType(search.type);
    }
    if (search.type && search.region) {
      getCamperByRegion(search.type, search.region);
    }
    if (search.type=="allcapers" || search.type==null && search.region){
      getCampersByOnlyRegion(search.region)
    }
  }, [search]);

  function getCampersByOnlyRegion(region) {
    if (region == "") {
      getAllCampers().then((data) => {
        setCampers(data);
      });
    } else {
      getCampersByRegion(region).then(data=>{
        setCampers(data)

      });
    }
  }
  function getCampersByRegion(region) {
    const q = query(collection(db, "campers"), where("location", "==", region));
    return getDocs(q)
      .then((querySnapshot) => {
        return querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      })
      .then((data) => {
        console.log(data);
        return data;
      });
  }  

  function getCamperType(type) {
    if (type == "allcapers") {
      getAllCampers().then((data) => {
        setCampers(data);
      });
    } else {
      getCampersByType(type)
        .then((data) => {
          if (data.length == 0) {
            setMissCamper(true)
            throw new Error("brak kamperow");
          }
          setCampers(data);
        })
        .catch((err) => console.log(err));
    }
  }

  function getCamperByRegion(type, region) {
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
          setMissCamper(true)
          throw new Error("brak kamperow");
        }
        setCampers(data);
        console.log(data);
      });
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
  console.log(search);
  return (
    <>
      {campers.length !== 0 ? (
        <>
          <FindCmpr
            getCamperType={getCamperType}
            getCamperByRegion={getCamperByRegion}
            setSearch={setSearch}
            setMissCamper={setMissCamper}
          />
          {!missCamper ?
          <div className="wrapper">
            {campers && campers.map((el) => <Card key={el.id} data={el} />)}
          </div> : <h3 style={{textAlign:"center", marginBottom:"50px"}}>Brak kamperów do wyświetlenia</h3>
          }
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
