import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.API_URL;
const API_KEY = import.meta.env.API_KEY;

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
    getForecast: builder.query({
      query: (city) => ({
        url: `forecast`,
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
          lang: 'pl',
        },
      }),
    }),
    getCityName: builder.query({
      query: (searchTerm) => ({
        url: 'find',
        params: {
          q: searchTerm,
          appid: API_KEY,
          units: 'metric',
          lang: 'pl',
        },
      }),
    }),
  }),
});

export const { useGetWeatherQuery, useGetCityNameQuery, useGetForecastQuery } = api;
