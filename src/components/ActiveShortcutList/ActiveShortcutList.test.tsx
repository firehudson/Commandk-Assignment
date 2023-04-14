import { render } from '@testing-library/react';
import { ActiveShortcutList } from '.';
import { Shortcut } from '../../store/shortcut/shortcutContext';

const shortcuts: { [key: string]: Shortcut } = {
  'ctrl c': {
    componentName: 'Component A',
    description: 'Toggle component A color',
  },
  'ctrl d': {
    componentName: 'Component B',
    description: 'Toggle component B color',
  },
  'ctrl a': {
    componentName: 'Component C',
    description: 'Toggle component C color',
  },
};

jest.mock('../../store/shortcut', () => ({
  useShortcutContext: () => ({
    shortcuts,
  }),
}));

describe('ActiveShortcutList', () => {
  test('Should renders a list of shortcuts', () => {
    const { getByText } = render(<ActiveShortcutList />);

    Object.keys(shortcuts).forEach((shortcut) => {
      const componentName = getByText(
        `Component ${shortcuts[shortcut].componentName}`
      );
      expect(componentName).toBeInTheDocument();

      const description = getByText(
        `"${shortcut}" : ${shortcuts[shortcut].description}`
      );
      expect(description).toBeInTheDocument();
    });
  });
});
