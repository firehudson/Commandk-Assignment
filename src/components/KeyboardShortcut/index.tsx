import { useEffect } from 'react';
import { keypressListener } from '../../keypress/listeners';
import { useShortcutContext } from '../../store/shortcut';

interface KeyboardShortcutProps {
  combo: string;
  onKeyPress: () => void;
  description: string;
  componentName: string;
}

export const KeyboardShortcut = ({
  combo,
  onKeyPress,
  description,
  componentName,
}: KeyboardShortcutProps) => {
  const { shortcuts, setShortcuts } = useShortcutContext();
  const listener = keypressListener;

  useEffect(() => {
    // Shortcut Registration on Component Mount
    if (!shortcuts[combo]) {
      listener.simple_combo(combo, onKeyPress);
      setShortcuts({ [combo]: { componentName, description } });
    }

    // Shortcut Combo Unregistration on Component Unmount
    return () => {
      listener.unregister_combo(combo);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
