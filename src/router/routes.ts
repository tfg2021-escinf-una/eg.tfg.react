import React from "react"
import { 
  AuthCovidNews,
  AuthHome,
  Login,
  Informative,
  Register,
  AuthCities,
  AuthProfile,
  AuthMail
} from "../pages"

/**
 * Here we are going to define all the routes of the application.
 * Also, if there are pages that need to be decorated with our authentication hoc,
 * this is the place to do it.
 */

export const routeConfig = [
  {
    path: '/',
    element : React.createElement(Informative),
    exact: true
  },
  {
    path: '/home',
    element : React.createElement(AuthHome),
    exact: true
  },
  {
    path: '/login',
    element : React.createElement(Login),
    exact: true
  },
  {
    path: '/covid',
    element: React.createElement(AuthCovidNews),
    exact: true
  },
  {
    path: '/register',
    element: React.createElement(Register),
    exact: true,
  },
  {
    path: '/cities',
    element: React.createElement(AuthCities),
    exact: true,
  },
  {
    path: '/profile',
    element: React.createElement(AuthProfile),
    exact: true
  },
  {
    path: '/mail',
    element: React.createElement(AuthMail),
    exact: true,
  },
  {
    path: "*",
    element : React.createElement('div', {}, '404 - Not Found Page')
  }
]
