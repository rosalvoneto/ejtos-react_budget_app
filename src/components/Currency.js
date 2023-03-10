import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    
    const { dispatch, currency } = useContext(AppContext);

    const handleChange = (e) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value,
        });
      };    

    return (
        <div className='alert alert-secondary'>

            <span> {currency}

            <input
                required='required'
                type='number'
                id='cost'
                value={budget}
                style={{ size: 10}}
                onChange={(event) => handleChange(event)}
                >
            </input>            

            </span>
        </div>
    );
};
export default Currency;