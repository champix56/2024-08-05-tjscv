import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlexHThirdGrow from './FlexHThirdGrow';

describe('<FlexHThirdGrow />', () => {
  test('it should mount', () => {
    render(<FlexHThirdGrow />);

    const FlexHThirdGrow = screen.getByTestId('FlexHThirdGrow');

    expect(FlexHThirdGrow).toBeInTheDocument();
  });
});