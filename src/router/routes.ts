import React from "react"
import { Login } from "../pages"
/**
 * Here we are going to define all the routes of the application.
 * Also, if there are pages that need to be decorated with our authentication hoc,
 * this is the place to do it.
 */

export const routeConfig = [
  {
    path: '/',
    element : React.createElement('div', {}, 'HomePage'),
    exact: true
  },
  {
    path: '/login',
    element : React.createElement(Login),
    exact: true
  },
  {
    path: "*",
    element : React.createElement('div', {}, '404 - Not Found Page')
  }
]
