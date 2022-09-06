import {
  isDateBetween,
  isDateEqualOrBetween,
  isMonthEqualOrAfter,
  isMonthEqualOrBefore,
} from './date';

describe('isDateBetween', () => {
  const previousDate = new Date('2003-01-10');
  const date = new Date('2003-01-13');
  const laterDate = new Date('2003-01-20');
  it('should return `true` with correct dates', () => {
    expect(isDateBetween(date, previousDate, laterDate)).toBe(true);
  });

  it('should return `false` with date equal previous date', () => {
    expect(isDateBetween(previousDate, previousDate, laterDate)).toBe(false);
  });

  it('should return `false` with date equal later date', () => {
    expect(isDateBetween(laterDate, previousDate, laterDate)).toEqual(false);
  });

  it('should return `false` with date before previous date', () => {
    expect(isDateBetween(previousDate, date, laterDate)).toBe(false);
  });

  it('should return `false` with date after later date', () => {
    expect(isDateBetween(previousDate, date, laterDate)).toEqual(false);
  });
});

describe('isDateEqualOrBetween', () => {
  it('should return `true` with correct dates', () => {
    const previousDate = new Date('2003-01-10');
    const date = new Date('2003-01-13');
    const laterDate = new Date('2003-01-20');
    expect(isDateEqualOrBetween(date, previousDate, laterDate)).toBe(true);
  });

  it('should return `true` with date equal previous date', () => {
    const previousDate = new Date('2003-01-10');
    const laterDate = new Date('2003-01-20');
    expect(isDateEqualOrBetween(previousDate, previousDate, laterDate)).toBe(
      true
    );
  });

  it('should return `true` with date equal later date', () => {
    const previousDate = new Date('2003-01-10');
    const laterDate = new Date('2003-01-20');
    expect(isDateEqualOrBetween(laterDate, previousDate, laterDate)).toEqual(
      true
    );
  });

  it('should return `false` with date before previous date', () => {
    const previousDate = new Date('2003-01-10');
    const previousDate2 = new Date('2003-01-5');
    const laterDate = new Date('2003-01-20');
    expect(isDateEqualOrBetween(previousDate2, previousDate, laterDate)).toBe(
      false
    );
  });

  it('should return `false` with date after later date', () => {
    const previousDate = new Date('2003-01-10');
    const laterDate = new Date('2003-01-20');
    const laterDate2 = new Date('2003-01-30');
    expect(isDateEqualOrBetween(laterDate2, previousDate, laterDate)).toEqual(
      false
    );
  });
});

describe('isMonthEqualOrAfter', () => {
  const previousMonth = new Date('2003-01-13');
  const laterMonth = new Date('2003-05-13');
  it('should return `true` with correct dates', () => {
    expect(isMonthEqualOrAfter(laterMonth, previousMonth)).toBe(true);
  });

  it('should return `false` with previous month', () => {
    expect(isMonthEqualOrAfter(previousMonth, laterMonth)).toBe(false);
  });

  it('should return `true` with date equal month', () => {
    expect(isMonthEqualOrAfter(laterMonth, laterMonth)).toEqual(true);
  });
});

describe('isMonthEqualOrBefore', () => {
  const previousMonth = new Date('2003-01-13');
  const laterMonth = new Date('2003-05-13');
  it('should return `true` with correct dates', () => {
    expect(isMonthEqualOrBefore(previousMonth, laterMonth)).toBe(true);
  });

  it('should return `false` with previous month', () => {
    expect(isMonthEqualOrBefore(laterMonth, previousMonth)).toBe(false);
  });

  it('should return `true` with date equal month', () => {
    expect(isMonthEqualOrBefore(previousMonth, previousMonth)).toEqual(true);
  });
});
