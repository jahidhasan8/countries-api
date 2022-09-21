

import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props);
    const {name,area,region,flags}=props.country
    
    return (
        <div className='country'>
            <h2>Country Name: {name.common} </h2>
            <h2>Area : {area}</h2>
            <h2>Region : {region}</h2>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;