import React from "react";

interface CountriesDetailProps {
    label: string;
    detail?: string | number | undefined;
}

const CountriesDetail: React.FC<CountriesDetailProps> = ({label, detail}) => {
  return (
    <div className="flex gap-2">
      <h3 className="font-semibold tracking-wide">{label}: </h3>
      <span>{detail}</span>
    </div>
  );
};

export default CountriesDetail;
