import { Editor } from 'slate';
import { E_MARK } from '../constants';
import { CustomEditor } from '../types';

const isMarkActive = (editor: CustomEditor, format: E_MARK) => {
	const marks = Editor.marks(editor);
	return marks ? marks[format] === true : false;
};

export { isMarkActive };
