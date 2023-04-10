import { BsMoon } from 'react-icons/bs'

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({setDarkMode, darkMode}) => {
  return (
    <div className={`p-6 md:p-8 lg:p-10 ${darkMode ? 'bg-[#2B3945]' : 'bg-white'}`}>
      <div className='flex justify-between items-center'>
        <div className='font-semibold text-lg tracking-tight'>
          <h1>What in the world?</h1>
        </div>
        <div 
        onClick={() => setDarkMode((prev) => !prev)}
        className='flex gap-1 text-xs font-semibold cursor-pointer justify-center items-center'>
          <div>
            <BsMoon />
          </div>
          <div>Dark Mode</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar