import { CustomElement } from '../types';
import { E_ELEMENT } from './enums';

const EMPTY_ELEMENT: CustomElement = {
	type: E_ELEMENT.PARAGRAPH,
	children: [{ text: '' }],
};

const EMPTY_ROW: CustomElement[] = [
	{
		type: E_ELEMENT.PARAGRAPH,
		children: [{ text: '' }],
	},
];

export { EMPTY_ELEMENT, EMPTY_ROW };
