/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Parent from '../../components/Parent';


describe('<Parent />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Parent>
        <div>child 1</div>
        <div>child 2</div>
      </Parent>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
