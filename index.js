export default class Screensaver {
  constructor(settings) {


    this.settings = Object.assign({
      idleTime: 5,
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

    ["mousemove", "touchstart"].forEach(e => {
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

}