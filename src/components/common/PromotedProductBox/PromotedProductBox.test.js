import React from 'react';
import { shallow } from 'enzyme';
import PromotedProductBox from './PromotedProductBox';

describe('Component PromotedProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<PromotedProductBox />);
    expect(component).toBeTruthy();
  });
});
