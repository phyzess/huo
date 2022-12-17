import { Logger } from '@phyzess/huo-ui';

const HUO_LOGGER_BASE_BAG = 'HUO';

const huoLogger = new Logger();

huoLogger.tag(HUO_LOGGER_BASE_BAG);

export { huoLogger };
