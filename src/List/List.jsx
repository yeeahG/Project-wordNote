import React, { useState } from 'react'
import Full from './Full';
import './List.css'

const List = () => {
  const [visible, setVisible] = useState(true);

  
  // const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
  // const toggleMenu = () => {
  //       setMenu(isOpen => !isOpen); // on,off 개념 boolean
  // }
  
  return (
    <>
      <button 
        className='menu-hamburger'
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "❤️" : "Menu"}
      </button>
      
      {visible &&
      <div className='container'>
        <div className='side-bar'>
          <ul className='list'>

            <li> <a href="/">🏠Home</a> </li>
            <li> <a href="/Hiragana">Hiragana</a> </li>
            <li> <a href="/Katakana">Katakana</a> </li> 
          
          </ul>
        </div>

      </div> 
      }

      {/* {!visible &&
      <div className='container-hide'>
        <Full></Full>
      </div>
      } */}

      {/* <ul className="header-wrapper">
        <li><button onClick={()=>toggleMenu()}>Button</button></li> 
      </ul> 
      
      <ul className={isOpen ? "show-menu" : "hide-menu"}>
        <li >1</li>
        <li >2</li>
        <li >3</li>
        <li >4</li>
      </ul> */}
    </>
  )
}

export default List