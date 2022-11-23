import { Editor, Element as SlateElement } from 'slate';
import { E_ELEMENT } from '../constants';
import { CustomEditor } from '../types';

const isBlockActive = (editor: CustomEditor, format: E_ELEMENT) => {
	const { selection } = editor;
	if (!selection) return false;

	const [match] = Array.from(
		Editor.nodes(editor, {
			at: Editor.unhangRange(editor, selection),
			match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
		}),
	);

	return !!match;
};

export { isBlockActive };
