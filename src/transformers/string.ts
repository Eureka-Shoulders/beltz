export function onlyNumbers(input: string | number) {
  return String(input).replace(/[^\d]/g, '');
}

export function removeWhitespace(str: string): string {
  return str.replace(/\s/g, '');
}

export function capitalizeString(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
