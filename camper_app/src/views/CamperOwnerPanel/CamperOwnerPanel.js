import React, { useContext, useState, useEffect } from "react";
import { getCampersByUserId } from "../../api/getCampersByUserId";
import { Loader } from "../../components/Loader";
import { CardOwner } from "./CardOwner";
import { StyledHeader1, StyledWrapper } from "./CamperOwnerPanel.style";
import { UserContext } from "../../context/userContext";
export const CamperOwnerPanel = () => {
  const { userData } = useContext(UserContext);
  const [myCampers, setMyCampers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchCampers = async () => {
    if (!userData.id) return;
    try {
      const campers = await getCampersByUserId(userData.id);
      setMyCampers(campers);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchCampers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);
  return (
    <>
      <StyledHeader1>Lista moich camperów</StyledHeader1>
      {!isLoading ? (
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