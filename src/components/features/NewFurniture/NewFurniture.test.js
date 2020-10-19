import React from 'react';
import { shallow } from 'enzyme';
import NewFurniture from './NewFurniture';

const props = {
  viewport: '768',
};

describe('Component NewFurniture', () => {
  it('should render without crashing', () => {
    const component = shallow(<NewFurniture viewport={props.viewport} />);
    expect(component).toBeTruthy();
  });
});
