import { useState } from 'react'
import './App.css'

function MyForm() {
  const [name,setName] =useState("");

  function handleChange(e){
    setName(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    alert(name);
  }

  function Reset(){
   setName("")
  }
 return (
  <div id="box">
  <h1>Application From</h1>
  <form onSubmit={handleSubmit}>
    <label>Enter your Name:
      <input
       type='text'
      value={name}
      onChange={handleChange}
      />  
     </label>
     <br />
     <br/>
      <input type="submit"/>
       <button type='button' onClick={Reset}>Reset</button>
  </form>
  <p>Current Value :{name}</p>
  </div>
 )
}
export default MyForm