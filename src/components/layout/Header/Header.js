import React from 'react';
import TopBar from '../TopBar/TopBar';
import CompanyClaim from '../CompanyClaim/CompanyClaimContainer';
import MenuBar from '../MenuBar/MenuBar';

const Header = () => (
  <header>
    <TopBar />
    <CompanyClaim />
    <MenuBar />
  </header>
);

export default Header;
