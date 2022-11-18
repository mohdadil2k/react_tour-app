import { useState , useEffect } from 'react'
import './index.css'
import Loading from './Loading'
import Tours from './Tours.jsx'

const url = "https://course-api.com/react-tours-project"

function App() {
  const [ isLoading , setIsLoading ] = useState(false)
  const [ tourData , isTourData ] = useState([])

  const removeElement = (id) =>{
    const newData = tourData.filter((tour)=>tour.id !==id)
    return isTourData(newData);
  }
  const fetchData = async() =>{
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const json = await response.json()

      setIsLoading(false)
      isTourData(json)
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    fetchData()
  },[])

  if(isLoading){
    return(
    <>
      <Loading/>
    </>
    )
  }
  if(tourData.length === 0){
    return (
      <>
      <main className='title'>
        <h2>no tours left</h2>
        <button className='refresh-btn' onClick={()=>fetchData()}>
          refresh
        </button>
      </main>
      </>
    )
  }
  return (
    <>
    <div className="title">
      <h2>our tours</h2>
      <div className="underline"></div>
    </div>
    <Tours tours={tourData} removeElement={removeElement}/>
    </>
  )
}

export default App
