import { huoLogger } from '@/utils';
import ky, { AfterResponseHook } from 'ky';

const KY_LOGGER_TAG = 'ky';
const KY_REQUEST_FAIL_TAG = 'Request Fail';

const logger = huoLogger.clone({ tags: [KY_LOGGER_TAG] });

const responseLogHook: AfterResponseHook = (_request, _options, response) => {
	if (response.status < 200 || response.status >= 300) {
		const deleteTag = logger.tag(KY_REQUEST_FAIL_TAG);
		logger.error(response);
		deleteTag();
	}
};

const k = ky.create({
	hooks: {
		afterResponse: [responseLogHook],
	},
});

export { k };
