import { E_ELEMENT, Image, Loading } from '@phyzess/huo-ui';
import { FC, useMemo } from 'react';
import { SeedBulletedListItem, SeedItemTags, SeedNumberedListItem, SeedParagraph } from './components';
import { useSeed } from './hooks';
import { TSeedBlockItem } from './types';
import { deserialize } from './utils/deserialize';

const getItemRowElement = (row: TSeedBlockItem) => {
	if (!row.content || !row.children) {
		return;
	}

	if (row.contentType === 'external' || row.contentType === 'file') {
		if (row.type === 'IMAGE') {
			// @ts-ignore
			const src = row.content[row.contentType].url;
			return <Image key={src} src={src} width='50%' />;
		}
		return;
	}

	let children = null;
	if (row.children.length !== 0) {
		children = row.children.map(getItemRowElement);
	}

	const paragraph = <SeedParagraph {...row.content}>{children}</SeedParagraph>;

	switch (row.type) {
		case E_ELEMENT.HEADING_ONE:
			return <h1>{paragraph}</h1>;
		case E_ELEMENT.HEADING_TWO:
			return <h2>{paragraph}</h2>;
		case E_ELEMENT.HEADING_THREE:
			return <h3>{paragraph}</h3>;
		case E_ELEMENT.BLOCK_QUOTE:
			return (
				<blockquote className='border-l-2 border-l-primary my-4 mx-2 py-2 px-4'>
					{paragraph}
				</blockquote>
			);
		case E_ELEMENT.BULLETED_LIST:
			return (
				<SeedBulletedListItem siblingIndex={row.siblingIndex} indentCoeff={row.indentCoeff}>
					{paragraph}
				</SeedBulletedListItem>
			);
		case E_ELEMENT.NUMBERED_LIST:
			return (
				<SeedNumberedListItem siblingIndex={row.siblingIndex} indentCoeff={row.indentCoeff}>
					{paragraph}
				</SeedNumberedListItem>
			);
		case E_ELEMENT.PARAGRAPH:
			return paragraph;
		default:
			return null;
	}
};

interface ISeedItemProps {
	id: string;
}

const SeedItem: FC<ISeedItemProps> = ({ id }) => {
	const { isLoading, page, blocks } = useSeed(id);

	const content = useMemo(() => {
		if (isLoading) {
			return (
				<Loading loading={true} size={30} className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]' />
			);
		}

		const deserialized = deserialize(page, blocks);

		return deserialized
			? (
				<div className='card-body h-full flex flex-col justify-between'>
					<div className='flex justify-between items-center shrink-0'>
						<SeedItemTags tags={deserialized.tags} />
					</div>
					<div className='flex-1 overflow-auto'>{deserialized.content.map(getItemRowElement)}</div>
					<div className='shrink-0 text-sm text-gray-500'>{deserialized.createdAt}</div>
				</div>
			)
			: <div>deserialize error</div>;
	}, [page, blocks, isLoading]);

	return (
		<div className='card card-compact h-[240px] bg-base-100 shadow shadow-cyan-800/40 overflow-hidden'>
			{content}
		</div>
	);
};

export { SeedItem };
