import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Reward } from "../../components";
import { getAllPartner } from "../../store/partner";
const PashaRewards = () => {
  const partners = useSelector((state) => state.partner.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPartner());
  }, []);
  return (
    <>
      {partners &&
        partners.map((partner) => {
          return <Reward partner={partner} />;
        })}
    </>
  );
};
export default PashaRewards;
