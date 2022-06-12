import { Link } from "react-router-dom";
import "./CamperCard.css";
export function Card(props) {
    const { data } = props;
  
    return (
      <div className="card">
        <div className="card__body">
          <img src={data.images[0]} class="card__image" />
          <Link to={`${data.id}`}> <h2 className="card__title">{data.title}</h2></Link>
          <p className="card__description">{data.description}</p>
        </div>
        <button className="card__btn">Zobacz campera</button>
      </div>
    );
  }