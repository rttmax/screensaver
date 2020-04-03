export default class {
  constructor() {
    this.settings = {
      ...{
        idleTime: 5,
        onActivation: () => {
          console.log("start screensaver");
        },
        onDeactivation: () => {
          console.log("stop screensaver");
        }
      },
      ...settings
    }
  }

  init() {
    this.active = false;

    ["mousemove", "touchstart"].forEach(e => {
      window.addEventListener(e, () => {
        clearTimeout(this.timeout);

        if (this.active) {
          this.stopScreensaver();
        }
        this.setTimeout();
      });
    });

    this.setTimeout();

  }

  setTimeout() {
    this.timeout = setTimeout(() => {
      this.showScreensaver();
    }, 1000 * this.settings.idleTime);

  }

  showScreensaver() {
    this.active = true;
  }

  stopScreensaver() {
    this.active = false;

  }

}