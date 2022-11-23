import { Editor, Element as SlateElement, Transforms } from 'slate';
import { E_ELEMENT } from '../constants';
import { isBlockActive, isListType } from '../queries';
import { CustomEditor, IListItemElement, TListType } from '../types';
import { wrapNodesWithListBlock } from './list';
import { setNodes } from './node';

const toggleBlock = (editor: CustomEditor, format: E_ELEMENT) => {
	const isActive = isBlockActive(editor, format);
	const isList = isListType(format);

	Transforms.unwrapNodes(editor, {
		match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && isListType(n.type),
		split: true,
	});
	const newProperties: Partial<SlateElement> = {
		type: isActive ? E_ELEMENT.PARAGRAPH : isList ? E_ELEMENT.LIST_ITEM : format,
	};
	if (!isActive && isList) {
		(newProperties as Partial<IListItemElement>).parentType = format as TListType;
	}
	// set current node to target format type
	// is list, the format type is list-item
	setNodes(editor, newProperties);

	// if not active and format is list
	// wrap current node with a new node witch type is TListType
	if (!isActive && isList) {
		wrapNodesWithListBlock(editor, format as TListType);
	}
};

export { toggleBlock };
