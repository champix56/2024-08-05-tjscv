import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MemeSVGViewer from './MemeSVGViewer';

describe('<MemeSVGViewer />', () => {
  test('it should mount', () => {
    render(<MemeSVGViewer />);

    const MemeSVGViewer = screen.getByTestId('MemeSVGViewer');

    expect(MemeSVGViewer).toBeInTheDocument();
  });
});