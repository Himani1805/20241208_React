import { Link } from 'react-router-dom';

const Card = ({ country}) => {
    const { name, flags, population, region, capital} = country;
    return(
        <div className='card'>
            <img src={flags.png} alt={name.common} />
            <h2>{name.common}</h2>
            <p>Population : {population.toLocaleString()}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital || 'N/A'}</p>
            <Link to={`/${name.common}`}>
                <button>More Details</button>
            </Link>
        </div>
    );
};
export default Card;