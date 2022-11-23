import { Transforms } from 'slate';
import { E_ELEMENT } from '../constants';
import { isInsertingTag } from '../queries';
import { wrapTag } from '../transforms';
import { TPlugin } from '../types';

const withTag: TPlugin = (editor) => {
	const { isInline, insertText } = editor;

	editor.isInline = (element) => {
		return element.type === E_ELEMENT.TAG ? true : isInline(element);
	};

	editor.insertText = (text) => {
		const { isTag, curLeafText, curLeafPath } = isInsertingTag(editor, text);

		if (isTag) {
			const tagText = curLeafText.substring(1);
			Transforms.select(editor, curLeafPath);
			wrapTag(editor, tagText);

			return;
		}

		insertText(text);
	};

	return editor;
};

export { withTag };
