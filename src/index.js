import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoiceList from "./InvoiceList";
import Error from "./Error";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<InvoiceList />} />
          <Route path="/invoice/:invoiceNumber" element={<App />} />
          <Route path="/invoice/*" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
