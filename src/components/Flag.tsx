import React from 'react'

interface FlagProps {
  imageSrc?: string;
}

const Flag: React.FC<FlagProps> = ({imageSrc}) => {
  return (
    <div className='rounded-sm max-w-full'>
      <img src={imageSrc} alt="flag" className='rounded-sm object-contain'/>
    </div>
  )
}

export default Flag