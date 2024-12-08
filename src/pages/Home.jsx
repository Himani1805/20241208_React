import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card"

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [region, setRegion] = useState('');
    const [sortBy, setSortBy]= useState('');

    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then((res)=>{
            setCountries(res.data);
        });
    }, []);

    const filteredCountries = countries
    .filter((country)=> (region ? country.region === region : true))
    .sort((a,b) =>
      sortBy === 'population' ? b.population - a.population : 0
    );
    return(
        <div className="home">
            <div className="controls">
                <select onChange={(e) => setRegion(e.target.value)} name="" id="">
                    <option value="">Filter by Region</option>
                    {[...new Set(countries.map((c) => c.region))].map((r)=> (
                        <option key={r}>{r}</option>

                    ))}
                </select>
                <button onClick={()=> setSortBy('Population')}>Sort by Population</button>
            </div>
            <div>
                {filteredCountries.map((country) => (
                    <Card key={country.cca3} country={country}/>
                ))}
            </div>
        </div>
    );
};
export default Home;