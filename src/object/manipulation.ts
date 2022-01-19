// @ts-nocheck
import * as R from 'ramda';

export function removeDeepData(data: unknown, fields: string[]): unknown {
  if (typeof data === 'object' && data !== null && !(data instanceof Date)) {
    if (Array.isArray(data)) {
      return R.map((item) => removeDeepData(item, fields), data);
    } else {
      return R.pipe(
        R.toPairs,
        R.map(([key, value]) =>
          R.includes(key, fields)
            ? undefined
            : [key, removeDeepData(value, fields)]
        ),
        R.filter(Boolean),
        R.fromPairs
      )(data);
    }
  }

  return data;
}
