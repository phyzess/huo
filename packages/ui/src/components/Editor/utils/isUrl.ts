const protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;

const localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/;
const nonLocalhostDomainRE = /^[^\s\.]+\.\S{2,}$/;

function isUrl(url: string): boolean {
	const match = url.match(protocolAndDomainRE);
	if (!match) {
		return false;
	}

	const everythingAfterProtocol = match[1];
	if (!everythingAfterProtocol) {
		return false;
	}

	if (
		localhostDomainRE.test(everythingAfterProtocol)
		|| nonLocalhostDomainRE.test(everythingAfterProtocol)
	) {
		return true;
	}

	return false;
}

export { isUrl };
