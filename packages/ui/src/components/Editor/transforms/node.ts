import { Editor, Element as SlateElement, Transforms } from 'slate';
import { E_ELEMENT, EMPTY_ELEMENT } from '../constants';
import { CustomEditor } from '../types';

const insertEmptyRow = (editor: CustomEditor) => {
	Editor.insertNode(editor, EMPTY_ELEMENT);
};

const setNodes = (editor: CustomEditor, newProperties: Partial<SlateElement>) => {
	Transforms.setNodes<SlateElement>(editor, newProperties, {
		match: (n) => Editor.isBlock(editor, n),
	});
};

const unwrapElement = (editor: CustomEditor, elementType: E_ELEMENT) => {
	Transforms.unwrapNodes(editor, {
		match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === elementType,
	});
};

export { insertEmptyRow, setNodes, unwrapElement };
