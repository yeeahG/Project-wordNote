import React from 'react'
import Hiragana from '../components/Hiragana';
import './List.css'

const List = () => {

  return (
    <div className='container'>
      <div className='side-bar'>
        <ul className='list'>

          <li className='active'> <a href="/">Home</a> </li>
          <li> <a href="/Hiragana">Hiragana</a> </li>
          <li> <a href="/Katakana">Katakana</a> </li> 
        
        </ul>
      </div>

      {/*
      <div className='jp-container'> 
        <div className='hiragana'>
          <Hiragana />
        </div>
      </div>*/}

    </div>
  )
}

export default List