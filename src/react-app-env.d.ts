/// <reference types="react-scripts" />

class Listener {}

interface Window {
  keypress: {
    Listener: typeof Listener;
  };
}
