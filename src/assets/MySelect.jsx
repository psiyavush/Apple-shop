import React from 'react';

const MySelect = ({setSort, options, defaultValue}) => {
    return (
        <select onChange={e => setSort(e.target.value)} className='home__select'>
            <option selected disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>    
            )}
        </select>
    );
};

export default MySelect;