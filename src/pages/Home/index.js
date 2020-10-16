import React, { useEffect, useState } from 'react';

export const authEndpoint = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "62f8fcfd04454706a6a049566aafe0fb";
const redirectUri = "http://localhost:3000";
const scopes = [
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-read-currently-playing",
  "user-read-playback-state",
];

// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

export default function Home () {
  const [ token, setToken] = useState(null);
  useEffect(() => {
    let _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, [])


  return (
    <div className="Home">
      {!token && (
        <a
          className="btn btn--loginApp-link"
          href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
        >
          Login to Spotify
        </a>
      )}
      {token && (
        "// Spotify Player Will Go Here In the Next Step"
      )}
    </div>
  );
}


/*import Axios from 'axios'

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

export default Home*/
