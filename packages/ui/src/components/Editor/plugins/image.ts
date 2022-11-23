import { E_ELEMENT } from '../constants';
import { IMAGE_EXTENSIONS } from '../constants';
import { insertImage } from '../transforms';
import { TPlugin } from '../types';
import { isUrl } from '../utils';

const isImageUrl = (url: any) => {
	if (!url) return false;
	if (!isUrl(url)) return false;
	const ext = new URL(url).pathname.split('.').pop();
	return ext !== undefined ? IMAGE_EXTENSIONS.includes(ext) : false;
};

const withImage: TPlugin = (editor) => {
	const { insertData, isVoid } = editor;

	editor.isVoid = (element) => {
		return element.type === E_ELEMENT.IMAGE ? true : isVoid(element);
	};

	editor.insertData = (data: DataTransfer) => {
		const text = data.getData('text/plain');
		const { files } = data;

		if (files && files.length > 0) {
			for (const file of Array.from(files)) {
				const reader = new FileReader();
				const [mime] = file.type.split('/');

				if (mime === 'image') {
					reader.addEventListener('load', () => {
						const url = reader.result as string;
						insertImage(editor, { url, name: file.name, mimeType: file.type });
					});

					reader.readAsDataURL(file);
				}
			}
		} else if (isImageUrl(text)) {
			insertImage(editor, { url: text });
		} else {
			insertData(data);
		}
	};

	return editor;
};

export { isImageUrl, withImage };
