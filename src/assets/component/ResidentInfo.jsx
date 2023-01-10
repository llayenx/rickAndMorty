import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({Url}) => {

    const[rym, setRym] = useState({})
    
    useEffect (()=>{
        axios.get(Url)
        .then(res => setRym(res.data))

    }, [])

    console.log(rym)



    return (
       <li className='col'>
         <div className='rick-card'>
         {rym.name}
         <br/>
          
          <img  className ="img2" src={rym.image} alt="" />
           
          <h5>{rym.status}</h5>
          <h5>{rym.origin?.name}</h5>
          <h5>{rym.episode?.length}</h5>
          
         </div>
       </li>
          
       
    );
};

export default ResidentInfo;