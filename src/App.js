import React from 'react';
import {Header,Balance,IncomeExpense,TransSectionList,AddTranSection} from "./components/rapperAll/index";
import './components/styles/GlobalStyles.css';

function App() {
  return (
<div>
  <Header/>
  <div className="container">
    <Balance/>
    <IncomeExpense/>
    <TransSectionList/>
    <AddTranSection/>
  </div>
</div>
  );
}

export default App;