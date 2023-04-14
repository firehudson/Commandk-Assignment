import { ShortcutContextProvider } from './store/shortcut';
import { ColorBox } from './components/ColorBox';
import { ActiveShortcutList } from './components/ActiveShortcutList';
import styles from './main.module.css';

export const Main = () => {
  return (
    <ShortcutContextProvider>
      <div className={styles.container}>
        <ColorBox
          id='compA'
          bgColor='rgb(64, 85, 117)'
          shortcutData={{
            combo: 'shift a',
            componentName: 'A',
            description: 'Toggle component A colour',
          }}
        />
        <ColorBox
          id='compB'
          bgColor='rgb(42, 161, 212)'
          shortcutData={{
            combo: 'esc',
            componentName: 'B',
            description: 'Toggle component B colour',
          }}
        />
        <ColorBox
          id='compC'
          bgColor='rgb(19, 79, 120)'
          shortcutData={{
            combo: 'alt ctrl c',
            componentName: 'C',
            description: 'Toggle component C colour',
          }}
        />
        <ActiveShortcutList />
      </div>
    </ShortcutContextProvider>
  );
};
