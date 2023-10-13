import React from "react";
import tasks from "./data";

const InvoiceContext = React.createContext();

export default function Invoice({ children }) {
  const [taskSelection, setTaskSelection] = React.useState(tasks);
  const [total, setTotal] = React.useState(0);
  const [taskClicked, setTaskClicked] = React.useState([]);
  const [invoiceBtnTxt, setInvoiceBtnTxt] = React.useState("Send invoice");
  const [invoiceSent, setInvoiceSent] = React.useState(false);

  function handleAddTask(selection) {
    const taskExists = taskClicked.some((task) => task.id === selection.id);

    if (!taskExists) {
      setTaskClicked((prev) => [...prev, selection]);
      setTotal((prev) => prev + selection.price);
    }
  }

  function handleRemoveTask(selection) {
    const filteredTasks = taskClicked.filter(
      (task) => task.id !== selection.id
    );
    setTaskClicked(filteredTasks);
    setTotal((prev) => prev - selection.price);
  }

  function handleSendInvoice() {
    setInvoiceSent(true);
    setInvoiceBtnTxt("...Sending invoice");
  }

  React.useEffect(() => {
    let timeout1, timeout2;

    if (invoiceSent) {
      timeout1 = setTimeout(() => {
        setTaskClicked([]);
        setTotal(0);
        setInvoiceBtnTxt("Invoice sent");
      }, 2000);

      timeout2 = setTimeout(() => {
        setInvoiceBtnTxt("Send invoice");
        setInvoiceSent(false);
      }, 4000);
    }
  }, [invoiceSent]);

  return (
    <InvoiceContext.Provider
      value={{
        taskSelection,
        total,
        taskClicked,
        handleAddTask,
        handleRemoveTask,
        handleSendInvoice,
        invoiceSent,
        invoiceBtnTxt,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}

export { InvoiceContext };
