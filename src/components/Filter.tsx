import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

interface FilterProps {
  setRegion?: React.Dispatch<React.SetStateAction<string>> | any;
  darkMode: boolean
}

const Filter: React.FC<FilterProps> = ({setRegion, darkMode}) => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    if (menu) {
      timeoutId = window.setTimeout(() => {
        setMenu(false);
      }, 5000);
    }
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [menu]);

  return (
    <div className={`relative ${darkMode ? 'bg-[#2B3945]' : 'bg-white text-black'} rounded-md py-1 w-[150px]`}>
      <div
        onClick={() => setMenu((prev) => !prev)}
        className="flex items-center gap-1 justify-center px-2"
      >
        <button>Filter by region</button>
        {!menu ? <IoIosArrowForward size={14} /> : <IoIosArrowDown size={14} />}
      </div>
      {menu && (
        <div className={`absolute w-full z-20 mt-2 p-2 flex justify-start items-center rounded-md ${darkMode ? 'bg-[#2B3945]' : 'bg-white text-black'}`}>
          <ul className="text-[14px] flex flex-col gap-2 mx-2">
            <li 
             onClick={() => {setRegion("asia"), setMenu(false)}}
            className={`hover:opacity-70 cursor-pointer w-28 pl-2 ${darkMode ? 'hover:bg-[#02040b]' : 'hover:bg-[#f9f9f9]'}`}>Asia</li>
            <li 
             onClick={() => {setRegion("africa"), setMenu(false)}}
            className={`hover:opacity-70 cursor-pointer w-28 pl-2 ${darkMode ? 'hover:bg-[#02040b]' : 'hover:bg-[#f9f9f9]'}`}>Africa</li>
            <li 
             onClick={() => {setRegion("europe"), setMenu(false)}}
            className={`hover:opacity-70 cursor-pointer w-28 pl-2 ${darkMode ? 'hover:bg-[#02040b]' : 'hover:bg-[#f9f9f9]'}`}>Europe</li>
            <li 
             onClick={() => {setRegion("oceania"), setMenu(false)}}
            className={`hover:opacity-70 cursor-pointer w-28 pl-2 ${darkMode ? 'hover:bg-[#02040b]' : 'hover:bg-[#f9f9f9]'}`}>Oceania</li>
            <li 
             onClick={() => {setRegion("americas"), setMenu(false)}}
            className={`hover:opacity-70 cursor-pointer w-28 pl-2 ${darkMode ? 'hover:bg-[#02040b]' : 'hover:bg-[#f9f9f9]'}`}>Americas</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
