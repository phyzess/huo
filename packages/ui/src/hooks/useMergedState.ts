import { useCallback, useEffect, useRef } from 'react';
import { useState } from './useState';

/**
 * use props value if provided.
 */
const useMergedState = <T>(
  localValue: T | (() => T),
  options?: {
    value?: T;
    defaultValue?: T | (() => T);
    onChange?: (value: T, prevValue: T) => void;
    postState?: (value: T) => T;
  }
): [T, (value: T, ignoreDestroy?: boolean) => void] => {
  const { defaultValue, value, onChange, postState } = options || {};

  const [innerValue, setInnerValue] = useState<T>(() => {
    if (value !== undefined) {
      return value;
    }
    if (defaultValue !== undefined) {
      if (typeof defaultValue === 'function') {
        return (defaultValue as () => T)();
      }
      return defaultValue;
    }

    if (typeof localValue === 'function') {
      return (localValue as () => T)();
    }
    return localValue;
  });

  let mergedValue = value !== undefined ? value : innerValue;
  if (postState) {
    mergedValue = postState(mergedValue);
  }

  // setState
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const triggerChange = useCallback(
    (newValue: T, ignoreDestroy?: boolean) => {
      setInnerValue(newValue, ignoreDestroy);
      if (mergedValue !== newValue && onChangeRef.current) {
        onChangeRef.current(newValue, mergedValue);
      }
    },
    [mergedValue, onChangeRef]
  );

  // Effect of reset value to `undefined`
  const firstRenderRef = useRef(true);
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if (value === undefined) {
      setInnerValue(localValue);
    }
  }, [localValue, value]);

  return [mergedValue, triggerChange];
};

export { useMergedState };
