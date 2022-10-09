import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllHistory } from "../../store/history";
import { History } from "../../components";
const HistoryLayout = () => {
  // const history = useSelector((state) => state.history.data);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllHistory());
  // }, [dispatch]);

  return (
    <div>
      <History />
    </div>
  );
};

export default HistoryLayout;
