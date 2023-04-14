import { render, screen } from '@testing-library/react';
import { ColorBox } from '.';

jest.mock('../../keypress/listeners', () => ({
  keypressListener: {
    simple_combo: jest.fn(),
    unregister_combo: jest.fn(),
  },
}));

describe('ColorBox', () => {
  const defaultProps = {
    id: 'color-box',
    bgColor: 'red',
    shortcutData: {
      combo: 'ctrl+c',
      description: 'Toggle color of component B',
      componentName: 'B',
    },
  };

  test('renders ColorBox with correct background color', () => {
    render(<ColorBox {...defaultProps} />);

    const colorBox = screen.getByTestId('color-box');

    expect(colorBox).toHaveStyle('background-color: red');
  });
});
