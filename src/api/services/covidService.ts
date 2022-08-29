import { INews, IVaccine } from "../../interfaces";
import { api } from "../api";

const covidService = api.injectEndpoints({
  endpoints: (builder) => ({
    news: builder.query<INews[], {}>({
      query: () => ({
        url: `/news`,
        method: 'GET',
        validateStatus: (response) => response.status === 200,
      }),    
    }),
    vaccines: builder.query<IVaccine[], {}>({
      query: () => ({
        url: `vaccines`,
        method: 'GET',
      })
    }),
  })
})

export const {
  useNewsQuery,
  useVaccinesQuery
} = covidService
