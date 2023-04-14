import styles from './styles.module.css';
import { ActiveShortcuts } from '../../hoc/ActiveShortcuts';

export const ActiveShortcutList = () => {
  return (
    <div className={styles.container}>
      <div>
        <ActiveShortcuts>
          {({ shortcuts }) => (
            <>
              {Object.keys(shortcuts).map((shortcut: string, index: number) => (
                <div key={`${shortcut}-${index}`}>
                  <h3>Component {shortcuts[shortcut].componentName}</h3>
                  <p>{`"${shortcut}" : ${shortcuts[shortcut].description}`}</p>
                </div>
              ))}
            </>
          )}
        </ActiveShortcuts>
      </div>
    </div>
  );
};
