# js screensaver

Do something when there is no interaction ("mousemove", "touchstart") with window.
````
const mySreensaver = new Screensaver({
  idleTime: 5,
  clearEvents : ['keydown', 'whatEverEvent'],
  onActivation: () => {
    // doWhatever()
  },
  onDeactivation: () => {
    // stopWhatever()
  }
})
```
