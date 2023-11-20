import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home.js';
import FetchAlbums from './Albums.js';
import Genres from './Genres.js';
import AlbumDetails from './Albumdetails.js';
import Artists from './Artists.js';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/albums' element={<FetchAlbums/>}></Route>
      <Route path='/albums/:id' element={<AlbumDetails/>}></Route>
      <Route path='/genres' element={<Genres/>}></Route>
      <Route path='/artists' element={<Artists/>}></Route>
    </Routes>
  );
}

export default Main;