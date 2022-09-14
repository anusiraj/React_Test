import React from 'react';

const Button = (props) => {
    return(
        <button className='button' onClick={() => props.onClick()}>
            MORE DETAILS            
        </button>
    

    );
}

export default Button;
