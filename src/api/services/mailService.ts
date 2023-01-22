import { config } from "../../config";
import { IMail } from "../../interfaces";
import { api } from "../api";

const { gatewayMailPrefix } = config

const mailService = api.injectEndpoints({
  endpoints: (builder) => ({
    sendEmail: builder.query<any, IMail>({
      query: (mail) => ({
        method: 'POST',
        url: `${gatewayMailPrefix}/send`,
        body: mail,
        validateStatus: (response) => response.status === 200
      })
    }),
  })
})

export const {
  useLazySendEmailQuery
} = mailService
