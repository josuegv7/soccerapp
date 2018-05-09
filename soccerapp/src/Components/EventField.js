// EventField has logic to render a single label and text input
import React from 'react';


export default ({input, label, meta: { error, touched }}) => {
    return(
        <div>
            <label>{label}</label>
            < input { ...input
            }
            className= "form-control form-control-sm" 
            / >
            {touched && error}
        </div>
    )
}


