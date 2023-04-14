import { createContext } from 'react';

export type Shortcut = {
  description: string;
  componentName: string;
};

export type ShortcutContextType = {
  shortcuts: Record<string, Shortcut>;
  setShortcuts: (shortcuts: Record<string, Shortcut>) => void;
};

export const ShortcutContext = createContext<ShortcutContextType>({
  shortcuts: {},
  setShortcuts: () => null,
});
