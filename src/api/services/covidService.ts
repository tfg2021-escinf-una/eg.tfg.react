import { config } from "../../config";
import { INews, IVaccine } from "../../interfaces";
import { api } from "../api";

const { gatewayCovidPrefix } = config

const covidService = api.injectEndpoints({
  endpoints: (builder) => ({
    news: builder.query<{ news: INews[] }, {}>({
      query: () => ({
        url: `${gatewayCovidPrefix}/news`,
        method: 'GET',
        validateStatus: (response) => response.status === 200,
      }),    
    }),
    vaccines: builder.query<IVaccine[], {}>({
      query: () => ({
        url: `${gatewayCovidPrefix}/vaccines`,
        method: 'GET',
      })
    }),
  })
})

export const {
  useNewsQuery,
  useVaccinesQuery
} = covidService
