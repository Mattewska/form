import { useState, createContext } from 'react'
import './App.css'
import { Login } from './Components/Login';

export const Context = createContext();

export function App() {
  const [ provider, setProvider ] = useState('test');

  

  return (
    <>
      <Context.Provider value={provider}>
        <Login />
      </Context.Provider>
    </>
  )
}
