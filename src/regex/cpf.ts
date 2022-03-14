/**
 * This function just validate the format of CPF, not the CPF itself.
 * @param raw string
 * @returns true if valid
 */
export function cpf(raw: string) {
  const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

  return regex.test(raw);
}
