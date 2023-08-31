import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {  useSelector } from "react-redux";
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home'
import Detail from './components/Detail/Detail'
import SearchBarResults from './components/SearchBarResults/SearchResult';
import Form from './components/From/Form';


function App() {

  const [searchResults, setSearchResults]= React.useState([])

  const page = useSelector((state) => state.page);

    const perPage = 15;

    

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home searchResults={searchResults} setSearchResults={setSearchResults} page={page} perPage={perPage}  />} />
        <Route path='/onsearch/:name' element={<SearchBarResults searchResults={searchResults} setSearchResults={setSearchResults} page={page} perPage={perPage} />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create' element={<Form />} />

      </Routes>
    </div>
  );
}

export default App;
