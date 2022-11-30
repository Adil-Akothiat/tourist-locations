import React from 'react';
import Footer from './components/layouts/footer';
import Header from './components/layouts/header';
import Main from './components/layouts/Main/main';
import './styles/styles.css';


export default function App () {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}