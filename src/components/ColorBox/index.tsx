import { KeyboardShortcut } from '../KeyboardShortcut';
import { getRandomColor } from '../../utils/colors';
import styles from './styles.module.css';

interface ColorBoxProps {
  /** Element Id */
  id: string;
  /** Initial backgruond color */
  bgColor: string;
  /** Shortcut details */
  shortcutData: {
    /** Combination of keys */
    combo: string;
    /** Description to show in shortcut list */
    description: string;
    /** Component name to show in shortcut list */
    componentName: string;
  };
}

export const ColorBox = ({ id, shortcutData, bgColor }: ColorBoxProps) => {
  const { combo, description, componentName } = shortcutData;

  // Callback function for changing color on key press.
  const turnBgColor = () => {
    const container = document.getElementById(id);

    if (container) {
      container.style.backgroundColor = getRandomColor();
    }
  };

  return (
    <div
      id={id}
      className={styles.container}
      style={{ backgroundColor: bgColor }}
    >
      <KeyboardShortcut
        combo={combo}
        onKeyPress={turnBgColor}
        description={description}
        componentName={componentName}
      />

      <div className={styles.colorBox}>
        <p className={styles.componentName}>Component {componentName}</p>
      </div>
    </div>
  );
};
