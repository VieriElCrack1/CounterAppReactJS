import React from 'react'
import PropTypes from 'prop-types';

export default function CounterApp( { value }) {
    return (
        <>
            <h1>CounterApp</h1>
            <h1>{ value }</h1>
        </>
    )
}

CounterApp.PropTypes = {
    value: PropTypes.number.isRequired
}