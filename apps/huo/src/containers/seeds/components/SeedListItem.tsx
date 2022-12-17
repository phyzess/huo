import { FC, ReactNode } from 'react';
import { bulletedListItemPrefix, numberedListItemPrefix } from '../utils';

interface ISeedListItemProps {
	indentCoeff: number;
	siblingIndex: number;
	children: ReactNode;
}

interface ISeedListItemPrefixProps {
	content: string;
}

const seedListWrapperCls = 'flex items-start w-full pl-[2px] text-inherit fill-inherit';

const seedListItemPrefixCls = 'flex justify-center items-center grow-0 shrink-0 select-none mr-2 w-[18px]';

const seedListMainCls = 'flex flex-col flex-1 min-w-[1px] ';

const seedListItemContentCls =
	'max-w-full w-full whitespace-pre-wrap break-words px-[2px] py-[3px] caret-pink-500 text-left';

const SeedBulletedPrefix: FC<ISeedListItemPrefixProps> = ({ content }) => {
	return <div className={`${seedListItemPrefixCls} text-2xl`}>{content}</div>;
};

const SeedNumberedPrefix: FC<ISeedListItemPrefixProps> = ({ content }) => {
	return <div className={`${seedListItemPrefixCls} text-base`}>{content}</div>;
};

const SeedBulletedListItem: FC<ISeedListItemProps> = ({ indentCoeff, children }) => {
	return (
		<div className={seedListWrapperCls}>
			<SeedBulletedPrefix content={bulletedListItemPrefix(indentCoeff)} />
			<div className={seedListMainCls}>
				<div className={seedListItemContentCls}>{children}</div>
			</div>
		</div>
	);
};

const SeedNumberedListItem: FC<ISeedListItemProps> = ({
	siblingIndex,
	indentCoeff,
	children,
}) => {
	return (
		<div className={seedListWrapperCls}>
			<SeedNumberedPrefix content={numberedListItemPrefix(siblingIndex, indentCoeff)} />
			<div className={seedListMainCls}>
				<div className={seedListItemContentCls}>{children}</div>
			</div>
		</div>
	);
};

export { SeedBulletedListItem, SeedNumberedListItem };
