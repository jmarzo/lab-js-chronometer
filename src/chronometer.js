class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime / 60);
    const seconds = this.currentTime - minutes * 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let stringa = value.toString();
    if (stringa.length == 1) {
      return "0" + stringa;
    }
    return stringa;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime / 60);
    const seconds = this.currentTime - minutes * 60;
    let minutesString = minutes.toString();
    let secondsString = seconds.toString();
    if (minutesString.length == 1) {
      minutesString = "0" + minutesString;
    }
    if (secondsString.length == 1) {
      secondsString = "0" + secondsString;
    }
    return minutesString + ":" + secondsString;
  }
}
