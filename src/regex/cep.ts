/**
 * This function just validate the format of CEP, not the CEP itself.
 * @param raw string
 * @returns true if valid
 */

export function cep(raw: string) {
  const regex = /^\d{5}-\d{3}$/;

  return regex.test(raw);
}
