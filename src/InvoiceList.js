import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { BiSolidDuplicate } from "react-icons/bi";
import { Link } from "react-router-dom";
import InvoiceModal from "./components/InvoiceModal";
import {
  addInvoice,
  duplicateInvoice,
} from "./redux/reducers/updateInvoiceList";
import { useState } from "react";
import { updateField, deleteInvoice } from "./redux/reducers/updateInvoiceList";

const InvoiceList = () => {
  const { invoiceList } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [localInvoiceId, setLocalInvoiceId] = useState(1);

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
      <Container className="invoiceList-container">
        {invoiceList &&
          invoiceList.length !== 0 &&
          invoiceList.map((invoice, index) => {
            return (
              <Card style={{ width: "28rem" }} key={invoice.invoiceNumber}>
                <Card.Body>
                  <Card.Title
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {invoice.billTo !== "" ? invoice.billTo : "Untitled"}
                    {
                      <BiSolidDuplicate
                        onClick={() => {
                          dispatch(
                            duplicateInvoice({
                              ...invoice,
                              invoiceNumber: invoiceList.length + 1,
                            })
                          );
                        }}
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    }
                  </Card.Title>
                  <Card.Text>
                    {invoice.billFrom !== "" ? invoice.billFrom : "Untitled"}
                  </Card.Text>
                  <Card.Text>
                    Due Date:{" "}
                    {invoice.dateOfIssue !== ""
                      ? invoice.dateOfIssue
                      : "Untitled"}
                  </Card.Text>
                  <Card.Text>
                    {invoice.total !== "" ? (
                      <>
                        <span className="fw-bold">Total:</span>
                        <span className="fw-bold">
                          {invoice.currency}
                          {invoice.total || 0}
                        </span>
                      </>
                    ) : (
                      "No total found"
                    )}
                  </Card.Text>
                  <div className="">
                    <Link to={`/invoice/${invoice.invoiceNumber}`}>
                      <Button variant="primary" size="sm">
                        Edit Invoice
                      </Button>
                    </Link>
                    <Button
                      onClick={() => {
                        dispatch(
                          updateField({
                            name: "isOpen",
                            value: true,
                            invoiceId: invoice.invoiceNumber - 1,
                          })
                        );
                        setLocalInvoiceId(invoice.invoiceNumber);
                      }}
                      style={{
                        marginLeft: "10px",
                      }}
                      variant="outline-success"
                      size="sm"
                    >
                      View Invoice
                    </Button>
                    <Button
                      onClick={() => {
                        dispatch(
                          deleteInvoice({
                            index,
                          })
                        );
                      }}
                      style={{
                        marginLeft: "10px",
                      }}
                      variant="outline-danger"
                      size="sm"
                    >
                      Delete Invoice
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        {!invoiceList && (
          <div className="">
            <h1>No invoices found</h1>
            <Button variant="primary" onClick={() => dispatch(addInvoice())}>
              Create Invoice
            </Button>
          </div>
        )}
      </Container>
      <InvoiceModal invoiceId={localInvoiceId} />
    </div>
  );
};

export default InvoiceList;
