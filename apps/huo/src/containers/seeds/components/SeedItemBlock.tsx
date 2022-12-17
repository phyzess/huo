import { FC } from 'react';
import { ISeedDefaultBlock } from '../types';
import { SeedRichText } from './SeedRichText';

type ISeedParagraphProps = ISeedDefaultBlock['content'];

const SeedParagraph: FC<ISeedParagraphProps> = ({ rich_text, color, children }) => {
	// const contentColorSx = genBlockColorSx(color);
	return (
		<>
			<div className='text-inherit leading-loose'>
				{rich_text.map((richText, index) => <SeedRichText key={index} {...richText} />)}
			</div>
			{children}
		</>
	);
};
export { SeedParagraph };
