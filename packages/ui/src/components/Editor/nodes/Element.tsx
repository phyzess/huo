import React from 'react';
import { E_ELEMENT } from '../constants';
import { CustomRenderElementProps } from '../types';
import { ImageElement } from './ImageElement';
import { LinkElement } from './LinkElement';

const Element: React.FC<CustomRenderElementProps> = ({ attributes, children, element }) => {
	switch (element.type) {
		case E_ELEMENT.BLOCK_QUOTE:
			return (
				<blockquote className='border-l-2 border-l-primary my-4 mx-2 py-2 px-4' {...attributes}>
					{children}
				</blockquote>
			);
		case E_ELEMENT.BULLETED_LIST:
			return <ul {...attributes}>{children}</ul>;
		case E_ELEMENT.HEADING_ONE:
			return <h1 {...attributes}>{children}</h1>;
		case E_ELEMENT.HEADING_TWO:
			return <h2 {...attributes}>{children}</h2>;
		case E_ELEMENT.HEADING_THREE:
			return <h3 {...attributes}>{children}</h3>;
		case E_ELEMENT.LIST_ITEM:
			return <li {...attributes}>{children}</li>;
		case E_ELEMENT.NUMBERED_LIST:
			return <ol {...attributes}>{children}</ol>;
		case E_ELEMENT.IMAGE:
			return (
				<ImageElement attributes={attributes} element={element}>
					{children}
				</ImageElement>
			);
		case E_ELEMENT.LINK:
			return (
				<LinkElement attributes={attributes} element={element}>
					{children}
				</LinkElement>
			);
		case E_ELEMENT.TAG:
			return (
				<span
					// element={element}
					className='badge badge-primary mr-2'
					{...attributes}
				>
					{children}
				</span>
			);
		default:
			return (
				<p className='mb-2' {...attributes}>
					{children}
				</p>
			);
	}
};

export { Element };
