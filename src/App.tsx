import { useEffect, useState } from 'react'
import CountryDetail from './components/CountryDetail'
import Main from './components/Main'
import Navbar from './components/Navbar'
import axios from 'axios'


const App = () => {
  const [region, setRegion] = useState("")
  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])
  const [input, setInput] = useState("")
  const [oneCountry, setOneCountry] = useState("")
  const [detailed, setDetailed] = useState("")
  const [toggle, setToggle] = useState(false)
  const [darkMode, setDarkMode] = useState(true)



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
      setCountries(randomCountries)
    }
  }, [allCountries])


  useEffect(() => {
    if(!allCountries) return
    const filters = allCountries.filter((country: any) => 
    country?.name?.common?.toLowerCase().includes(input.toLocaleLowerCase()
    )
    )
    setCountries(filters)
  }, [input, setInput])

  useEffect(() => {
    if(!oneCountry || !allCountries) return
    const filters: any = allCountries.filter((country: any) => 
    country?.cca3 === oneCountry
    )
    setDetailed(filters)
  }, [oneCountry])

  return (
    <div className={`flex flex-col w-full md:h-[100vh] h-[100%] overflow-y-auto ${darkMode ? 'text-white bg-[#202C37]' : 'text-black bg-[#FAFAFA]'}`}>
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <div className='flex flex-col p-6 md:p-8 lg:p-10'>
      { !toggle ? (
                <Main 
                countries={countries} 
                setRegion={setRegion}
                input={input}
                setInput={setInput}
                setOneCountry={setOneCountry}
                setToggle={setToggle}
                darkMode={darkMode}
                />
      ) : (
        <CountryDetail darkMode={darkMode} setToggle={setToggle} detailed={detailed}/>
      )
    }
        
      </div>
    </div>
  )
}

export default App