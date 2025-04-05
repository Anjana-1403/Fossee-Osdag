import React from 'react';
import Header from '../startpage_components/Header.jsx';
import MenuBar from '../startpage_components/MenuBar.jsx';
import InputDock from '../startpage_components/InputDock';
import CenterView from '../startpage_components/CenterView';
import OutputDock from '../startpage_components/OutputDock.jsx';
import '../styles/startpage.css';

const StartPage = () => {
  return (
    <div className="main-container">
      <Header />
      <MenuBar />
      <div className="content-container">
        <InputDock />
        <CenterView />
        <OutputDock />
      </div>
    </div>
  );
};

export default StartPage;