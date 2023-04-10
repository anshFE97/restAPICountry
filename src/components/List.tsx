import React from "react";
import Counitries from "./Counitries";

interface ListProps {
  countries?: string[] | any
}

const List: React.FC<ListProps> = ({countries}) => {
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
          <Counitries key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default List;
