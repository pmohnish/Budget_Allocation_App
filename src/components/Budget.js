import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,expenses, currency, dispatch } = useContext(AppContext);
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

    const changeBudget = () => {
        dispatch({
            type:'SET_BUDGET',
            payload: newBudget
        });

    }

    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<div id="change-budget-form">
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
    <button className='btn btn-primary' style={{backgroundColor:'lightblue'}} onClick={changeBudget}>Change Budget</button>
</div>

</div>
    );
};
export default Budget;
