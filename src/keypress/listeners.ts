export class Keypress {
  private listener: Listener;

  getListener(): Listener {
    if (!this.listener) {
      this.listener = new window.keypress.Listener();
    }

    return this.listener;
  }
}

export const keypressListener: Listener = new Keypress().getListener();
