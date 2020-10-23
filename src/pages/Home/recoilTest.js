import React from 'react'
import Axios from 'axios'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const Home = ({}) => {
  const getMe=()=>{
    Axios.get("https://api.spotify.com/v1/me", {headers: {Authorization:"Bearer BQDr6lj0e2RSYQgGnHX0X_zkmuCRRVCdryF_RMVJJqo0cOzgmtPNsnXmzU-cvDYrMObtraNNz-WmFK63FVS6mjXEwh9X3zRxnUVe3vTVzqBT2FVmyibV-86HvKXV25SfLwlvd0lK-_TS"}}).then(data=>console.log("data : " , data))

  }

  return (
    <div>
      <a href="https://accounts.spotify.com/authorize?client_id=23d0c774be854502a7e0d5c415e2c29c&response_type=token&redirect_uri=http://localhost:3000">Authentification</a>
      <br></br>
      <button onClick={getMe}>Test</button>
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>
    </div>
  )
}

export default Home

const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(textState);
  
      return text.length;
    },
  });


function CharacterCount() {
const count = useRecoilValue(charCountState);

return <>Character Count: {count}</>;
}
