import React from 'react'

interface CountriesDetailProps {
    label: string;
    detail?: { name: string }[] | any;
}
const CL: React.FC<CountriesDetailProps> = ({label, detail}) => {
  return (
    <div className="flex gap-2">
    <h3 className="font-semibold tracking-wide">{label}: </h3>
    <div className='flex gap-2'>
        {detail?.map((det: any, index: number) => (
            <span key={index}>{det}</span>
        ))}
    </div>
  </div>
  )
}

export default CL