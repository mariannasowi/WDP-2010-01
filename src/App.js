import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductListImages from './components/views/ProductListImages/ProductListImagesContainer';
import ProductPage from './components/views/ProductPage/ProductPageContainer';
import NotFound from './components/views/PageNotFound/PageNotFound';
import BlogArticle from './components/views/BlogArticle/BlogArticle';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route exact path={'/shop/:categoryId'} component={ProductListImages} />
          <Route exact path={'/product/:productId'} component={ProductPage} />
          <Route exact path={'/blog/:blogId'} component={BlogArticle} />
          <Route path='*' component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
