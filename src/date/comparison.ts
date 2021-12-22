import {
  differenceInCalendarMonths,
  isAfter,
  isBefore,
  isEqual,
  isSameMonth,
  isSameYear,
} from 'date-fns';
import { removeTimeFromDate } from '.';

export const isEqualDate = (dateOne: Date, dateTwo: Date) => {
  dateOne = removeTimeFromDate(dateOne);
  dateTwo = removeTimeFromDate(dateTwo);
  return isEqual(dateOne, dateTwo);
};

export const isDateEqualOrAfter = (date: Date, previousDate: Date) => {
  date = removeTimeFromDate(date);
  previousDate = removeTimeFromDate(previousDate);
  return isEqualDate(date, previousDate) || isAfter(date, previousDate);
};

export const isDateAfter = (date: Date, laterDate: Date) => {
  date = removeTimeFromDate(date);
  laterDate = removeTimeFromDate(laterDate);
  return isAfter(date, laterDate);
};

export const isDateBefore = (date: Date, previousDate: Date) => {
  date = removeTimeFromDate(date);
  previousDate = removeTimeFromDate(previousDate);
  return isBefore(date, previousDate);
};

export const isDateEqualOrBefore = (date: Date, laterDate: Date) => {
  date = removeTimeFromDate(date);
  laterDate = removeTimeFromDate(laterDate);
  return isEqualDate(date, laterDate) || isBefore(date, laterDate);
};

export const isDateEqualOrBetween = (
  date: Date,
  previousDate: Date,
  laterDate: Date
) => {
  date = removeTimeFromDate(date);
  previousDate = removeTimeFromDate(previousDate);
  laterDate = removeTimeFromDate(laterDate);
  return (
    isEqualDate(date, previousDate) ||
    isEqualDate(date, laterDate) ||
    (isAfter(date, previousDate) && isBefore(date, laterDate))
  );
};

export const isDateBetween = (
  date: Date,
  previousDate: Date,
  laterDate: Date
) => {
  date = removeTimeFromDate(date);
  laterDate = removeTimeFromDate(laterDate);
  previousDate = removeTimeFromDate(previousDate);
  return isDateAfter(laterDate, date) && isDateBefore(previousDate, date);
};

export const isMonthEqualOrAfter = (date: Date, dateToCompare: Date) => {
  date = removeTimeFromDate(date);
  dateToCompare = removeTimeFromDate(dateToCompare);
  return differenceInCalendarMonths(date, dateToCompare) >= 0;
};

export const isMonthEqualOrBefore = (date: Date, dateToCompare: Date) => {
  date = removeTimeFromDate(date);
  dateToCompare = removeTimeFromDate(dateToCompare);
  return differenceInCalendarMonths(date, dateToCompare) <= 0;
};

/**
 * Returns true if the given dates are in the same month and year.
 */
export const isTheSameMonth = (date: Date, dateToCompare: Date) => {
  date = removeTimeFromDate(date);
  dateToCompare = removeTimeFromDate(dateToCompare);
  return date.getMonth() === dateToCompare.getMonth();
};

export const isSameMonthOfTheSameYear = (dateOne: Date, dateTwo: Date) => {
  dateOne = removeTimeFromDate(dateOne);
  dateTwo = removeTimeFromDate(dateTwo);
  return isSameMonth(dateOne, dateTwo) && isSameYear(dateOne, dateTwo);
};
