import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { TfgThemeProvider } from './components/themes/TfgThemeProvider';
import { store } from './redux';
import reportWebVitals from './reportWebVitals';
import { ApplicationRouter } from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0px;
    min-height: 100vh;
    overflow-x: hidden;
  }
`

root.render(
  <React.StrictMode>
    <TfgThemeProvider mode={"dark"}>
      <GlobalStyles />
      <Provider store={store}>
        <ApplicationRouter/>
      </Provider>
    </TfgThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
