import React from 'react'
import Axios from 'axios'

const Home = ({}) => {
  const getMe=()=>{
    Axios.get("https://api.spotify.com/v1/me", {headers: {Authorization:"Bearer BQDr6lj0e2RSYQgGnHX0X_zkmuCRRVCdryF_RMVJJqo0cOzgmtPNsnXmzU-cvDYrMObtraNNz-WmFK63FVS6mjXEwh9X3zRxnUVe3vTVzqBT2FVmyibV-86HvKXV25SfLwlvd0lK-_TS"}}).then(data=>console.log("data : " , data))

  }

  return (
    <div>
      <a href="https://accounts.spotify.com/authorize?client_id=23d0c774be854502a7e0d5c415e2c29c&response_type=token&redirect_uri=http://localhost:3000">Authentification</a>
      <br></br>
      <button onClick={getMe}>Test</button>
    </div>
  )
}

export default Home
