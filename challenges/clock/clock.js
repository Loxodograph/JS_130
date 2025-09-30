"use strict";

class Clock {
  constructor(hour, minute) {
    this.hour = hour;
    this.minute = minute;
  }

  static at(hour, minute = 0) {
    return new Clock(hour, minute);
  }

  add(num) {
    let total = (this.hour * 60) + this.minute + num;
    total = ((total % 1440) + 1440) % 1440; // 0..1439
    let newHour = Math.floor(total / 60);
    let newMinute = total % 60;
    return new Clock(newHour, newMinute);
  }

  toString() {
    const hh = String(this.hour).padStart(2, '0');
    const mm = String(this.minute).padStart(2, '0');
    return `${hh}:${mm}`;
  }

  subtract(num) {
    return this.add(-num);
  }

  isEqual(otherClock) {
    return this.hour === otherClock.hour && this.minute === otherClock.minute;
  }
}

module.exports = Clock;