import React from 'react'
import Hiragana from '../components/Hiragana';
import Katakana from '../components/Katakana';
import './List.css'
import JpRows from '../components/Rows/JpRows';

const List = () => {

  return (
    <div className='container'>
        <div className='side-bar'>
            <ul className='list'>

              <li className='active'>
                <a href="/Hiragana">
                  Hiragana
                </a>
              </li>
              <li>
                <a href="/Katakana">
                  Katakana
                </a>
                
              </li> 

              {/*
              <li className='active'>
                <a href='/Hiragana'>Hiragana</a>
              </li> */}



            </ul>
        </div>


         {/*<div className='jp-container'>
          <div className='hiragana'>
            <Hiragana />
           <JpRows />
          </div>

        </div>*/}

    </div>
  )
}

export default List