declare global {
  interface Window {
    env: { 
      [ key: string ] : string 
    }
  }
}

export const config = {
  NODE_ENV: process.env['NODE_ENV'],
  APIBaseUrl: window.env.apiBaseUrl,
  gatewayIdpPrefix: window.env.gatewayIdpPrefix,
  gatewayCovidPrefix: window.env.gatewayCovidPrefix,
  gatewayGeocitiesPrefix: window.env.gatewayGeocitiesPrefix,
}
