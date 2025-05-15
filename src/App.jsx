import { useState, createContext } from 'react'
import './App.css'
import { Login } from './Components/Login';

export const Context = createContext('');

function App() {
  const [ provider, setProvider ] = useState('');

  return (
    <>
      <Context.Provider value={provider}>
        <Login />
      </Context.Provider>
    </>
  )
}

export default { App }
