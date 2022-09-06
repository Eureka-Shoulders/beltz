export function formatToCurrency(value: number | bigint = 0, currency = 'BRL') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(value);
}
