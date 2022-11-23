import { Editor, Node, Point, Transforms } from 'slate';
import { EMPTY_ELEMENT } from '../constants';
import { TPlugin } from '../types';

const withReset: TPlugin = (editor) => {
	editor.reset = <T extends Node>(
		options: {
			nodes?: T | T[];
			at?: Location;
		} = {},
	): void => {
		const children = [...editor.children];

		for (const node of children) {
			editor.apply({ type: 'remove_node', path: [0], node });
		}

		if (options.nodes) {
			const nodes = Node.isNode(options.nodes) ? [options.nodes] : options.nodes;
			for (let i = 0; i < nodes.length; i++) {
				editor.apply({ type: 'insert_node', path: [i], node: nodes[i] });
			}
		} else {
			editor.apply({ type: 'insert_node', path: [0], node: EMPTY_ELEMENT });
		}

		const point = options.at && Point.isPoint(options.at) ? options.at : Editor.end(editor, []);
		if (point) Transforms.select(editor, point);
	};

	return editor;
};

export { withReset };
