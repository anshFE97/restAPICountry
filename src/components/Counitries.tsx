import CountriesDetail from "./CountriesDetail";

interface CountriesProps {
  country?: string[] | any;
  setOneCountry: React.Dispatch<React.SetStateAction<string>>;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
  darkMode: boolean;
}

const Counitries: React.FC<CountriesProps> = ({ country, setOneCountry, setToggle, darkMode }) => {
  return (
    <div 
        onClick={() => {setOneCountry(country.cca3), setToggle(true)}}
    className={`${darkMode ? 'bg-[#2B3945]' : 'bg-white'} rounded-md cursor-pointer transform hover:scale-105 transition xs:w-[320px]`}>
      <div className="h-[100%]">
        <div className="h-[50%]">
          <img
            src={country.flags.svg}
            alt="demo"
            className="rounded-t-md object-cover h-full w-full"
          />
        </div>
        <div className="h-[50%] flex flex-col gap-2 px-6 py-8 md:p-6 xs:text-xs sm:text-sm md:text-md lg:text-md">
          <div className="font-bold tracking-wide py-2 ">
            <h2>{country.name.common}</h2>
          </div>
          <div className="flex flex-col gap-1">
            <CountriesDetail label="Popluation" detail={country.population} />
            <CountriesDetail label="Region" detail={country.region} />
            <CountriesDetail label="Capital" detail={country.capital} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counitries;
