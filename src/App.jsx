import React, { useState, useEffect } from 'react'
import BotChat from './BotChat'
import Arrow from './assets/arrow.png'
import Arrowlight from './assets/arrow-light.png'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateTheme = () => {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    // Set initial theme
    updateTheme();

    // Add event listener for changes
    mediaQuery.addEventListener('change', updateTheme);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener('change', updateTheme);
    };
  }, []);

  function toggleTheme() {
    setTheme(theme === 'dark'? 'light' : 'dark');
  }

  return (
    <>
      <div className="text">
        <h1>Pratyush's bot</h1>
        <span>A bot make by Pratyush by APIs LLM node.js and lines and lines of JavaScript</span>
      </div>
      <div id="svg">
        <img id='arrow' src={theme === 'light' ? Arrowlight:Arrow} alt="arrow" />
      </div>
      <BotChat/>
    </>
  )
}

export default App
