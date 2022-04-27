import React, {  useEffect, useState } from 'react'
import './Style.css';



const CourierData = () => {
     const  [data, setData] = useState({ weight:"",pincode:"",type:""})
     const [userData, setUserData] = useState([])
  
    
     const handleChange = (e)=> {
        setData({...data, [e.target.name]:e.target.value})
    }

    const handleClick = (e)=>{
        e.preventDefault()
       
    }
    const Data = ()=>{
        fetch("http://localhost:1111/users",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        }).then((response)=>response.json()).then((res)=>{
        setUserData(res)
        
      })
    }

    const Fdata = ()=>{
        fetch("http://localhost:1111/users").then((response)=>response.json()).then((res)=>{
        setUserData(res)
        
      })
    }

    const handlecout = ()=>{
        console.log("userData", userData)
    }

    useEffect(()=>{
        Data()
        Fdata()
        handlecout()
    },[data])
    
  return (
    <div className='cointab'>
       <div className='courier-charges'>
            <h1>Courier charges</h1>
           
      </div>
     
      <div className='container'>

      <form action="http://localhost:1111/users" method='post' onSubmit={(e)=> {
           handleClick(e)
          
      }}>
          <input className='input1' type="text"  name='weight'
          value={data.weight}
          placeholder='Product-Weight'
          onChange={(e)=>handleChange(e)
          }/>
          
          <input className='input1' type="text" name='pincode'
            value={data.pincode}  
           placeholder='Pincode'
          onChange={(e)=>handleChange(e)
          }/>

          <select className='input2' name="type" id="option"
           value={data.type} 
           onChange={(e)=>handleChange(e)
           }>
              <option value="--" defaultValue="--">Type</option>
              <option value="Forward">Forward</option>
              <option value="Forward & RTO">Forward & RTO</option>
          </select>

          <input className='btn-nsubmit' type="submit" value="Submit"/>
      </form>
      </div>

     
    </div>
  )
}

export default CourierData
