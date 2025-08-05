import { useState } from 'react';
import PropTypes from 'prop-types';


export default function CounterApp({ value }) {
    
    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
        setCounter( counter + 1 );
        // setCounter( () => counter+1)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h1>{ counter }</h1>

            <button onClick={ handleAdd }>
                +1
            </button>
        </>
    )
}

CounterApp.PropTypes = {
    value: PropTypes.number.isRequired
}