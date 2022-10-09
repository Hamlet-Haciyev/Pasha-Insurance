import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { historyReducer } from "./history";
import { statisticReducer } from "./statistic";
import { stepReducer } from "./step";
import { PartnerReducer } from "./partner";
const middlewares = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];
const store = configureStore({
  reducer: {
    history: historyReducer,
    step: stepReducer,
    statistic: statisticReducer,
    partner: PartnerReducer,
  },
  middleware: middlewares,
});
export default store;
