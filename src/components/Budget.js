import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    
    const { dispatch, budget } = useContext(AppContext);

    const [newBudget, setnewBudget] = useState(budget);

    const handleChange = (e) => {
        if (isNaN(e.target.value)) {
            return            
        }else{            
            const onlyNums = parseInt(e.target.value);            
            if (!isNaN(onlyNums)){
                const parte = (onlyNums > newBudget) ? 10 : -10;
                
                setnewBudget(newBudget + parte);
                dispatch({
                    type: 'SET_BUDGET',
                    payload: newBudget,
                });
            }            
        }        
      };    

    return (
        <div className='alert alert-secondary'>

            <span>Budget: £

            <input
                required='required'
                type='number'
                id='cost'
                value={newBudget}
                style={{ size: 10}}
                onChange={(event) => handleChange(event)}
                >
            </input>            

            </span>
        </div>
    );
};
export default Budget;