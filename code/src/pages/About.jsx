// import  countryFact from   "../api/countryData.json";
// import "./About.css";

// export const  About  = () => {



//     return  <section className="section-about container">
//         <h2 className="container-title">
//             Here  are the Interesting  Facts <br/>
//             We are  Proud of 
//         </h2>

//         <div className="gradient-cards">
//                {/* forloop */}

//                {countryFact.map((country)=>{
//                 const {id,countryName,capital,population,interestingFact}= country
//                  return (

               
//             <div className="card" key={id}>
//                 <div className="container-card bg-blue-box">
//                     <p className="card-title">{countryName}
//                     </p>

//                     <p>
//                     <span className="card-description ">Capital</span>
//                        {capital}
//                     </p>



//                     <p>
//                     <span className="card-description ">Population</span>
//                       {population}
//                     </p>




//                     <p>
//                     <span className="card-description ">InterestingFact</span>
//                        {interestingFact}
//                     </p>


//                 </div>

//             </div>

//                 )
//                  })}

//         </div>



//     </section>
// }
















import countryFact from "../api/countryData.json";
import "./About.css";

export const About = () => {
    return (
        <section className="about-section">
            <div className="about-container container">
                <h2 className="about-title">
                    Here are the Interesting Facts <br/>
                    We are Proud of
                </h2>

                <div className="gradient-cards">
                    {countryFact.map((country) => {
                        const {id, countryName, capital, population, interestingFact} = country;
                        return (
                            <div className="card" key={id}>
                                <div className="card-content bg-blue-box">
                                    <p className="card-title">{countryName}</p>
                                    <p>
                                        <span className="card-description">Capital</span>
                                        {capital}
                                    </p>
                                    <p>
                                        <span className="card-description">Population</span>
                                        {population}
                                    </p>
                                    <p>
                                        <span className="card-description">Interesting Fact</span>
                                        {interestingFact}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};