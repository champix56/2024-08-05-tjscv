import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './NavBar';

describe('<NavBar />', () => {
  test('it should mount', () => {
    render(<NavBar />);

    const NavBar = screen.getByTestId('NavBar');

    expect(NavBar).toBeInTheDocument();
  });
});