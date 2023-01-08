import { config } from "../../config";
import { IApiResponse } from "../../interfaces";
import { api } from "../api";

const { gatewayGeocitiesPrefix } = config

const citiesService = api.injectEndpoints({
  endpoints: (builder) => ({
    getCountries: builder.query<IApiResponse<any>, any>({
      query: () => `${gatewayGeocitiesPrefix}/countries`
    })
  })
})

export const {
  useLazyGetCountriesQuery,
} = citiesService
