import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import InvoiceForm from "./components/InvoiceForm";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addInvoice } from "./redux/reducers/updateInvoiceList";
import ViewInvoiceList from "./components/ViewInvoiceList";

const App = () => {
  const { invoiceNumber } = useParams();
  const { invoiceList } = useSelector((state) => state);
  const dispatch = useDispatch();
  if (
    isNaN(invoiceNumber) ||
    invoiceNumber < 1 ||
    invoiceNumber > invoiceList.length
  ) {
    return <ViewInvoiceList />;
  }

  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>
        <InvoiceForm />
      </Container>
    </div>
  );
};

export default App;
