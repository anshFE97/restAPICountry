import React from "react";
import Counitries from "./Counitries";

interface ListProps {
  countries?: string[] | any
  setOneCountry: React.Dispatch<React.SetStateAction<string>>
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
  darkMode: boolean;
}

const List: React.FC<ListProps> = ({countries, setOneCountry, setToggle, darkMode}) => {
  return (
    <div>
      <div
        className="
      grid 
      gap-6 
      lg:gap-8 
      mt-4 
      px-12
      md:px-0
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3
      lg:grid-cols-4 
      xl:grid-cols-5 
      "
      >
        {countries?.map((country: string[], index: number) => (
          <Counitries darkMode={darkMode} setToggle={setToggle} setOneCountry={setOneCountry} key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default List;
