
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextProvider from './Features/ContextProvider';
import global_en from "./translations/en/global.json"
import global_am from "./translations/am/global.json"
import global_ru from "./translations/ru/global.json"
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: {escapeValue: false},
  lng:"en",
  resources:{
    en:{
      global: global_en
    },
    am:{
      global: global_am
    },
    ru:{
      global: global_ru
    }
  }
})


const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ContextProvider>
     <I18nextProvider i18n={i18next}>
     <App />
     </I18nextProvider>
 

</ContextProvider>
);


