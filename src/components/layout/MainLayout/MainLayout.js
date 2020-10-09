import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import ViewportListener from '../../features/ViewportListener/ViewportListener';

const MainLayout = ({ children }) => (
  <div>
    <ViewportListener />
    <Header />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
