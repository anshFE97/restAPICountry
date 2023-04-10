import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

interface FilterProps {
  setRegion?: React.Dispatch<React.SetStateAction<string>> | any
}

const Filter: React.FC<FilterProps> = ({setRegion}) => {
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
    <div className="relative bg-[#2B3945] rounded-md py-1 w-[150px]">
      <div
        onClick={() => setMenu((prev) => !prev)}
        className="flex items-center gap-1 justify-center px-2"
      >
        <button>Filter by region</button>
        {!menu ? <IoIosArrowForward size={14} /> : <IoIosArrowDown size={14} />}
      </div>
      {menu && (
        <div className="absolute w-full z-20 mt-2 p-2 flex justify-start items-center rounded-md bg-[#2B3945]">
          <ul className="text-[14px] flex flex-col gap-2 mx-2">
            <li 
             onClick={() => {setRegion("asia"), setMenu(false)}}
            className="hover:opacity-70 cursor-pointer w-28 pl-2 hover:bg-[#02040b]">Asia</li>
            <li 
             onClick={() => {setRegion("africa"), setMenu(false)}}
            className="hover:opacity-70 cursor-pointer w-28 pl-2 hover:bg-[#02040b]">Africa</li>
            <li 
             onClick={() => {setRegion("europe"), setMenu(false)}}
            className="hover:opacity-70 cursor-pointer w-28 pl-2 hover:bg-[#02040b]">Europe</li>
            <li 
             onClick={() => {setRegion("oceania"), setMenu(false)}}
            className="hover:opacity-70 cursor-pointer w-28 pl-2 hover:bg-[#02040b]">Oceania</li>
            <li 
             onClick={() => {setRegion("americas"), setMenu(false)}}
            className="hover:opacity-70 cursor-pointer w-28 pl-2 hover:bg-[#02040b]">Americas</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
