/// <reference types="react-scripts" />

class Listener {
  simple_combo(combo: string, callback: () => void) {
    return {};
  }

  unregister_combo(combo: string) {
    return {};
  }
}

interface Window {
  keypress: {
    Listener: typeof Listener;
  };
}
