import React from 'react'

interface BordersProps {
    borders?: string[]
}

const Borders: React.FC<BordersProps> = ({borders}) => {
  // console.log(borders)
  return (
    <div>
        <div className='flex gap-2 justify-center '>
        {borders?.map((border: { name: string }[] | any, index: number) => (
            <span className='bg-[#2B3945] py-1 hover:opacity-70 cursor-pointer px-4 rounded-md' key={index}>{border} </span>
        ))}
        </div>
    </div>
  )
}

export default Borders