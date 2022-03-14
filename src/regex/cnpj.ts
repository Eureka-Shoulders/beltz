/**
 * This function just validate the format of CNPJ, not the CNPJ itself.
 * @param raw string
 * @returns true if valid
 */

export function cnpj(raw: string) {
  const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

  return regex.test(raw);
}
