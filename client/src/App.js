import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home'
import Detail from './components/Detail/Detail'
import SearchBarResults from './components/SearchBarResults/SearchBarResults';
import Form from './components/From/Form';

function App() {

  const [searchResults, setSearchResults]= React.useState([])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home setSearchResults={setSearchResults} />} />
        <Route path='/onsearch/:name' element={<SearchBarResults searchResults={searchResults} setSearchResults={setSearchResults} />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create' element={<Form />} /> 

      </Routes>
    </div>
  );
}

export default App;
