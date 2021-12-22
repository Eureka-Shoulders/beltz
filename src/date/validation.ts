import { isValid } from 'date-fns';

export const isValidDate = (value: string | number | Date) =>
  isValid(new Date(value));
