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

  if (invoiceList.length === 0) {
    return (
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Container>
          <h1>No Invoice is Found</h1>

          <Button
            variant="primary"
            size="xl"
            onClick={() => dispatch(addInvoice())}
          >
            Create Invoice
          </Button>
        </Container>
      </div>
    );
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
