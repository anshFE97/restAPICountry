import { useEffect, useState } from 'react'
import CountryDetail from './components/CountryDetail'
import Main from './components/Main'
import Navbar from './components/Navbar'
import axios from 'axios'


interface Country {
  name?: {
    common: string
  }
}
const App = () => {
  const [region, setRegion] = useState("")
  const [allCountries, setAllCountries] = useState<Country[]>([])
  const [countries, setCountries] = useState([])
  const [input, setInput] = useState("")


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setAllCountries(response.data)
    };
    fetchData();
  }, []);


useEffect (() => {
  if(!region) return;
  const fetchData = async() => {
    const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`)
        setCountries(response.data);
      }
      fetchData()
  },[region]);

  useEffect(()=> {
    if(!allCountries){
      return
    } else {
      const randomCountries = allCountries.sort(() => 0.5 - Math.random()).slice(0, 15)
      setCountries(randomCountries as Country[])
    }
  }, [allCountries])
  console.log(allCountries)


  useEffect(() => {
    if(!allCountries) return
    const filters = allCountries.filter((country) => 
    country?.name?.common?.toLowerCase().includes(input.toLocaleLowerCase()
    )
    )
    setCountries(filters as Country[])
  }, [input, setInput])

  return (
    <div className='flex flex-col text-white bg-[#202C37] w-full h-[100%]'>
        <Navbar />
      <div className='flex flex-col p-6 md:p-8 lg:p-10'>
        <Main 
        countries={countries} 
        setRegion={setRegion}
        input={input}
        setInput={setInput}
        />

        {/* <CountryDetail /> */}
      </div>
    </div>
  )
}

export default App