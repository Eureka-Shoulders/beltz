import { format, getDate, getMonth, getYear, parseISO } from 'date-fns';

export const removeTimeFromDate = (date: Date) =>
  new Date(getYear(date), getMonth(date), getDate(date));

export const formatDateToISO = (
  date: Date | number | string,
  dateFormat = 'yyyy-MM-dd'
) => parseISO(format(new Date(date), dateFormat));
