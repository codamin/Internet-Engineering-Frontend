import React from 'react'
import './spinner.css'

function Spinner(props) {
    return(
        <div class="spinner-border align-self-center" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    )
}

export default Spinner;