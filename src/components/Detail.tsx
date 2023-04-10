import React from "react";
import CountriesDetail from "./CountriesDetail";
import CL from "./CL";
import Borders from "./Borders";

interface DetailProps {
    country?: string | any;
}

const Detail: React.FC<DetailProps> = ({country}) => {
  const borders = country?.borders
  
  return (
    <div className="flex">
      <div className="flex flex-col justify-center gap-4">
        <div className="md:text-2xl sm:text-xl font-bold tracking-wider">
          <h1>{country.name}</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className=" flex flex-col gap-2 i m-2">
            <CountriesDetail label="Native Name" detail={country.nativeName} />
            <CountriesDetail label="Population" detail={country.population} />
            <CountriesDetail label="Region" detail={country.region} />
            <CountriesDetail label="Sub Region" detail={country.subregion} />
            <CountriesDetail label="Capital" detail={country.capital} />
          </div>
          <div className=" flex flex-col gap-2 i m-2">
            <CountriesDetail label="Top Level Domain" detail={country.topLevelDomain} />
            <CL label="Currencies" detail={country.currencies} />
            <CL label="Languages" detail={country.languages} />
          </div>
        </div>
        {
          borders && (
            <div className="flex gap-2 md:flex-row justify-center md:items-center flex-col">
            <div className="font-semibold m-2">Border Countries:</div>
            <div className="flex flex-wrap gap-2">
              <Borders borders={borders} />
            </div>
          </div>
          )
        }
      </div>
    </div>
  );
};

export default Detail;
