import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function Header () {
    // Using useState, set the default value for currentPage to 'Home'
    const [currentPage, handlePageChange] = useState('About');

    // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
      switch (currentPage) {
        case 'About':
          return <About />;
        case 'Portfolio':
          return <Portfolio />;
        case 'Contact':
          return <Contact />;
        case 'Resume':
          return <Resume />;
        default:
          return <About />;
      }
    };

  return (
    <main>
      <header>
        <h1>Rick Hill</h1>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <div className="content-container">{renderPage(currentPage)}</div>
    </main>
  );
}



export default Header;
