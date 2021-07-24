import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
function App() {
  // Create the count state.
  const [lat, setLang] = useState("");
  const [long, setLong] = useState("");

  
  useEffect(() => {
    getMyLocation()

  }, []);
  // Return the App component.
  const getMyLocation = () => {
    const location = window.navigator && window.navigator.geolocation
    var bodyFormData = new FormData();
    bodyFormData.append('latitude', lat);
    bodyFormData.append('longitude', long);

    if (location) {
      location.getCurrentPosition((position) => {
      console.log(position.coords.latitude)

        setLang(position.coords.latitude)
          setLong(position.coords.longitude)

      }, (error) => {
        console.log(error)
      })
    }

  }
  
  const sendData = async() =>{
    var bodyFormData = new FormData();
    bodyFormData.append('latitude', lat);
    bodyFormData.append('longitude', long);
    const response = await axios({
      method: 'post',
      url: 'https://67a2bac3ce5e.ngrok.io ',
      data: bodyFormData,
      
  });
  const x = document.getElementById("msg").innerHTML = `${response.data.dist}`
    console.log(response.data)

  }

  return (
    <div className="App">
      <h1>{lat}</h1>
      <h1>{long}</h1>
      <button onClick={sendData}>Hello</button>
      <div id="msg"></div>
    </div>
    
  );
}

export default App;
