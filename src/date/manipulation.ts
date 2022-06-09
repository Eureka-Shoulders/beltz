import { format, getDate, getMonth, getYear, parse, parseISO } from 'date-fns';

export const isDate = (date: string | Date | undefined | null) => {
  if (!date) return false;
  if (date instanceof Date) {
    return date instanceof Date && !isNaN(date.getTime());
  }
  const dateObject = parse(date, 'dd/MM/yyyy', new Date());
  return dateObject instanceof Date && !isNaN(dateObject.getTime());
};

export const removeTimeFromDate = (date: Date) =>
  new Date(getYear(date), getMonth(date), getDate(date));

export const formatDateToISO = (
  date: Date | number | string,
  dateFormat = 'yyyy-MM-dd'
) => parseISO(format(new Date(date), dateFormat));

export const startOfDay = (date: string | Date | number) => {
  const parsedDate = new Date(date);
  parsedDate.setUTCHours(0, 0, 0, 0);
  return parsedDate;
};

export const endOfDay = (date: string | Date | number) => {
  const parsedDate = new Date(date);
  parsedDate.setUTCHours(23, 59, 59, 999);
  return parsedDate;
};
