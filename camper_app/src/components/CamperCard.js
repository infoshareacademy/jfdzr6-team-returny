import React from "react";
import "./CamperCard.css";
import { useState, useEffect } from "react";
import { getAllCampers } from "../api/getAllCampers";
import { getCampersByType } from "../api/getCampersByType";
import { Loader } from "./Loader";
import { NotificationManager } from "react-notifications";

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
        console.log(data);
        setCampers(data);
        return data;
      })
      .then((err) => {
        if (err.length == 0) {
          NotificationManager.error("something went wrong");
        }
        console.log(err);
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

/////

function Card(props) {
  const { data } = props;

  return (
    <div className="card">
      <div className="card__body">
        <img src={data.images[0]} class="card__image" />
        <h2 className="card__title">{data.title}</h2>
        <p className="card__description">{data.description}</p>
      </div>
      <button className="card__btn">Zobacz campera</button>
    </div>
  );
}
////

function FindCmpr({ getCamperType }) {
  function handleSelectType(e) {
    e.preventDefault();
    getCamperType(e.target.value);
  }

  return (
    <div classNAme="find">
      <h2 className="find__title">Znajdź campera</h2>
      <p class="find_desc">Wybierz z listy: </p>
      <div class="select">
        <select id="cars" name="camperType" onChange={handleSelectType}>
          <option value="allcapers">All Campers</option>
          <option value="campervan">Campervan</option>
          <option value="integra">Integra</option>
          <option value="polintegra">Półintegra</option>
          <option value="alkowa">Alkowa</option>
        </select>
        <div class="select_arrow"></div>
      </div>
    </div>
  );
}
