// import { useState } from "react";

import bgImg from '../picture.svg'
import logo from '../Vector.svg'
const App = () => {


  return (
    <div style={{
      display: "flex", justifyContent: 'center', paddingTop: 10} }>
      <div style={{ width: 380, height: 460, borderRadius: 20, background: ' linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)', position: 'relative' }}>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 28}}>
          <img src={bgImg} alt=""  />
        </div>
        <div style={{ position: 'absolute', top: 20, left: 20}}>
          <img src={logo} alt=""  />
        </div>
        <div style={{marginBottom: 16, display: 'flex', justifyContent: 'center', textTransform: 'uppercase', color: '#EBD8FF'}}>
          <p>777 tweets</p>
        </div>
        <div style={{marginBottom: 16, display: 'flex', justifyContent: 'center', textTransform: 'uppercase', color: '#EBD8FF'}}>
          <p>100,500 followers</p>
        </div>
        

      </div>
      </div>
)
}

export default App