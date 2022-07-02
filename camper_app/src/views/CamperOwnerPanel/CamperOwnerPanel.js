import React from "react";
import { useState, useEffect, useContext } from "react";
import { getCampersByUserId } from "../../api/getCampersByUserId";
import { Loader } from "../../components/Loader";
import { CardOwner } from "./CardOwner";
import { StyledHeader1, StyledWrapper } from "./CamperOwnerPanel.style";
import { UserContext } from "../../context/userContext";

export const CamperOwnerPanel = () => {
  const context = useContext(UserContext);
  const [myCampers, setMyCampers] = useState([]);

  useEffect(() => {
    console.log(context);
    getCampersByUserId(context.userData.id)
      .then((data) => {
        setMyCampers(data);
      })
      .catch((err) => console.log(err));
  }, [context.userData.id]);

  return (
    <>
      <StyledHeader1>Lista moich camperów</StyledHeader1>
        <StyledWrapper>
          {myCampers &&
            context.userData &&
            myCampers.map((el) => <CardOwner key={el.id} data={el} />)}
        </StyledWrapper>
    </>
  );
};
