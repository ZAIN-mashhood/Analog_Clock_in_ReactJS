import React from 'react';
//import ReactDOM from "react-dom/client";
import "./App.css"

const App = () => {
  setInterval(() => {
    let date = new Date();
    console.log(date);
    let htime = date.getHours();
    let mtime = date.getMinutes();
    let stime = date.getSeconds();
    let hrotation = 30 * htime + mtime / 2;
    let mrotation = 6 * mtime;
    let srotation = 6 * stime;


    document.querySelector(".container .hour").style.transform = `rotate(${hrotation}deg)`;
    document.querySelector(".container .minute").style.transform = `rotate(${mrotation}deg)`;
    document.querySelector(".container .second").style.transform = `rotate(${srotation}deg)`;
  }, 1000);

  return (
    <>
      <h1>Analog Clock - made by zain</h1>
      <div className='container'>        
        <div className='hour'></div>
        <div className="minute"></div>
        <div className="second"></div>
      </div>
    </>
  )
}

export default App;
