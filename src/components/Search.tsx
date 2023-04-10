import { AiOutlineSearch }from 'react-icons/ai'

interface SearchProps {
  input?: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  darkMode: boolean;
}

const Search: React.FC<SearchProps> = ({input, setInput, darkMode}) => {
  return (
    <div>
        <div className={`relative flex rounded-md items-center pl-3 ${darkMode ? 'bg-[#2B3945]' : 'bg-white'} gap-4 lg:w-[400px] md:w-[300px] sm:w-[250px]`}>
        <AiOutlineSearch className='w-[10%] cursor-pointer' />
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search for a country..."
                className={`border-none w-[90%] placeholder:text-sm  font-semibold py-2 ${darkMode ? 'bg-[#2B3945]' : 'bg-white'} outline-none text-md`}
            />
        </div>
        </div>
    </div>
  )
}

export default Search