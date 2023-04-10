import { BsMoon } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='bg-[#2B3945] p-6 md:p-8 lg:p-10'>
      <div className='flex justify-between items-center'>
        <div className='font-semibold text-lg tracking-tight'>
          <h1>What in the world?</h1>
        </div>
        <div className='flex gap-1 text-xs font-semibold cursor-pointer justify-center items-center'>
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