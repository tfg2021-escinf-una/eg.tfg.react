import { BrowserRouter, Route, Routes } from "react-router-dom";
import { withBaseWrapper } from "../components";
import { routeConfig } from "./routes";

const AppWrapper = withBaseWrapper(
  ({ children } : any) => (<>{ children }</>)
);

export const ApplicationRouter = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          { routeConfig.map((route, index) => (
              <Route key={index} {...route} /> )
            )
          }
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  )
};
