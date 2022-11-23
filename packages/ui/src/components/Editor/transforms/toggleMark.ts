import { Editor } from 'slate';
import { E_MARK } from '../constants';
import { isMarkActive } from '../queries';
import { CustomEditor } from '../types';

const toggleMark = (editor: CustomEditor, format: E_MARK) => {
	const isActive = isMarkActive(editor, format);

	if (isActive) {
		Editor.removeMark(editor, format);
	} else {
		Editor.addMark(editor, format, true);
	}
};

export { toggleMark };
