import React from "react";
import Invoice from "./components/Invoice";
import Header from "./components/Header";
import InvoiceDetails from "/Users/dprice17/Documents/React/invoicecreator/invoicecreator/src/components/InvoiceDetails.jsx";

export default function App() {
  return (
    <div className="container">
      <Invoice>
        <Header />
        <InvoiceDetails />
      </Invoice>
    </div>
  );
}
