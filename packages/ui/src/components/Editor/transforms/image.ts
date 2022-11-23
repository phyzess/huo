import { Element as SlateElement, Location, Transforms } from 'slate';
import { generateId } from '../../../utils';
import { E_ELEMENT, EMPTY_ELEMENT } from '../constants';
import { CustomEditor, IImage, IImageElement } from '../types';
import { setNodes } from './node';

export const insertImage = (editor: CustomEditor, { url, alt, name, mimeType }: IImage) => {
	const image: IImageElement = {
		id: generateId(6),
		type: E_ELEMENT.IMAGE,
		url,
		alt,
		name,
		mimeType,
		children: [{ text: url }],
	};
	Transforms.insertNodes(editor, [image, EMPTY_ELEMENT]);
};

export const updateImage = (editor: CustomEditor, { url, alt }: IImage) => {
	setNodes(editor, { url, alt });
};

export const removeImage = (editor: CustomEditor, at?: Location) => {
	if (at) {
		Transforms.removeNodes<SlateElement>(editor, {
			at,
		});
		return;
	}

	Transforms.removeNodes<SlateElement>(editor, {
		match: (node) => {
			return SlateElement.isElement(node) && node.type === E_ELEMENT.IMAGE;
		},
	});
};
