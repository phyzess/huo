import { RichTextItemResponse } from '@/api/notion';
import { FC, useMemo } from 'react';
import { genClsFromAnnotations } from '../utils/annotations';

const SeedRichText: FC<RichTextItemResponse> = ({ href, plain_text, annotations }) => {
	const cls = genClsFromAnnotations(annotations);

	const content = useMemo(() => {
		if (href) {
			return (
				<a className='cursor-pointer' href={href} target='_blank' rel='noopener noreferrer'>
					{plain_text}
				</a>
			);
		}
		return plain_text;
	}, [href, plain_text]);

	return <span className={`${cls} font-medium`}>{content}</span>;
};

export { SeedRichText };
