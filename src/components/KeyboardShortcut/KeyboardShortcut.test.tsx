import { render } from '@testing-library/react';
import { keypressListener } from '../../keypress/listeners';
import { useShortcutContext } from '../../store/shortcut';
import { KeyboardShortcut, KeyboardShortcutProps } from '.';

jest.mock('../../store/shortcut', () => ({
  useShortcutContext: jest.fn(),
}));

jest.mock('../../keypress/listeners', () => ({
  keypressListener: {
    simple_combo: jest.fn(),
    unregister_combo: jest.fn(),
  },
}));

describe('KeyboardShortcut', () => {
  const props: KeyboardShortcutProps = {
    combo: 'ctrl a',
    onKeyPress: jest.fn(),
    description: 'Toggle color of Component A',
    componentName: 'A',
  };

  const setShortcuts = jest.fn();
  const shortcuts = {};

  beforeEach(() => {
    jest.resetAllMocks();
    (useShortcutContext as jest.Mock).mockReturnValue({
      shortcuts,
      setShortcuts,
    });
  });

  it('Should registers the shortcut on component mount', () => {
    render(<KeyboardShortcut {...props} />);

    expect(keypressListener.simple_combo).toHaveBeenCalledWith(
      props.combo,
      props.onKeyPress
    );

    expect(setShortcuts).toHaveBeenCalledWith({
      [props.combo]: {
        componentName: props.componentName,
        description: props.description,
      },
    });
  });

  it('Should unregisters the shortcut on component unmount', () => {
    const { unmount } = render(<KeyboardShortcut {...props} />);

    unmount();

    expect(keypressListener.unregister_combo).toHaveBeenCalledWith(props.combo);
  });

  it('Should not register the shortcut if it already exists', () => {
    const existingShortcut = {
      [props.combo]: {
        componentName: 'ExistingComponent',
        description: 'Existing shortcut',
      },
    };
    (useShortcutContext as jest.Mock).mockReturnValue({
      shortcuts: existingShortcut,
      setShortcuts,
    });

    render(<KeyboardShortcut {...props} />);

    expect(keypressListener.simple_combo).not.toHaveBeenCalled();

    expect(setShortcuts).not.toHaveBeenCalled();
  });
});
