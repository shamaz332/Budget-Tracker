import React, { useContext } from 'react';
// import { Transaction } from './Trans';

import { GlobalContext } from '../context/GlobalState';

export const TransSectionList = () => {
  const { transactions } = useContext(GlobalContext);

  return ( 
<div>
  <h3>Transaction History</h3>
  <ul className="list">
<li className="plus">
p1 income
<span>$1</span>
<button className="delete-btn">X</button>
</li>
<li className="minus">
p2 exp
<span>-$50</span>
<button className="delete-btn">X</button>
</li>
  </ul>
</div>
  )
}