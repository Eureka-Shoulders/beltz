import { removeDeepData } from './object';

describe('removeDeepData', () => {
  const fields = ['password'];

  it('should return a object without password', () => {
    const data = {
      name: 'John',
      password: '123456',
      age: 30,
    };

    const result = removeDeepData(data, fields);

    expect(result).toEqual({
      name: 'John',
      age: 30,
    });
  });
  it('should return a array of objects without password', () => {
    const data = [
      {
        name: 'John',
        password: '123456',
        age: 30,
      },
      {
        name: 'Jane',
        password: '123456',
        age: 30,
      },
    ];

    const result = removeDeepData(data, fields);

    expect(result).toEqual([
      {
        name: 'John',
        age: 30,
      },
      {
        name: 'Jane',
        age: 30,
      },
    ]);
  });

  it('should return a object without password on deep level', () => {
    const data = {
      name: 'John',
      password: '123456',
      age: 30,
      security: {
        secret: {
          password: '123456',
        },
      },
    };

    const result = removeDeepData(data, fields);

    expect(result).toEqual({
      name: 'John',
      age: 30,
      security: {
        secret: {},
      },
    });
  });

  it('should return a object without a object on deep level', () => {
    const data = {
      name: 'John',
      password: '123456',
      age: 30,
      security: {
        secret: {
          password: '123456',
        },
      },
    };

    const result = removeDeepData(data, ['secret', 'password']);

    expect(result).toEqual({
      name: 'John',
      age: 30,
      security: {},
    });
  });

  it('should return a array of objects without password on deep level', () => {
    const data = [
      {
        name: 'John',
        password: '123456',
        age: 30,
        security: {
          secret: {
            password: '123456',
          },
        },
      },
      {
        name: 'Jane',
        password: '123456',
        age: 30,
        security: {
          secret: {
            password: '123456',
          },
        },
      },
    ];

    const result = removeDeepData(data, fields);

    expect(result).toEqual([
      {
        name: 'John',
        age: 30,
        security: {
          secret: {},
        },
      },
      {
        name: 'Jane',
        age: 30,
        security: {
          secret: {},
        },
      },
    ]);
  });
});
