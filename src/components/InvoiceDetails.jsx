import React from "react";
import { InvoiceContext } from "./Invoice";
import { v4 as uuidv4 } from "uuid";
import sendInvoiceBtnImg from "./mail1.png";

export default function InvoiceDetails() {
  const {
    taskSelection,
    total,
    taskClicked,
    handleAddTask,
    handleRemoveTask,
    handleSendInvoice,
    invoiceSent,
    invoiceBtnTxt,
  } = React.useContext(InvoiceContext);

  return (
    <div className="invoice-details-container">
      <div className="add-a-task-btn-container">
        {taskSelection.map((task) => (
          <div key={task.id}>
            <button
              className="add-task-btn"
              onClick={() => handleAddTask(task)}
            >
              {task.task} ${task.price}
            </button>
          </div>
        ))}
      </div>

      <div className="total-top-line">
        <p>TASK</p>
        <p>TOTAL</p>
      </div>

      <div className="ordered-tasks-container">
        {taskClicked.map((selection) => {
          return (
            <div key={uuidv4()} onClick={() => handleRemoveTask(selection)}>
              <p>
                {selection.task} <span>Remove</span>
              </p>
              <p>
                <span>$</span>
                {selection.price}
              </p>
            </div>
          );
        })}
      </div>

      <span className="divider-line"></span>

      <div className="total-top-line">
        <p>NOTES</p>
        <p>TOTAL AMOUNT</p>
      </div>

      <div className="total-amount-container">
        {taskClicked.length > 0 && (
          <p>We accept cash, credit card, or PayPal</p>
        )}
        <p>${total}</p>
      </div>

      <button className="send-invoice-btn" onClick={handleSendInvoice}>
        {!invoiceSent && (
          <img className="send-invoice-btn-img" src={sendInvoiceBtnImg} />
        )}
        {invoiceBtnTxt}
      </button>
    </div>
  );
}
