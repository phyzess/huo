import { Editor, Location, Path, Range } from 'slate';
import { E_ELEMENT, HEADING_SHORTCUTS } from '../constants';
import { CustomEditor, CustomElement } from '../types';

const isInsertingTag = (
	editor: CustomEditor,
	text: string,
): {
	isTag: boolean;
	curLeafText: string;
	curLeafPath: Path;
} => {
	const { selection } = editor;

	if (text === ' ' && selection && Range.isCollapsed(selection)) {
		const { anchor } = selection;

		const mostRecentLeaf = Editor.leaf(editor, anchor);
		const curLeafText = mostRecentLeaf[0].text.trim();
		const curLeafPath = mostRecentLeaf ? mostRecentLeaf[1] : [];

		return {
			isTag: !!curLeafText.startsWith('#') && !HEADING_SHORTCUTS.includes(curLeafText),
			curLeafText,
			curLeafPath,
		};
	}

	return {
		isTag: false,
		curLeafText: '',
		curLeafPath: [],
	};
};

const isAtTagLeafEnd = (editor: CustomEditor, selection?: Location) => {
	const next = Editor.next<CustomElement>(editor, {
		at: selection,
	});
	if (!next) {
		return true;
	}

	return next[0].type !== E_ELEMENT.TAG;
};

export { isAtTagLeafEnd, isInsertingTag };
