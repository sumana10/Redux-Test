import React from 'react';
import { render, screen } from '@testing-library/react';
import Greet from './../Greet';

describe.only('Greet', ()=>{

  it('Greet as hello', () => {
    render(<Greet />);
    const linkElement = screen.getByText(/hello/i);
    expect(linkElement).toBeInTheDocument();
  })

  test.skip('Greet hello with name', ()=>{
      render(<Greet name="Sumana"/>)
      const linkElement = screen.getByText(/hello sumana/i);
      expect(linkElement).toBeInTheDocument();
  })

})
