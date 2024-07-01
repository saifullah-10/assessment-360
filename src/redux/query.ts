import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const mainApi = createApi({
  reducerPath: "allPosts",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<string, string>({ query: () => "allPosts" }),
  }),
});
