import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/Base_Url";
import { FAQS, LANDING_PAGE } from "../../utils/Endpoints";

const SiteSettingServices = createApi({
  reducerPath: "SiteSettingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    landingPageContent: builder.query({
      query: () => {
        return {
          url: LANDING_PAGE,
          method: "GET",
        };
      },
    }),
    faqs: builder.query({
      query: (data) => {
        return {
          url: FAQS,
          method: "GET",
        };
      },
    }),
  }),
});

export default SiteSettingServices;

export const { useLandingPageContentQuery, useFaqsQuery } = SiteSettingServices;
