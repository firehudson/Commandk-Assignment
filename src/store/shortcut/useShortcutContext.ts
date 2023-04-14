import { useContext } from 'react';
import { ShortcutContext, ShortcutContextType } from './shortcutContext';

export const useShortcutContext = (): ShortcutContextType => {
  const states = useContext(ShortcutContext);

  return states;
};
