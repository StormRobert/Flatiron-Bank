import React from "react";
import { useState } from "react";
function TransactionForm({onSubmit}){
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ description, amount });
      setDescription('')
      setAmount('')
    }


return(
    <div>
         <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Transaction</button>
    </form>
    </div>
)

}
export default TransactionForm;