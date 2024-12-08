import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CountryPage = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
            .then((res) => {
                setCountry(res.data[0]);
            });
    }, [countryName]);

    if (!country) return <p>Loading...</p>;

    const { name, subregion, currencies, languages, borders } = country;
    const currencyName = currencies ? Object.values(currencies)[0].name : 'N/A';
    const languageNames = languages ? Object.values(languages).join(', ') : 'N/A';

    return (
        <div className="details">
            <h1>{name.common}</h1>
            <p>Native name: {Object.values(name.nativeName || {})[0]?.common || 'N/A'}</p>
            <p>Sub Region: {subregion || 'N/A'}</p>
            <p>Currency Name: {currencyName}</p>
            <p>Language Names: {languageNames}</p>
            <p>Border Countries: {borders ? borders.join(', ') : 'N/A'}</p>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default CountryPage;
