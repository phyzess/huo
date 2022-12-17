import {
	Code,
	Image,
	Link,
	ListBulleted,
	ListNumbered,
	Number_1,
	Number_2,
	Number_3,
	Quotes,
	TextBold,
	TextItalic,
	TextStrikethrough,
	TextUnderline,
} from '@carbon/icons-react';
import React, { memo, useContext } from 'react';
import { Editor, Range } from 'slate';
import { useSlateSelection, useSlateStatic } from 'slate-react';
import { E_ELEMENT, E_MARK } from '../constants/enums';
import { DialogContext } from '../contexts';
import type { TLinkManageDialogMode } from '../contexts';
import { IFormatButtonProps } from '../types';
import { BlockButton, MarkButton, ToolbarButton } from './Button';

const marks: Record<E_MARK, IFormatButtonProps<E_MARK>> = {
	[E_MARK.BOLD]: {
		icon: TextBold,
		format: E_MARK.BOLD,
		tooltip: 'Bold',
	},
	[E_MARK.ITALIC]: {
		icon: TextItalic,
		format: E_MARK.ITALIC,
		tooltip: 'Italic',
	},
	[E_MARK.UNDERLINE]: {
		icon: TextUnderline,
		format: E_MARK.UNDERLINE,
		tooltip: 'Underline',
	},
	[E_MARK.CODE]: {
		icon: Code,
		format: E_MARK.CODE,
		tooltip: 'Code',
	},
	[E_MARK.STRIKE_THROUGH]: {
		icon: TextStrikethrough,
		format: E_MARK.STRIKE_THROUGH,
		tooltip: 'StrikeThrough',
	},
};

const blocks: Omit<
	Record<E_ELEMENT, IFormatButtonProps<E_ELEMENT>>,
	E_ELEMENT.PARAGRAPH | E_ELEMENT.LIST_ITEM | E_ELEMENT.IMAGE | E_ELEMENT.LINK | E_ELEMENT.TAG
> = {
	[E_ELEMENT.HEADING_ONE]: {
		icon: Number_1,
		format: E_ELEMENT.HEADING_ONE,
		tooltip: 'Heading One',
	},
	[E_ELEMENT.HEADING_TWO]: {
		icon: Number_2,
		format: E_ELEMENT.HEADING_TWO,
		tooltip: 'Heading Two',
	},
	[E_ELEMENT.HEADING_THREE]: {
		icon: Number_3,
		format: E_ELEMENT.HEADING_THREE,
		tooltip: 'Heading Three',
	},
	[E_ELEMENT.BLOCK_QUOTE]: {
		icon: Quotes,
		format: E_ELEMENT.BLOCK_QUOTE,
		tooltip: 'Block Quote',
	},
	[E_ELEMENT.NUMBERED_LIST]: {
		icon: ListNumbered,
		format: E_ELEMENT.NUMBERED_LIST,
		tooltip: 'Number List',
	},
	[E_ELEMENT.BULLETED_LIST]: {
		icon: ListBulleted,
		format: E_ELEMENT.BULLETED_LIST,
		tooltip: 'Bulleted List',
	},
	// [E_ELEMENT.TAG]: {
	//   icon: LocalOffer,
	//   format: E_ELEMENT.TAG,
	//   tooltip: 'Tag',
	// },
};

const Toolbar: React.FC<{}> = memo(() => {
	const editor = useSlateStatic();
	const selection = useSlateSelection();
	const { setDialogContext } = useContext(DialogContext);

	const handleOpenImgDialog = () => {
		setDialogContext({ type: E_ELEMENT.IMAGE, value: { open: true } });
	};

	const handleOpenLinkDialog = () => {
		let label = '';
		let mode: TLinkManageDialogMode = 'insert';
		if (selection && !Range.isCollapsed(selection)) {
			label = Editor.string(editor, selection);
			mode = 'wrap';
		}

		setDialogContext({ type: E_ELEMENT.LINK, value: { open: true, label, mode } });
	};

	return (
		<div className='flex gap-2'>
			{Object.entries(marks).map(([key, props]) => <MarkButton key={key} {...props} />)}
			{Object.entries(blocks).map(([key, props]) => <BlockButton key={key} {...props} />)}
			<ToolbarButton
				icon={Link}
				active={false}
				editor={editor}
				focusAfterClick={false}
				tooltip='Insert Link'
				onClick={handleOpenLinkDialog}
			/>
			<ToolbarButton
				icon={Image}
				active={false}
				editor={editor}
				focusAfterClick={false}
				tooltip='Insert Image'
				onClick={handleOpenImgDialog}
			/>
		</div>
	);
});

export { Toolbar };
