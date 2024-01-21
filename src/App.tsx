import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/global-styles";
import AppRoutes from "./app.routes";
import { Provider } from "react-redux";
import {  store } from "./store";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
      <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
      </Provider>
    </>
  );
}
