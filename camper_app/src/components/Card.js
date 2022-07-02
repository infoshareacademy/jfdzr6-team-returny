import { connectStorageEmulator } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import "../views/CamperCard/CamperCard.css";

import { FaGripVertical, FaMapMarkerAlt,FaMoneyCheckAlt   } from 'react-icons/fa';


export function Card(props) {
    const navigate =useNavigate();
    const { data } = props;
  console.log(data)
    return (
      <div className="card">
        <div className="card__body">
          <img src={data.images[0]} class="card__image" />
           <h2 className="card__title">{data.title}</h2>
          <p className="card__description"><FaGripVertical /> Kategoria: {data.campertype}</p>
          <p className="card__description"><FaMapMarkerAlt /> Miasto: {data.city}</p>
          <p className="card__description"> <FaMoneyCheckAlt /> <b>Cena: {data.price} zł</b></p>
        </div>
        <button onClick={()=>navigate(`${data.id}`)}className="card__btn">Zobacz campera</button>
      </div>
    );
  }



