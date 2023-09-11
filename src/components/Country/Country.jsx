import './Country.css'
import { useState } from 'react';


const Country = ({ country, handleVisitedCountry,handleVisitedFlag}) => {
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }


//console.log(handleVisitedCountry);
return (
    <div className={`country ${visited && `visited`}`}>
        <h3>Country: {name?.common}</h3>
        <img src={flags.png} alt="" />
        <p>Population: {population}</p>
        <p>Area: {area}</p>
        <p><small>Code: {cca3}</small></p>
        <button onClick={() => handleVisitedFlag(country.flags)}>Add Flag</button> <br />
        <button onClick={() => handleVisitedCountry(country)}>Mark visited</button> <br />
        <button onClick={handleVisited}>Going</button>
        {visited ? 'I have visited this country' : 'I have not visited this country'}
    </div>
);
};

export default Country;