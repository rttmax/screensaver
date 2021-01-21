export default class Screensaver {
  constructor(settings) {

    this.settings = Object.assign({
      idleTime: 5,
      clearEvents: ["mousemove", "touchstart"],
      onActivation: () => {
        console.log("start screensaver");
      },
      onDeactivation: () => {
        console.log("stop screensaver");
      }
    }, settings)

    this.init()
  }

  init() {
    this.active = false;
    this.disabled = false;

    this.settings.clearEvents.forEach(e => {
      window.addEventListener(e, () => {
        clearTimeout(this.timeout);

        if (this.active) {
          this.stop();
        }
        this.setTimeout();
      });
    });

    this.setTimeout();

  }

  setTimeout() {
    if (this.disabled) return;
    this.timeout = setTimeout(() => {
      this.start();
    }, 1000 * this.settings.idleTime);

  }

  start() {
    this.active = true;
    this.settings.onActivation()
  }

  stop() {
    this.active = false;
    this.settings.onDeactivation();
  }

  disable() {
    this.disabled = true;
    clearTimeout(this.timeout);
  }

  enable() {
    this.disabled = false;
    this.start();
  }

}
