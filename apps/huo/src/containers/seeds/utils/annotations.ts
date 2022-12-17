import type { ApiColor } from '@/api/notion';
import { CustomText, E_MARK } from '@phyzess/huo-ui';
import { CSSProperties } from 'react';
import { IAnnotations } from '../types';

const genNodeAnnotations = (node: CustomText): IAnnotations => {
	let annotations: IAnnotations = {};

	if (node[E_MARK.BOLD]) {
		annotations['bold'] = true;
	}

	if (node[E_MARK.ITALIC]) {
		annotations['italic'] = true;
	}

	if (node[E_MARK.UNDERLINE]) {
		annotations['underline'] = true;
	}

	if (node[E_MARK.STRIKE_THROUGH]) {
		annotations['strikethrough'] = true;
	}

	if (node[E_MARK.CODE]) {
		annotations['code'] = true;
	}

	return annotations;
};

const genClsFromAnnotations = (annotations: Required<IAnnotations>): CSSProperties => {
	const sx: CSSProperties = {};

	if (annotations['bold']) {
		sx['fontWeight'] = 'bold';
	}

	if (annotations['italic']) {
		sx['fontStyle'] = 'italic';
	}

	if (annotations['underline']) {
		sx['background'] = 'linear-gradient(90deg, #6D7587, #6D7587);';
		sx['backgroundSize'] = '100% 1px';
		sx['backgroundRepeat'] = 'no-repeat';
		sx['backgroundPosition'] = '100% 100%';
	}

	if (annotations['strikethrough']) {
		sx['textDecoration'] = 'line-through';
	}

	if (annotations['code']) {
		sx['padding'] = '0.2em 0.4em';
		sx['background'] = 'rgba(135,131,120,0.15)';
		sx['color'] = '#EB5757';
		sx['borderRadius'] = '3px';
		sx['fontSize'] = '85%';
	}

	return sx;
};

const genBlockColorSx = (color: ApiColor) => {
	if (color === 'default') {
		return {};
	}
	const key = color.endsWith('_background') ? 'backgroundColor' : 'color';
	return {
		[key]: color.replace('_background', ''),
	};
};

export { genBlockColorSx, genClsFromAnnotations, genNodeAnnotations };
