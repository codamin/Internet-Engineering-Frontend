import React from 'react'
import './spinner.css'

function Spinner(props) {
    return(
        <div className="spinner-border align-self-center" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default Spinner;