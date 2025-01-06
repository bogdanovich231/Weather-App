import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = process.env.API_URL; 
const API_KEY = process.env.API_KEY; 

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (city) => ({
        url: `weather`, 
        params: {
          q: city, 
          appid: API_KEY, 
          units: 'metric', 
          lang: 'pl', 
        },
      }),
    }),
  }),
});

export const {
useGetWeatherQuery
} = api;