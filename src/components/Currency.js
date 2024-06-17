import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const {currency,dispatch} = useContext(AppContext);
    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    }
    return(
        <div className='btn btn-primary' style={{display:'flex',alignItems:'center',width:"200px", backgroundColor:'green'}}>
            
            <span style={{marginRight:'10px'}}>Currency:</span>
            <select style={{paddingRight:'8px', backgroundColor:'darkslateblue'}} value={currency} className='btn btn-primary'  onChange={handleCurrencyChange}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>

    );
}

export default Currency;