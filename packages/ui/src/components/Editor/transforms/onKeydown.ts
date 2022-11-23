import isHotkey from 'is-hotkey';
import React from 'react';
import { Editor, Element as SlateElement, Transforms } from 'slate';
import { E_ELEMENT, hotkeyFormatMapping, HOTKEYS } from '../constants';
import { isEmptyListRow, isFirstListItem, isListRow, isListType } from '../queries';
import { CustomEditor, CustomElement, IListElement } from '../types';
import { wrapNodesWithListBlock } from './list';
import { setNodes } from './node';
import { toggleMark } from './toggleMark';

const processMarkToggle = (event: React.KeyboardEvent<HTMLDivElement>, editor: CustomEditor) => {
	for (const hotkey in hotkeyFormatMapping) {
		if (isHotkey(hotkey, event)) {
			event.preventDefault();
			const mark = hotkeyFormatMapping[hotkey];
			toggleMark(editor, mark);
		}
	}
};

const processTab = (event: React.KeyboardEvent<HTMLDivElement>, editor: CustomEditor) => {
	if (isHotkey(HOTKEYS.TAB, event) || isHotkey(HOTKEYS.TAB_REVERT, event)) {
		event.preventDefault();

		const block = Editor.above<CustomElement>(editor, {
			match: (n) => Editor.isBlock(editor, n),
		});

		if (block && block[0].type === E_ELEMENT.LIST_ITEM) {
			const parent = Editor.parent(editor, block[1]);
			const parentBlock = parent[0] as IListElement;

			// if key is tab, convert to sub list
			if (
				isHotkey(HOTKEYS.TAB, event)
				&& parentBlock.children.length >= 2
				&& !(parentBlock.level === 0 && isFirstListItem(block))
			) {
				wrapNodesWithListBlock(editor, parentBlock.type, parentBlock.level + 1);
			}

			// if key is shift+tab, unwrap the nearest ancestor list
			if (isHotkey(HOTKEYS.TAB_REVERT, event) && parentBlock.level > 0) {
				Transforms.unwrapNodes<IListElement>(editor, {
					match: (node) => !Editor.isEditor(node) && SlateElement.isElement(node) && node.id === parentBlock.id,
					split: true,
				});
			}
		}

		return true;
	}

	return false;
};

const processEnter = (event: React.KeyboardEvent<HTMLDivElement>, editor: CustomEditor) => {
	if (isHotkey(HOTKEYS.ENTER, event)) {
		if (isEmptyListRow(editor)) {
			setNodes(editor, {
				type: E_ELEMENT.PARAGRAPH,
			});
			Transforms.unwrapNodes(editor, {
				match: (n) => {
					return !Editor.isEditor(n) && SlateElement.isElement(n) && isListType(n.type);
				},
				split: true,
				mode: 'all',
			});
			event.preventDefault();
			return true;
		}

		// if press enter on non-list element
		if (!isListRow(editor)) {
			Editor.insertBreak(editor);
			setNodes(editor, {
				type: E_ELEMENT.PARAGRAPH,
			});
			event.preventDefault();
		}

		return true;
	}

	return false;
};

const processSelectAll = (event: React.KeyboardEvent<HTMLDivElement>, editor: CustomEditor) => {
	if (isHotkey(HOTKEYS.SELECT_ALL, event)) {
		// event.preventDefault();

		// Transforms.select(editor, {
		//   anchor: Editor.start(editor, []),
		//   focus: Editor.end(editor, []),
		// });

		return true;
	}

	return false;
};

const onKeydown = (event: React.KeyboardEvent<HTMLDivElement>, editor: CustomEditor) => {
	if (processTab(event, editor)) {
		return;
	}

	if (processEnter(event, editor)) {
		return;
	}

	if (processSelectAll(event, editor)) {
		return;
	}

	processMarkToggle(event, editor);
};

export { onKeydown };
