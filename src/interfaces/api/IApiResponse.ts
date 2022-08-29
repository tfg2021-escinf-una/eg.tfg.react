export interface IApiResponse<T> {
  data: T,
  errors: [],
  statusCode: number
}
