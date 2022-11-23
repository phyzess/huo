import { E_ELEMENT } from '../constants';
import { wrapLink } from '../transforms';
import { TPlugin } from '../types';
import { isUrl } from '../utils';

const withLink: TPlugin = (editor) => {
	const { insertData, insertText, isInline } = editor;

	editor.isInline = (element) => {
		return element.type === E_ELEMENT.LINK ? true : isInline(element);
	};

	editor.insertText = (text) => {
		if (text && isUrl(text)) {
			wrapLink(editor, text);
		} else {
			insertText(text);
		}
	};

	editor.insertData = (data: DataTransfer) => {
		const text = data.getData('text/plain');

		if (text && isUrl(text)) {
			wrapLink(editor, text);
		} else {
			insertData(data);
		}
	};

	return editor;
};

export { withLink };
