import { NavLink } from "react-router-dom";

export const CountryCard= ({country})=> {

    const  {flags,name, population,region, capital}  = country ;


    return <li className="country-card  card " >

        <div className="container-card bg-white-box">
        <img src={country?.flags?.svg} alt={country?.name?.common} width={100} />
            <div className="countryInfo">
                <p className="card-title">  {name.common.length > 10 ? name.common.slice(0, 10) + "..." : name.common}
                </p>
                <p>

                <span className="card-description"> Population:</span>
                {population.toLocaleString()}
                </p>

                <p>
                    <span className="card-description">Region</span>{region}
                </p>
                <p>
                    <span className="card-description">Capital</span>{capital[0]}
                </p>

                <NavLink to={`/Country/${name.common}`}>
                    <button>
                        Read More
                    </button>
                </NavLink>

            </div>

        </div>
    </li>

}



// export const CountryCard = ({ country }) => {
//     return (
//       <li className="country-card">
//         <img src={country?.flags?.svg} alt={country?.name?.common} width={100} />
//         <h3>{country?.name?.common}</h3>
//         <p>Capital: {country?.capital?.[0] || "N/A"}</p>
//         <p>Region: {country?.region}</p>
//         <p>Population: {country?.population.toLocaleString()}</p>
//       </li>
//     );
//   };
  