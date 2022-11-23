import { Editor, Element as SlateElement } from 'slate';
import { E_ELEMENT } from '../constants';
import { CustomEditor } from '../types';

const isElementActive = (editor: CustomEditor, elementType: E_ELEMENT) => {
	const linkEntries = Array.from(
		Editor.nodes(editor, {
			match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === elementType,
		}),
	);
	return linkEntries.length > 0;
};

export { isElementActive };
