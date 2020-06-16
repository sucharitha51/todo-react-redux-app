import React from 'react';
import { configure, shallow } from 'enzyme'  
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

let wrapper

beforeEach(() => {
  wrapper = shallow(<App />)
})

describe('App  component', () => {

  it('App renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('App should match with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
})