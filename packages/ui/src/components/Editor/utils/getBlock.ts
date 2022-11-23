import { Editor } from 'slate';
import { EMPTY_ELEMENT } from '../constants';
import { CustomEditor, CustomElement } from '../types';

const getBlock = (editor: CustomEditor) => {
	const block = Editor.above<CustomElement>(editor, {
		match: (n) => Editor.isBlock(editor, n),
	});
	return block;
};

const getBlockEle = (editor: CustomEditor) => {
	const blockEntry = getBlock(editor);
	return blockEntry ? blockEntry[0] : EMPTY_ELEMENT;
};

const getBlockPath = (editor: CustomEditor) => {
	const blockEntry = getBlock(editor);
	return blockEntry ? blockEntry[1] : [];
};

export { getBlock, getBlockEle, getBlockPath };
