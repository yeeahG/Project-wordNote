import {BrowserRouter, Routes, Route} from 'react-router-dom';
import List from './List/List'
import Hiragana from './components/Hiragana';
import Katakana from './components/Katakana'
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <List />

        <Routes>
           {/* <Route path='/quiz/:id' element={<List/>}></Route>
            <Route path='/' element={<List/>}></Route>*/}
            <Route path='/Hiragana' element={<Hiragana/>}></Route>
            <Route path='/Katakana' element={<Katakana/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
