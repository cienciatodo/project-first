import { useState } from "react";
import foto from './assets/eye.png';
import './App.css'


function CompoLog(){
    const [count, setCount] = useState('');
    const[pass, setPass] = useState('');
    const[posi, setPosi] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setPosi(!posi);
        console.log(posi);    
      }
    
      const handlesub = (e) => {
        e.preventDefault();
        setCount('');
        setPass('');
      };

      return (
        <>
          <form onSubmit={handlesub}>
            <p>
               <label htmlFor='nam'>Username</label>
               <input type="text" id='nam' value={pass} onChange={(e) => {setPass(e.target.value)}}/>
            </p>
           
            <p>
            <label htmlFor='pass'>Password</label>
            <input type={posi === false? 'password' : 'text' } id='pass' value={count} onChange={(e) => {setCount(e.target.value)}}/>
    
    
           
            </p>
            <img src={foto} onClick={handleSubmit} />
            <button>Submit</button>
          </form>
        </>
      )
    

};



export default CompoLog;
