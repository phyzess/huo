import { Editor, NodeEntry } from 'slate';
import { E_ELEMENT } from '../constants';
import { CustomEditor } from '../types';
import { getBlockEle } from '../utils';

const isListType = (format: E_ELEMENT) => {
	switch (format) {
		case E_ELEMENT.BULLETED_LIST:
		case E_ELEMENT.NUMBERED_LIST:
			return true;
		default:
			return false;
	}
};

const isFirstListItem = ([block, path]: NodeEntry) => {
	return path[1] === 0;
};

const isListRow = (editor: CustomEditor) => {
	const block = getBlockEle(editor);
	return block.type === E_ELEMENT.LIST_ITEM;
};

const isEmptyListRow = (editor: CustomEditor) => {
	if (!isListRow(editor)) {
		return false;
	}

	const block = getBlockEle(editor);
	return Editor.isEmpty(editor, block);
};

export { isEmptyListRow, isFirstListItem, isListRow, isListType };
