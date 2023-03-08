import React from 'react'
import './Drop.css'

import { Link } from 'react-router-dom';
function App() {
  return (
    
    
    <div className='body'>
      <h1 className="h1">CodeTube</h1>
      <h1 className="head">Choose your Carrier</h1><br></br><br></br>
     
      <div className="card">
        <form>
          <label  className="hh" for="username"><Link to="/display">GETDETAILS</Link></label><br></br><br></br>
          <br></br>
          <br></br>
          <label for="username"><Link to="/Page">POSTDETAILS</Link></label><br></br><br></br>
          <br></br><br></br><br></br>
          <div className='centre'>
          <label for="username"><Link to="/Update">UPDATEDETAILS</Link></label><br></br><br></br>
          <br></br><br></br><br></br>
          <div className='centre'>
          <label for="username"><Link to="/Delete">DELETEDETAILS</Link></label><br></br><br></br>
          <br></br><br></br><br></br>
          <div className='centre'>
          <button className="btn">SUBMIT</button>
          </div>
          <span class="psw"><a href='https://www.youtube.com/'>Login here!!</a></span>
      </div>

      </div>
      </form>
      </div>
      </div>
    
    
  );
}

export default App;