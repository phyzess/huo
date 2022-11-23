import { Editor, Element as SlateElement, Transforms } from 'slate';
import { generateId } from '../../../utils';
import { E_ELEMENT } from '../constants';
import { CustomEditor, TListType } from '../types';

const wrapNodesWithListBlock = (editor: CustomEditor, format: TListType, level = 0) => {
	const block = { type: format, id: generateId(6), level, children: [] };
	Transforms.wrapNodes(editor, block, {
		match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === E_ELEMENT.LIST_ITEM,
	});
};

export { wrapNodesWithListBlock };
