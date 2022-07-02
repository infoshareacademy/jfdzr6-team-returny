import React, { useContext, useState, useEffect } from "react";
import { getCampersByUserId } from "../../api/getCampersByUserId";
import { Loader } from "../../components/Loader";
import { CardOwner } from "./CardOwner";
import { StyledHeader1, StyledWrapper } from "./CamperOwnerPanel.style";
import { UserContext } from "../../context/userContext";

export const CamperOwnerPanel = () => {
  const { userData } = useContext(UserContext);
  const [myCampers, setMyCampers] = useState([]);
  const fetchCampers = async () => {
    try {
      const campers = await getCampersByUserId(userData.id);
      setMyCampers(campers);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchCampers();
  }, [userData]);
  return (
    <>
      <StyledHeader1>Lista moich camperów</StyledHeader1>
      {myCampers ? (
        <StyledWrapper>
          {myCampers.map((el) => (
            <CardOwner key={el.id} data={el} />
          ))}
        </StyledWrapper>
      ) : (
        <Loader />
      )}
    </>
  );
};