import axios from 'axios'
import { useState, useEffect } from 'react'
import image4 from './assets/img/image3.png'
import './App.css'
import ResidentInfo from './assets/component/ResidentInfo'

  

function App() {

  const [location, setLocation] = useState({})
  const [searchLo, setSearchLo]= useState("")

  useEffect(() => {
   const randomLocationId = Math.floor(Math.random() * 126) +1
    axios.get(`https://rickandmortyapi.com/api/location/${randomLocationId}`)
    .then(res =>setLocation(res.data))
    
    }, [])

    console.log(location)

    const searchLocation = ()=>{
      axios.get(`https://rickandmortyapi.com/api/location/${searchLo}`)
      .then(res => setLocation(res.data))

    }
  
  return(

     <div>
      <img className="img1"
      src={image4} alt="" />
        <h1>Rick and Morty Wiki</h1>
          <input className='input' 
            type="text"
            placeholder='Type a location id' 
            value={searchLo}
             onChange = {e => setSearchLo(e.target.value)}
           />
           <br/>
              <button onClick={searchLocation}>Search</button>
         
         <div>
            <h3>{location.name}</h3>  
          

            <div className='subtitle'>

              <div className='div-min text-center'>
                <h5><b>Type: </b>{location.type}</h5>
              </div>

              <div className='div-min text-center'>
              <h5><b>Dimension: </b>{location.dimension}</h5>
              </div>

              <div className='div-min text-center'>
              <h5><b>Population: </b>{location.residents?.length}</h5>
              </div>
              
          
            </div> 
         
                 <div>
                  <h2 className='residents'>Residents</h2>
                    <ul className='rick-list'>
                       {location.residents?.map( residents =>(
                   
                      <ResidentInfo 
                      Url ={residents}
                      key ={residents}
                      />

                    ))
                    }
                  </ul>
               
                </div>
         </div>


    </div>
  
  )
}

export default App

