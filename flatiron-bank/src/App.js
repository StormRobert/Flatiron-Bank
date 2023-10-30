import React from 'react';
import './App.css';
import TableRowTransaction from './components/TableRowTransaction';
import { useState, useEffect } from "react";
import TransactionForm from './components/FormTransaction';
import TableTransaction from './components/TableTransaction';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <h1>Flatiron Bank </h1>
      </header>
    </div>
  );
}

export default App;
