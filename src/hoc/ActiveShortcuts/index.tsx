import { useShortcutContext } from '../../store/shortcut';
import { Shortcut } from '../../store/shortcut/shortcutContext';

interface ActiveShortcutsProps {
  children: ({
    shortcuts,
  }: {
    shortcuts: Record<string, Shortcut>;
  }) => JSX.Element;
}

export const ActiveShortcuts = ({
  children,
}: ActiveShortcutsProps): JSX.Element => {
  const { shortcuts } = useShortcutContext();

  return children({ shortcuts });
};
