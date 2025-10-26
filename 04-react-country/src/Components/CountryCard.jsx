import React from 'react';

const CountryCard = ({ country }) => {
    const languages = Object.values(country.languages || {}).join(', ');
    const currency = Object.values(country.currencies || {})[0]?.name;

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body text-center">
                <img src={country.flags.svg} alt={country.name.common} className="mb-3" style={{ width: '100px' }} />
                <h5 className="card-title">{country.name.common}</h5>
                <p className="card-text"><strong>Capital:</strong> {country.capital?.[0]}</p>
                <p className="card-text"><strong>Region:</strong> {country.region}</p>
                <p className="card-text"><strong>Population:</strong> {country.population.toLocaleString()}</p>
                <p className="card-text"><strong>Languages:</strong> {languages}</p>
                <p className="card-text"><strong>Currency:</strong> {currency}</p>
            </div>
        </div>
    );
};

export default CountryCard;