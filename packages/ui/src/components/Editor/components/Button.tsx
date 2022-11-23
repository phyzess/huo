import { createElement, FC, MouseEvent, useCallback } from 'react';
import { ReactEditor, useSlate } from 'slate-react';
import { Button } from '../../Button';
import { E_ELEMENT, E_MARK } from '../constants';
import { isBlockActive, isMarkActive } from '../queries';
import { toggleBlock, toggleMark } from '../transforms';
import { IFormatButtonProps, IToolbarButtonProps } from '../types';

const ToolbarButton: FC<IToolbarButtonProps> = ({
	icon,
	tooltip,
	active,
	editor,
	focusAfterClick = true,
	onClick,
}) => {
	const handleClick = useCallback(
		(e: MouseEvent<HTMLButtonElement>) => {
			e.preventDefault();
			onClick();
			if (focusAfterClick) {
				ReactEditor.focus(editor);
			}
		},
		[onClick, editor, focusAfterClick],
	);

	return (
		<span className='tooltip' data-tip={tooltip}>
			<Button size='sm' type={active ? 'accent' : 'ghost'} shape='square' onClick={handleClick}>
				{createElement(icon, { size: 18 })}
			</Button>
		</span>
	);
};

const MarkButton: FC<IFormatButtonProps<E_MARK>> = ({ format, ...restProps }) => {
	const editor = useSlate();

	const isActive = isMarkActive(editor, format);

	const handleClick = () => {
		toggleMark(editor, format);
	};

	return <ToolbarButton active={isActive} editor={editor} {...restProps} onClick={handleClick} />;
};

const BlockButton: FC<IFormatButtonProps<E_ELEMENT>> = ({ format, ...restProps }) => {
	const editor = useSlate();

	const isActive = isBlockActive(editor, format);

	const handleClick = () => {
		toggleBlock(editor, format);
	};

	return <ToolbarButton active={isActive} editor={editor} {...restProps} onClick={handleClick} />;
};

export { BlockButton, MarkButton, ToolbarButton };
