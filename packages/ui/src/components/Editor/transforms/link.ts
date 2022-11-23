import { Editor, Element as SlateElement, Range, Transforms } from 'slate';
import { generateId } from '../../../utils';
import { E_ELEMENT } from '../constants';
import { ILinkManageDialogState } from '../contexts';
import { isElementActive } from '../queries';
import { CustomEditor, CustomElement, ILinkElement } from '../types';
import { unwrapElement } from './node';

/**
 * @description insert a link in a collapsed selection or wrap a selected string with link
 * @param editor
 * @param url
 * @param label
 */
const wrapLink = (editor: CustomEditor, url: string, label?: string) => {
	if (isElementActive(editor, E_ELEMENT.LINK)) {
		unwrapElement(editor, E_ELEMENT.LINK);
	}

	const { selection } = editor;
	const isCollapsed = selection && Range.isCollapsed(selection);
	const link: ILinkElement = {
		type: E_ELEMENT.LINK,
		id: generateId(7),
		url,
		label,
		children: isCollapsed ? [{ text: label ?? url }] : [],
	};

	if (isCollapsed) {
		Transforms.insertNodes(editor, link);
	} else {
		Transforms.wrapNodes(editor, link, { split: true });
		Transforms.collapse(editor, { edge: 'end' });
	}

	Transforms.select(editor, {
		anchor: Editor.end(editor, []),
		focus: Editor.end(editor, []),
	});
};

const insertLink = (editor: CustomEditor, url: string, label?: string) => {
	if (!editor.selection) {
		Transforms.select(editor, {
			anchor: Editor.end(editor, []),
			focus: Editor.end(editor, []),
		});
	}

	wrapLink(editor, url, label);
};

/**
 * @description update link infos
 */
const updateLink = (editor: CustomEditor, newState: ILinkManageDialogState) => {
	if (!newState.id) {
		return;
	}

	const linkEle = Editor.above<CustomElement>(editor, {
		match: (node) => !Editor.isEditor(node) && SlateElement.isElement(node) && node.id === newState.id,
	});

	if (linkEle?.[0]) {
		Transforms.setNodes(editor, newState, {
			at: linkEle[1],
		});

		const originText = (linkEle[0] as ILinkElement).children[0].text;
		const newText = newState.label || newState.url;
		if (!!newText && newText !== originText) {
			Transforms.insertText(editor, newText, {
				at: linkEle[1],
			});
		}
	}
};

export { insertLink, updateLink, wrapLink };
