import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/base/base.css';
import './components/Listposts/Listposts.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Page404 from './pages/Page404';
import Header from './components/Header/Header';
import Post from './components/Post/Post';
import Categorias from './components/Categorias/Categorias';

function App() {

  // const ruta = window.location.pathname;

  // const Router = () => {
  //   if (ruta === '/') {
  //     return <Home />
  //   }else{
  //     return <Sobre />
  //   }
  // }

  return (
    <Router>
      {/* { Router() } */}
      {/* <Router /> */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/categoria/:id/*' element={<Categorias />} />
        <Route path='*' element={<Page404 />} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
