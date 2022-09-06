import { formatToCurrency } from './number';

describe('formatToCurrency', () => {
  it('should return formatted currency', () => {
    const result = formatToCurrency(999888777);

    expect(result).toEqual('R$999,888,777.00');
  });

  it('should return formatted currency by 0', () => {
    const result = formatToCurrency(0);

    expect(result).toEqual('R$0.00');
  });

  it('should return formatted currency by undefined', () => {
    const result = formatToCurrency(undefined);

    expect(result).toEqual('R$0.00');
  });

  it('should return formatted currency with non default currency', () => {
    const result = formatToCurrency(123123123, 'USD');

    expect(result).toEqual('$123,123,123.00');
  });
});
