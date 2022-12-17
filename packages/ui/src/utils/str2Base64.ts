// 字符串转base64
const encode2Base64 = (str: string) => {
	// 对字符串进行编码
	const encode = encodeURI(str);
	// 对编码的字符串转化base64
	return btoa(encode);
};

const decodeFromBase64 = (base64: string) => {
	// 对base64转编码
	const decode = atob(base64);
	// 编码转字符串
	return decodeURI(decode);
};

export { decodeFromBase64, encode2Base64 };
