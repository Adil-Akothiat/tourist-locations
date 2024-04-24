import React from 'react';
import Footer from './components/layouts/footer';
import Header from './components/layouts/header';
import Main from './components/layouts/Main/main';
import { Routes, Route } from "react-router-dom";
import './styles/styles.css';
import InteractiveMap from './components/layouts/Main/interactiveMap/interactiveMap';


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/map" element={<InteractiveMap />} />
      </Routes>
      <Footer />
    </>
  );
}