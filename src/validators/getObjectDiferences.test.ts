import { getObjectDiferences } from './getObjectDiferences';

describe('getObjectDiferences', () => {
  const emptyObject = {};
  const nonEmptyObject = { a: 1 };
  it('should return empty object by comparing empty objects', () => {
    expect(getObjectDiferences(emptyObject, emptyObject)).toStrictEqual(
      emptyObject
    );
  });

  it('should return new values by comparing empty object with non empty object', () => {
    expect(getObjectDiferences(emptyObject, nonEmptyObject)).toStrictEqual(
      nonEmptyObject
    );
  });

  it('should return empty object by comparing non empty object with empty object', () => {
    expect(getObjectDiferences(nonEmptyObject, emptyObject)).toStrictEqual(
      emptyObject
    );
  });

  it('should return empty object by comparing non empty objects with same values', () => {
    expect(getObjectDiferences(nonEmptyObject, nonEmptyObject)).toStrictEqual(
      emptyObject
    );
  });

  it('should return new values by comparing non empty objects with different values', () => {
    expect(getObjectDiferences(nonEmptyObject, { a: 2 })).toStrictEqual({
      a: 2,
    });
  });
});
