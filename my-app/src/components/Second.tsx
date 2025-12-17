import React from 'react';
import { Link } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import '../App.css';


function Second() {
    return (
        <div className="App">
            <header className="App-header">
            <p>Second Component</p>
            <p>
                <Link to="/">Go to Main</Link>
            </p>
            </header>
        </div>
    )
}

export default Second;