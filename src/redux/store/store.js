import { configureStore } from "@reduxjs/toolkit";
import SiteSettingServices from "../services/SiteSettingServices";

const store = configureStore({
  reducer: {
    [SiteSettingServices.reducerPath]: SiteSettingServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(SiteSettingServices.middleware),
});

export default store;
