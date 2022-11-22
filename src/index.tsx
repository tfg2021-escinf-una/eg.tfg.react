import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { TfgThemeProvider } from './components/themes/TfgThemeProvider';
import { persistor, store } from './redux';
import reportWebVitals from './reportWebVitals';
import { ApplicationRouter } from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <TfgThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApplicationRouter/>
        </PersistGate>   
      </Provider>
    </TfgThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
