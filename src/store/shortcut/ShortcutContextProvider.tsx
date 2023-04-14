import { useState, ReactNode } from 'react';
import { Shortcut, ShortcutContext } from './shortcutContext';

interface ShortcutContextProviderProps {
  children: ReactNode;
}

export const ShortcutContextProvider = ({
  children,
}: ShortcutContextProviderProps): JSX.Element => {
  const [shortcuts, setShortcuts] = useState<{ [key: string]: Shortcut }>({});

  const handleShortcutChange = (inputShortcuts: {
    [key: string]: Shortcut;
  }) => {
    setShortcuts((oldShortcuts) => ({ ...oldShortcuts, ...inputShortcuts }));
  };

  return (
    <ShortcutContext.Provider
      value={{ shortcuts, setShortcuts: handleShortcutChange }}
    >
      {children}
    </ShortcutContext.Provider>
  );
};
