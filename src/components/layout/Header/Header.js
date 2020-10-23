// import PropTypes from 'prop-types';
import React from 'react';

import CompanyClaim from '../CompanyClaim/CompanyClaim';
import MenuBar from '../MenuBar/MenuBar';
import TopBar from '../TopBar/TopBar';

import styles from './Header.module.scss';

const Header = props => (
  <header className={styles.root}>
    <TopBar />
    <CompanyClaim />
    <MenuBar />
  </header>
);

// Header.propTypes = {};

export default Header;
