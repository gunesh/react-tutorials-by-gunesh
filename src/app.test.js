import React from 'react';
import { shallow } from 'enzyme';
import App from './app';
describe("ComponentName", () => {
  it("should render my component", () => {
    const wrapper = shallow(<App />);
  });
}); bb