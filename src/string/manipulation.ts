export function onlyNumbers(input: string | number) {
  return String(input).replace(/[^\d]/g, '');
}
