import { differenceInCalendarMonths, isAfter, isBefore } from 'date-fns';

export const isDateEqualOrBetween = (
  date: Date,
  previousDate: Date,
  laterDate: Date
) => {
  return !isBefore(date, previousDate) && !isAfter(date, laterDate);
};

export const isDateBetween = (
  date: Date,
  previousDate: Date,
  laterDate: Date
) => {
  return isAfter(date, previousDate) && isBefore(date, laterDate);
};

export const isMonthEqualOrAfter = (date: Date, dateToCompare: Date) => {
  return differenceInCalendarMonths(date, dateToCompare) >= 0;
};

export const isMonthEqualOrBefore = (date: Date, dateToCompare: Date) => {
  return differenceInCalendarMonths(date, dateToCompare) <= 0;
};
