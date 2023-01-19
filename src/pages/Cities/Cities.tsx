import ReactJson from "react-json-view";
import { PayloadAction, useLocalSlice } from "use-local-slice";
import { useLazyGetCountriesByCurrencyQuery, useLazyGetCountryByIdQuery, useLazyGetCountryRegionsQuery } from "../../api";
import { Grid, GridItem, InputField, Typography, withAuthentication } from "../../components"
import { ICountry, ICountryRegion } from "../../interfaces";
import { StyledGridCities } from "./Cities.styles";
 
type CountryDef = Pick<ICountry,
    "name" 
  | "currencyCodes"
  | "wikiDataId" 
  | "code">;

interface ICitiesState {
  countries: CountryDef []
  country: ICountry | null,
  regions: ICountryRegion [],
}

const initialState: ICitiesState = {
  countries: [],
  country: null,
  regions: [],
}

const Cities = () => { 
  const [ getCountriesByCurrency ] = useLazyGetCountriesByCurrencyQuery()
  const [ getCountryById ] = useLazyGetCountryByIdQuery()
  const [ getCountryRegions ] = useLazyGetCountryRegionsQuery()
  const [{
    countries,
    country,
    regions
  }, dispatcher ] = useLocalSlice({
    initialState: initialState,
    reducers: {
      setCountries: (state, action: PayloadAction<CountryDef []>) => ({ ...state, countries: action.payload }),
      setRegions: (state, action: PayloadAction<ICountryRegion []>) => ({ ...state, regions: action.payload }),
      setCountry: (state, action: PayloadAction<ICountry>) => ({ ...state, country: action.payload })
    }
  });

  const onChangeCurrencyField = async (currency: string) => {
    if(currency.length === 3){
      const {
        data: {
          data: countries
        }
      } = await getCountriesByCurrency({
        currencyCode: currency.toUpperCase()
      }).unwrap();
      dispatcher.setCountries(countries) 
    }
  } 

  const onChangeCountryWikiId = async (wikiDataId: string) => {
    if(wikiDataId.length >= 4){
      const {data: { data: country }} = await getCountryById({
        countryId: wikiDataId
      }).unwrap();

      dispatcher.setCountry(country)
      await new Promise(resolve => setTimeout(resolve, 5000))
      
      const {data: { data: regions }} = await getCountryRegions({
        countryId: wikiDataId,
        limit: 10
      }).unwrap()

      dispatcher.setRegions(regions) 
    }
  } 

  return (
    <StyledGridCities>
      <GridItem sm={12}
                md={12}
                justify="center">
        <Grid justify="center"
              alignItems="stretch"
              spacing={4}>
          <GridItem sm={12}
                    alignItems="center"
                    justify="center">
            <Typography as="h2"
                        size="lg"
                        weight="bolder"
                        textAlign="center">
              Utilize los campos de texto para realizar una llamada al Geocities API              
            </Typography>
          </GridItem>
          <GridItem sm={12}
                    md={4}
                    lg={5}>
            <InputField placeholder="Escriba un tipo de moneda... CRC | USD | AUD"
                        onChange={(event) => onChangeCurrencyField(event.target.value)}/>  
            <ReactJson src={countries}
                       collapsed
                       theme="solarized" />       
          </GridItem>
          <GridItem sm={12}
                    md={4}
                    lg={5}>
            <InputField placeholder="Escriba el wikiDataId obtenido de la consulta anterior... Q800"
                        onChange={(event) => onChangeCountryWikiId(event.target.value)}/>  
            <ReactJson src={country ?? {}}
                       theme="solarized" />       
          </GridItem>
        </Grid>      
        { regions.length > 0 && 
          <Grid justify="center"
              alignItems="stretch"
              spacing={4}>
            <GridItem sm={12}
                      md={8}
                      lg={10}>
              <ReactJson src={regions}
                        collapsed
                        theme="solarized" />       
            </GridItem>
          </Grid>
        }  
      </GridItem>
    </StyledGridCities>
  )
}

export const AuthCities = withAuthentication(Cities);
