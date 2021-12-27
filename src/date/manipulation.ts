import { format, getDate, getMonth, getYear, parseISO } from 'date-fns';

export const removeTimeFromDate = (date: Date) =>
  new Date(getYear(date), getMonth(date), getDate(date));

export const parseDateToString = (date: Date) => String(date);

export const parseStringToDate = (date: string) => new Date(date);

export const formatDateToISO = (
  date: Date | number | string,
  dateFormat = 'yyyy-MM-dd'
) => parseISO(format(new Date(date), dateFormat));

export const parseDateToStringWithoutHours = (
  date: Date,
  dateFormat = 'yyyy-MM-dd'
) => format(date, dateFormat);

export const formatOnlyDate = (
  date: Date | string | number,
  pattern = 'yyyy/MM/dd'
) => format(new Date(date), pattern);

export const formatDateTime = (
  date: Date | number | string,
  pattern = 'yyyy/MM/dd - HH:mm'
) => format(new Date(date), pattern);
