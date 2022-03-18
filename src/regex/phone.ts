export function phone(raw: string) {
  const regex = /^\d{2} \d{4,5}-\d{4}$/;

  return regex.test(raw);
}
