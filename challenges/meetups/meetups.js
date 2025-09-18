//

class Meetup {
  static MONTHS = {
    first: [1, 2, 3, 4, 5, 6, 7],
    second: [8, 9, 10, 11, 12, 13, 14],
    third: [15, 16, 17, 18, 19, 20, 21],
    fourth: [22, 23, 24, 25, 26, 27, 28],
    fifth: [29, 30, 31],
    last: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    teenth: [13, 14, 15, 16, 17, 18, 19]
  }

  static DAYS = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  }
  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  day(dayOfTheWeek, scheduleDescriptor) {
    let dayCode = Meetup.DAYS[dayOfTheWeek.toLowerCase()];
    let possibleDates = Meetup.MONTHS[scheduleDescriptor.toLowerCase()];
    let date = this.determineDay(possibleDates, dayCode);
    return date;
  }

  determineDay(possibleDates, dayCode) {
    for (let idx = possibleDates.length - 1; idx >= 0; idx--) {
      let day = possibleDates[idx];
      let workingDate = new Date(this.year, (this.month - 1), day);
      let dayOfWeek = workingDate.getDay();
      if (dayOfWeek === dayCode &&
        (this.month - 1 === workingDate.getMonth())) {
        return workingDate;
      }
    }
    return null;
  }
}

let meetup = new Meetup(2013, 3);

module.exports = Meetup;