import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { config } from '../config'
import { RootState } from '../redux'

// Getting our baseUrl gateway link.
const { gatewayBaseUrl } = config

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: gatewayBaseUrl,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const { identity } = (getState() as RootState).sessionReducer
    if (identity && identity.tokens) {
      headers.set('Authentication', `Bearer ${identity.tokens}`)
    }
    headers.set('Content-Type', 'application/json')
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 })

/**
 * Create a base API to inject endpoints into elsewhere.
 * Components using this API should import from the injected site,
 * in order to get the appropriate types,
 * and to ensure that the file injecting the endpoints is loaded 
 */
export const api = createApi({
  /**
   * `reducerPath` is optional and will not be required by most users.
   * This is useful if you have multiple API definitions,
   * e.g. where each has a different domain, with no interaction between endpoints.
   * Otherwise, a single API definition should be used in order to support tag invalidation,
   * among other features
   */
  reducerPath: 'api',
  /**
   * A bare bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
   */
  baseQuery: baseQueryWithRetry,
  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  tagTypes: ['Session'],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  endpoints: () => ({}),

})
