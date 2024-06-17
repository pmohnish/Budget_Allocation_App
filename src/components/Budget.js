import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    let expenseTotal=0;
    for(let i=0;i<expenses.length;i++){
        expenseTotal += expenses[i].cost;
    }
    const handleBudgetChange = (event) => {
        if(event.target.value>20000){
            alert("The value should not exceed 20000");
        } else if(event.target.value<expenseTotal){
            alert("You cannot reduce the budget lower than spending");
        }
        else{
            setNewBudget(event.target.value);
        }

    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
