import React from 'react';
import { shallow } from 'enzyme';
import PromotedProduct from './PromotedProduct';

describe('Component PromotedProduct', () => {
  it('should render without crashing', () => {
    const component = shallow(<PromotedProduct />);
    expect(component).toBeTruthy();
  });
});
