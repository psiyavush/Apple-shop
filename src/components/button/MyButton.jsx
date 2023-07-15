import React from 'react';

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} type='button'>
            {children}
        </button>
    );
};

export default MyButton;