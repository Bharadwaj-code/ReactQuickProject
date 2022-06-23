import React from 'react';
import logo from "../logo.svg";

export default function Header() {
    return (
      <div className="header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* add intro component here  */}
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
    );
  }