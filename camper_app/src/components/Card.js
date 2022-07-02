import { connectStorageEmulator } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import "../views/CamperCard/CamperCard.css";
export function Card(props) {
    const navigate =useNavigate();
    const { data } = props;
  console.log(data)
    return (
      <div className="card">
        <div className="card__body">
          <img src={data.images[0]} class="card__image" />
           <h2 className="card__title">{data.title}</h2>
          <p className="card__description">Kategoria: {data.campertype}</p>
          <p className="card__description">Miasto: {data.city}</p>
          <p className="card__description">Cena: {data.price} zł</p>
        </div>
        <button onClick={()=>navigate(`${data.id}`)}className="card__btn">Zobacz campera</button>
      </div>
    );
  }



