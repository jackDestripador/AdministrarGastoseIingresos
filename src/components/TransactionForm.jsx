import { useState } from "react";

function TransactionForm() {
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(description, amount);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresa una descripción"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="0.00"
          step="0.01"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Add Transacrion</button>
      </form>
    </div>
  );
}

export default TransactionForm;
