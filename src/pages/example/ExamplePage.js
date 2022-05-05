import React from 'react'
import logo from '../../assets/logo.svg'
import '../../App.css'
export const ExamplePage = () => {
     return(
          <div>
               <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <a
                         className="App-link"
                         href="https://reactjs.org"
                         target="_blank"
                         rel="noopener noreferrer"
                    >
                         Learn React
                    </a>
               </header>
          </div>
     )
}