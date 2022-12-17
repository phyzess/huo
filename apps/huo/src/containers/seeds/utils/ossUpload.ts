import { aliOss } from '@/api';
import type { CreatePageParameters } from '@/api/notion';
import { SerializeBlocks } from '../types';

const base64ToBlob = (urlData: string, type?: string) => {
	const arr = urlData.split(',');
	const mime = arr[0].match(/data:(.*);base64/)?.[1] || type || 'image/png';
	// 去掉urL的头，并转化为byte
	const bytes = window.atob(arr[1]);
	// 处理异常，将ascii码小于0的转换为大于0
	const ab = new ArrayBuffer(bytes.length);
	// 生成视图(直接针对内存)：8位无符号整数，长度1个字节
	const ia = new Uint8Array(ab);
	for (let i = 0; i < bytes.length; i++) {
		ia[i] = bytes.charCodeAt(i);
	}

	return new Blob([ab], {
		type: mime,
	});
};

const convertImageBase64ToOssFile = async (base64: string, mimeType?: string, name?: string) => {
	const imgFile = base64ToBlob(base64, mimeType);
	const ossFile = await aliOss.put(imgFile, name);
	return ossFile;
};

const pretreatImageBlocks = async (serializedBlocks: SerializeBlocks): Promise<CreatePageParameters['children']> => {
	return Promise.all(
		serializedBlocks.map(async (block) => {
			if (block.type !== 'image') {
				return block;
			}
			const { url, mimeType, name } = block.image.external;
			const ossFile = await convertImageBase64ToOssFile(url, mimeType, name);
			return {
				...block,
				image: {
					...block.image,
					external: {
						url: ossFile.url,
					},
				},
			};
		}),
	);
};

export { pretreatImageBlocks };
