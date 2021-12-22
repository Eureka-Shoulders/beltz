import {
  isDateAfter,
  isDateBefore,
  isEqualDate,
  isDateBetween,
  isDateEqualOrAfter,
  isDateEqualOrBefore,
  isDateEqualOrBetween,
  isMonthEqualOrAfter,
  isMonthEqualOrBefore,
  isTheSameMonth,
  isSameMonthOfTheSameYear,
} from './comparison';

describe('isEqualDate', () => {
  const laterDate = new Date('2003-01-13');
  const previousDate = new Date('2003-01-10');
  it('should return `false` with a later date', () => {
    expect(isEqualDate(previousDate, laterDate)).toBe(false);
  });
  it('should return `false` with a previous date', () => {
    expect(isEqualDate(laterDate, previousDate)).toBe(false);
  });

  it('should return `true` with a equal date', () => {
    expect(isEqualDate(previousDate, previousDate)).toEqual(true);
  });
});

describe('isDateAfter', () => {
  const laterDate = new Date('2003-01-13');
  const previousDate = new Date('2003-01-10');
  it('should return `true` with a later date', () => {
    expect(isDateAfter(laterDate, previousDate)).toBe(true);
  });
  it('should return `false` with a previous date', () => {
    expect(isDateAfter(previousDate, laterDate)).toBe(false);
  });

  it('should return `false` with a equal date', () => {
    expect(isDateAfter(previousDate, previousDate)).toEqual(false);
  });
});

describe('isDateEqualOrAfter', () => {
  const laterDate = new Date('2003-01-13');
  const previousDate = new Date('2003-01-10');
  it('should return `true` with a later date', () => {
    expect(isDateEqualOrAfter(laterDate, previousDate)).toBe(true);
  });
  it('should return `false` with a previous date', () => {
    expect(isDateEqualOrAfter(previousDate, laterDate)).toBe(false);
  });

  it('should return `true` with a equal date', () => {
    expect(isDateEqualOrAfter(previousDate, previousDate)).toEqual(true);
  });
});

describe('isDateBefore', () => {
  const laterDate = new Date('2003-01-13');
  const previousDate = new Date('2003-01-10');
  it('should return `true` with a previous date', () => {
    expect(isDateBefore(previousDate, laterDate)).toBe(true);
  });
  it('should return `false` with a later date', () => {
    expect(isDateBefore(laterDate, previousDate)).toBe(false);
  });

  it('should return `false` with a equal date', () => {
    expect(isDateBefore(previousDate, previousDate)).toEqual(false);
  });
});

describe('isDateEqualOrBefore', () => {
  it('should return `true` with a previous date', () => {
    const date = new Date('2003-01-13');
    const laterDate = new Date('2003-01-20');
    expect(isDateEqualOrBefore(date, laterDate)).toBe(true);
  });
  it('should return `false` with a later date', () => {
    const date = new Date('2003-01-13');
    const laterDate = new Date('2003-01-20');
    expect(isDateEqualOrBefore(laterDate, date)).toBe(false);
  });

  it('should return `true` with a equal date', () => {
    const date = new Date('2003-01-13');
    expect(isDateEqualOrBefore(date, date)).toEqual(true);
  });
});

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

describe('isTheSameMonth', () => {
  const monthDate = new Date('2003-01-13');
  const sameMonthWithSameYear = new Date('2003-01-13');
  const sameMonth = new Date('2021-01-13');
  const laterMonth = new Date('2021-05-13');
  it('should return `true` with dates of the same year', () => {
    expect(isTheSameMonth(monthDate, sameMonthWithSameYear)).toBe(true);
  });

  it('should return `true` with different year dates', () => {
    expect(isTheSameMonth(monthDate, sameMonth)).toBe(true);
  });

  it('should return `false` with previous month', () => {
    expect(isTheSameMonth(laterMonth, monthDate)).toBe(false);
  });

  it('should return `false` with later month', () => {
    expect(isTheSameMonth(monthDate, laterMonth)).toEqual(false);
  });
});

describe('isSameMonthOfTheSameYear', () => {
  const monthDate = new Date('2003-01-13');
  const sameMonthWithSameYear = new Date('2003-01-13');
  const sameMonth = new Date('2021-01-13');
  const laterMonth = new Date('2021-05-13');
  it('should return `true` with dates of the same year', () => {
    expect(isSameMonthOfTheSameYear(monthDate, sameMonthWithSameYear)).toBe(
      true
    );
  });

  it('should return `false` with different year dates', () => {
    expect(isSameMonthOfTheSameYear(monthDate, sameMonth)).toBe(false);
  });

  it('should return `false` with previous month', () => {
    expect(isSameMonthOfTheSameYear(laterMonth, monthDate)).toBe(false);
  });

  it('should return `false` with later month', () => {
    expect(isSameMonthOfTheSameYear(monthDate, laterMonth)).toEqual(false);
  });
});
