import { useNavigate } from "react-router-dom";
import "../views/CamperCard/CamperCard.css";
export function Card(props) {
    const navigate =useNavigate();
    const { data } = props;
  
    return (
      <div className="card">
        <div className="card__body">
          <img src={data.images[0]} class="card__image" />
           <h2 className="card__title">{data.title}</h2>
          <p className="card__description">{data.description}</p>
        </div>
        <button onClick={()=>navigate(`${data.id}`)}className="card__btn">Zobacz campera</button>
      </div>
    );
  }



