/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Child from '../../components/Child';
import multiplyWidth from '../../helpers/multiplyWidth';

jest.mock('../../helpers/multiplyWidth');
const multiplyWidthMock = multiplyWidth as jest.Mock;

describe('<Child />', () => {

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('renders correctly', () => {
    const wrapper = shallow(<Child />);

    expect(wrapper).toMatchSnapshot();
  });

  it('changes input', () => {
    multiplyWidthMock.mockReturnValue("2048");
    const wrapper = mount(<Child />);

    wrapper
      .find('input')
      .simulate('change', { target: { value: '2' } });

    wrapper
      .find('form')
      .simulate('submit');

    expect(multiplyWidthMock).toBeCalledWith("2");
    expect(wrapper.find("span#result").text()).toBe("2048");
  });

});
