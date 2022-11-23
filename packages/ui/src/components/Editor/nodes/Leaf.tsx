/* eslint-disable no-param-reassign */
import React from 'react';
import { E_MARK } from '../constants';
import { CustomRenderLeafProps } from '../types';

const Leaf: React.FC<CustomRenderLeafProps> = ({ attributes, children, leaf }) => {
	if (leaf[E_MARK.BOLD]) {
		children = <strong>{children}</strong>;
	}

	if (leaf[E_MARK.CODE]) {
		children = <code className='mx-1 p-1 text-purple-500 bg-slate-700 rounded-md'>{children}</code>;
	}

	if (leaf[E_MARK.ITALIC]) {
		children = <em>{children}</em>;
	}

	if (leaf[E_MARK.UNDERLINE]) {
		children = <u>{children}</u>;
	}

	if (leaf[E_MARK.STRIKE_THROUGH]) {
		children = <span className='line-through'>{children}</span>;
	}

	return <span {...attributes}>{children}</span>;
};

export { Leaf };
