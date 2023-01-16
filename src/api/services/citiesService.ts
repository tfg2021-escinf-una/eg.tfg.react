import { config } from "../../config";
import { IApiResponse, ICountry, ICountryRegion } from "../../interfaces";
import { api } from "../api";

const { gatewayGeocitiesPrefix } = config

const citiesService = api.injectEndpoints({
  endpoints: (builder) => ({
    getCountriesByCurrency: builder.query<IApiResponse<{ data: ICountry[] }>, any>({
      query: ({ currencyCode }) => `${gatewayGeocitiesPrefix}/countries?currencyCode=${currencyCode}`
    }),
    getCountryById: builder.query<IApiResponse<{data: ICountry}>, any>({
      query: ({countryId}) => `${gatewayGeocitiesPrefix}/countries/${countryId}`
    }),
    getCountryRegions: builder.query<IApiResponse<{ data: ICountryRegion [] }>, any>({
      query: ({countryId, limit}) => `${gatewayGeocitiesPrefix}/${countryId}/regions?limit=${limit}`
    })
  })
})

export const {
  useLazyGetCountriesByCurrencyQuery,
  useLazyGetCountryRegionsQuery,
  useLazyGetCountryByIdQuery
} = citiesService
