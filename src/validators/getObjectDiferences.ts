export function getObjectDiferences<T extends Record<string, any>>(
  older: T,
  newer: Partial<T>
) {
  const fieldsChanged: Partial<T> = {};
  Object.entries(newer).map(([newKey, newValue]) => {
    if (older[newKey] === newValue) {
      return;
    }
    fieldsChanged[newKey as keyof T] = newValue;
  });
  return fieldsChanged;
}
