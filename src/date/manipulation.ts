import { format, getDate, getMonth, getYear, parseISO } from 'date-fns';

export const removeTimeFromDate = (date: Date) =>
  new Date(getYear(date), getMonth(date), getDate(date));

export const parseDateToString = (date: Date) => String(date);

export const parseStringToDate = (date: string) => new Date(date);

export const formatDateToISO = (date: Date, dateFormat = 'yyyy-MM-dd') =>
  parseISO(format(date, dateFormat));

export const parseDateToStringWithoutHours = (
  date: Date,
  dateFormat = 'yyyy-MM-dd'
) => format(date, dateFormat);

export const formatOnlyDate = (date: Date | number, pattern = 'yyyy/MM/dd') =>
  format(date, pattern);

export const formatDateTime = (
  date: Date | number,
  pattern = 'yyyy/MM/dd - HH:mm'
) => format(date, pattern);
