import React from 'react';
import {Header,Balance,IncomeExpense,} from "./components/rapperAll/index";
import './components/styles/GlobalStyles.css';

function App() {
  return (
<div>
  <Header/>
  <div className="container">
    <Balance/>
    <IncomeExpense/>
  </div>
</div>
  );
}

export default App;