import { useNavigate } from "react-router-dom";
import { StyledButton, StyledCard, StyledImg, StyledText } from "./CamperOwnerPanel.style";

export function CardOwner(props) {
    const navigate = useNavigate();
    const { data } = props;
  
    return (
      <StyledCard>
        <div className="card__body">
          <StyledImg src={data.images[0]} class="card__image" />
        </div>
        <StyledText>
          <h2 className="card__title">{data.title}</h2>
          <p className="card__description">{data.description}</p>
        </StyledText>
        <StyledButton onClick={()=>navigate(`${data.id}`)} className="card__btn">Zobacz campera</StyledButton>
      </StyledCard>
    );
  }



