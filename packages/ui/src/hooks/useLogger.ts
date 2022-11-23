import { useRef } from 'react';
import { Logger, ILoggerOptions } from '../utils/Logger';

let singletonLogger: Logger;

const useLogger = (options?: ILoggerOptions, singleton = true): Logger => {
  const loggerRef = useRef<Logger>();

  if (singleton) {
    if (!singletonLogger) {
      singletonLogger = new Logger(options);
    }
    return singletonLogger;
  }

  if (!loggerRef.current) {
    loggerRef.current = new Logger(options);
  }
  return loggerRef.current;
};

export { useLogger };
export type { ILoggerOptions };
