import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LastLocationProvider } from "react-router-last-location";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { toast } from "react-toastify";
import { store, persistor } from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
toast.configure();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <LastLocationProvider>
            <App />
          </LastLocationProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
