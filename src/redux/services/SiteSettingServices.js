import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/Base_Url";
import {
  CONTACT_US,
  FAQS,
  FEATURES,
  LANDING_PAGE,
  PAGES,
} from "../../utils/Endpoints";

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
    pages: builder.query({
      query: (name) => {
        return {
          url: `${PAGES}${name ? "/" + name : ""}`,
          method: "GET",
        };
      },
    }),
    amazingFeatures: builder.query({
      query: () => {
        return {
          url: FEATURES,
          method: "GET",
        };
      },
    }),
    contactQuery: builder.mutation({
      query: (data) => {
        return {
          url: CONTACT_US,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export default SiteSettingServices;

export const {
  useLandingPageContentQuery,
  useFaqsQuery,
  usePagesQuery,
  useAmazingFeaturesQuery,
  useContactQueryMutation,
} = SiteSettingServices;
