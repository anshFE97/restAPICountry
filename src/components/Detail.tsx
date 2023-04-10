import React from "react";
import CountriesDetail from "./CountriesDetail";
import CL from "./CL";
import Borders from "./Borders";

interface DetailProps {
    country?: string[] | any;
}

const Detail: React.FC<DetailProps> = ({country}) => {
  const detail = country[0]


  return (
    <div className="flex">
      <div className="flex flex-col justify-center gap-4">
        <div className="md:text-2xl sm:text-xl font-bold tracking-wider">
          <h1>{detail?.name?.common}</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className=" flex flex-col gap-2 i m-2">
            <CountriesDetail label="Native Name" detail={detail?.name?.nativeName?.eng?.common} />
            <CountriesDetail label="Population" detail={detail?.population} />
            <CountriesDetail label="Region" detail={detail?.region} />
            <CountriesDetail label="Sub Region" detail={detail?.subregion} />
            <CountriesDetail label="Capital" detail={detail?.capital[0]} />
          </div>
          <div className=" flex flex-col gap-2 i m-2">
            <CountriesDetail label="Top Level Domain" detail={detail?.tld[0]} />
            {/* <CL label="Currencies" detail={detail?.currencies[0]} /> */}
            {/* <CL label="Languages" detail={getLang} /> */}
          </div>
        </div>
        {
          detail?.borders && (
            <div className="flex gap-2 md:flex-row justify-center md:items-center flex-col">
            <div className="font-semibold m-2">Border Countries:</div>
            <div className="flex flex-wrap gap-2">
              <Borders borders={detail?.borders} />
            </div>
          </div>
          )
        }
      </div>
    </div>
  );
};

export default Detail;
