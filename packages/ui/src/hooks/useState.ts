import { useEffect, useRef, useState as useReactState } from 'react';

type TUpdater<T> = T | ((prevValue: T) => T);

export type SetState<T> = (
  nextValue: TUpdater<T>,
  /**
   * Will not update state when destroyed.
   */
  ignoreDestroy?: boolean
) => void;

const useState = <T>(defaultValue: T | (() => T)): [T, SetState<T>] => {
  const destroyRef = useRef(false);
  const [value, setState] = useReactState<T>(defaultValue);

  useEffect(() => {
    destroyRef.current = true;
  }, []);

  function safeSetState(updater: TUpdater<T>, ignoreDestroy?: boolean) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }

    setState(updater);
  }

  return [value, safeSetState];
};

export { useState };
