import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import TransactionForm from './components/FormTransaction';
import TableTransaction from './components/TableTransaction';
import SearchBar from './components/SearchBar';
import Header from './components/Header';


function App() {

  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/transactions') // Update the URL to match your JSON server endpoint.
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      })
  });

  const addTransaction = (newTransaction) => {
    // Simulate adding a new transaction to the local state (no backend persistence).
    const id = Date.now();
    const transaction = { id, ...newTransaction };
    setTransactions([...transactions, transaction]);
  };
  const filteredTransactions = transactions ? transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  const deleteTransaction = (id) => {
    // Simulate deleting a transaction from the local state (no backend persistence).
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <div className="App">
      {/* <header className="App-header">
     <h1>Flatiron Bank </h1>
      </header> */}
      <Header />
      <TableTransaction transactions={filteredTransactions} onDelete={deleteTransaction}/>
      <SearchBar onSearch={setSearchTerm}/>
      <TransactionForm onSubmit={addTransaction}/>


    </div>
  );
}

export default App;
