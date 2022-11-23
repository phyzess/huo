import { Editor, Element as SlateElement, Range, Transforms } from 'slate';
import { generateId } from '../../../utils';
import { E_ELEMENT } from '../constants';
import { isElementActive } from '../queries';
import { unwrapElement } from '../transforms';
import { CustomEditor, IBaseTextElement } from '../types';

const wrapTag = (editor: CustomEditor, text: string) => {
	if (isElementActive(editor, E_ELEMENT.TAG)) {
		unwrapElement(editor, E_ELEMENT.TAG);
	}

	const { selection } = editor;
	if (selection && !Range.isCollapsed(selection)) {
		const id = generateId(6);
		const tag: IBaseTextElement = {
			type: E_ELEMENT.TAG,
			id,
			children: [],
		};

		Transforms.wrapNodes(editor, tag, { split: true });
		const ele = Editor.above(editor, {
			match: (n) => !Editor.isBlock(editor, n) && SlateElement.isElement(n) && n.id === id,
		});
		if (ele) {
			Transforms.insertText(editor, text, {
				at: ele[1],
			});
		}
		Transforms.collapse(editor, { edge: 'end' });

		Transforms.select(editor, {
			anchor: Editor.end(editor, []),
			focus: Editor.end(editor, []),
		});
	}
};

export { wrapTag };
