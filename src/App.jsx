import { useState, createContext } from 'react'
import './App.css'
import { Login } from './Components/Login';

export const Context = createContext();

export function App() {
  let user = [
    {
      email: "",
      pass: "",
    }
  ]
  const [ provider, setProvider ] = useState('test');
  const [ userState, setUserState ] = useState(user);

  function addFormData(){
    
  }

  return (
    <>
      <Context.Provider value={provider}>
        <Login formFunction={addFormData}/>
      </Context.Provider>
    </>
  )
}
