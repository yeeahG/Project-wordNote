import React from 'react'
import './Rows.css'

const Katakana = () => {
  return (
    <div className="content">
    <header className='quiz-container'>
      <h1 className='quiz'>Katakana Quiz</h1>
      <div>
        <p> here </p>
      </div>
    </header>
  
    <div className='quiz-content'>
      カ
    </div>
  
    <div className='answer-content'>
      <form >
        <input
          type="text"
          className='submit-btn'
        />
      </form>
    </div>

    <p> error </p>
  </div>
  )
}

export default Katakana