import { Editor, Element as SlateElement, Point, Range, Transforms } from 'slate';
import { E_ELEMENT, SHORTCUTS } from '../constants';
import { isListType } from '../queries';
import { setNodes, wrapNodesWithListBlock } from '../transforms';
import { TPlugin } from '../types';

const withShortcuts: TPlugin = (editor) => {
	const { deleteBackward, insertText } = editor;

	editor.insertText = (text) => {
		const { selection } = editor;

		if (text === ' ' && selection && Range.isCollapsed(selection)) {
			const { anchor } = selection;

			// check block level
			// toggle block
			const block = Editor.above(editor, {
				match: (n) => Editor.isBlock(editor, n),
			});
			const blockPath = block ? block[1] : [];
			const rowStart = Editor.start(editor, blockPath);
			const range = { anchor, focus: rowStart };
			const textBeforeSpace = Editor.string(editor, range);
			const type = SHORTCUTS[textBeforeSpace];
			if (type) {
				Transforms.select(editor, range);
				Transforms.delete(editor);
				setNodes(editor, {
					type,
				});

				if (type === E_ELEMENT.LIST_ITEM) {
					wrapNodesWithListBlock(editor, E_ELEMENT.BULLETED_LIST);
				}

				return;
			}
		}

		insertText(text);
	};

	editor.deleteBackward = (...args) => {
		const { selection } = editor;

		if (selection && Range.isCollapsed(selection)) {
			const match = Editor.above(editor, {
				match: (n) => Editor.isBlock(editor, n),
			});

			if (match) {
				const [block, path] = match;
				const start = Editor.start(editor, path);

				if (
					!Editor.isEditor(block)
					&& SlateElement.isElement(block)
					&& block.type !== E_ELEMENT.PARAGRAPH
					&& Point.equals(selection.anchor, start)
				) {
					setNodes(editor, {
						type: E_ELEMENT.PARAGRAPH,
					});

					if (block.type === E_ELEMENT.LIST_ITEM) {
						Transforms.unwrapNodes(editor, {
							match: (n) => {
								return !Editor.isEditor(n) && SlateElement.isElement(n) && isListType(n.type);
							},
							split: true,
							mode: 'all',
						});
					}

					return;
				}
			}

			deleteBackward(...args);
		}
	};

	return editor;
};

export { withShortcuts };
