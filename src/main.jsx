import React from 'react'
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title='Hola cracks.' />
        {/* subTitle='123' */}
        {/* <FirstApp title='Hola cracks.' subTitle={ 123 } /> */}
    </React.StrictMode>
);