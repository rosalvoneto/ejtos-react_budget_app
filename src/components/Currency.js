import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
//import Select from '@mui/material/Select';

const Currency = () => {
    
    const { dispatch } = useContext(AppContext);
        
    const handleChange = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
      };    

    return (
        <div className='alert alert-secondary'>

            <span
            className='btn btn-success'
            > Currency 

            <select class='selectpicker' data-style="btn-success"
                className='btn btn-success dropdown-toggle'
                name="Location" 
                id="Location" 
                //style={{background: "green", color: 'green'}}
                onChange={event=>handleChange(event.target.value)}
            >
                <option style={{background: '#5cb85c', color: '#fff'}} value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Europe</option>
                <option value="₹">₹ Ruppee</option>                
            </select>

            </span>
        </div>
    );
};
export default Currency;