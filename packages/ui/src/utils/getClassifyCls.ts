import { BRAND, SHAPE, SIZE, STATE } from '../constants';
import type { TBrand, TShape, TSize, TState } from '../types';

type TOptionKeys = TBrand | TState | TShape | TSize | 'disabled';
type TOptions = Record<TOptionKeys, string>;

const getClassifyCls = (prefix: string) => {
  const originObj = [
    ...Object.values(BRAND),
    ...Object.values(STATE),
    ...Object.values(SHAPE),
    ...Object.values(SIZE),
    'disabled',
  ].reduce<TOptions>(
    (acc, opt) => ({
      ...acc,
      [opt]: `${prefix}-${opt}`,
    }),
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    {} as TOptions,
  );

  const proxyObj = new Proxy(originObj, {
    get: (obj, prop: TOptionKeys) => (prop in obj ? obj[prop] : ''),
  });

  return proxyObj;
};

export { getClassifyCls };
