import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlexWFirstGrow from './FlexWFirstGrow';

describe('<FlexWFirstGrow />', () => {
  test('it should mount', () => {
    render(<FlexWFirstGrow />);

    const FlexWFirstGrow = screen.getByTestId('FlexWFirstGrow');

    expect(FlexWFirstGrow).toBeInTheDocument();
  });
});