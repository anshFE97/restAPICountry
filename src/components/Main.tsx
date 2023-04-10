import React from 'react'
import Search from './Search'
import Filter from './Filter'
import List from './List'

interface MainProps {
  countries: string[]
  setRegion?: React.Dispatch<React.SetStateAction<string>>
  input?: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const Main: React.FC<MainProps> = ({countries, setRegion, input, setInput}) => {
  return (
    <div>
      <div>
        <div className='flex md:justify-between md:items-center flex-col gap-4 md:flex-row'>
          <div>
            <Search input={input} setInput={setInput}/>
          </div>
          <div>
            <Filter setRegion={setRegion}/>
          </div>
        </div>

        <div>
          <List countries={countries} />
        </div>
      </div>
    </div>
  )
}

export default Main