import React from 'react';
// import { render, fireEvent } from 'react-testing-library';
import Increment from "./../Increment";
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

describe('App Tests', () => {
  it('should increment number', async () => {

    const wrapper = render(<Increment />);
    let index = await wrapper.findByTestId('increment-number');
    expect(index.textContent).toEqual("0");

    fireEvent.click(wrapper.getByTestId('increment-button'))
    index = await wrapper.findByTestId('increment-number');
    expect(index.textContent).toEqual("1");
  })
})