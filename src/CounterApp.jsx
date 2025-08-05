import React from 'react'
import PropTypes from 'prop-types';


export default function CounterApp({ value }) {
    
    const handleAdd = () => { 
        console.log('+1');
        value = 1000;
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h1>{ value }</h1>

            <button onClick={ handleAdd }>
                +1
            </button>
        </>
    )
}

CounterApp.PropTypes = {
    value: PropTypes.number.isRequired
}