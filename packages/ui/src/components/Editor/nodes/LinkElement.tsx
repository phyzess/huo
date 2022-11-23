import classnames from 'classnames';
import { FC, useContext } from 'react';
import { useSlate } from 'slate-react';
import { ScribblesErase, ScribblesExternalLink, ScribblesPen } from '../../../icons';
import { Button } from '../../Button';
import { E_ELEMENT } from '../constants';
import { DialogContext } from '../contexts';
import { unwrapElement } from '../transforms';
import { CustomRenderElementProps, ILinkElement } from '../types';

const LinkElement: FC<CustomRenderElementProps<ILinkElement>> = ({
	element,
	attributes,
	children,
}) => {
	const editor = useSlate();
	const { setDialogContext } = useContext(DialogContext);
	const { label, url, id } = element;

	const handleOpenLinkUrl = () => {
		window.open(url, '_blank');
	};

	const handleEdit = () => {
		setDialogContext({
			type: E_ELEMENT.LINK,
			value: {
				open: true,
				label,
				url,
				id,
				mode: 'edit',
			},
		});
	};

	const handleUnwrapLink = () => {
		unwrapElement(editor, E_ELEMENT.LINK);
	};

	const wrapperCls = classnames('mx-2 dropdown dropdown-hover');

	return (
		<span className={wrapperCls} {...attributes}>
			<a className='link link-secondary'>{children}</a>
			<span className='dropdown-content shadow py-2 px-4 bg-base-100 rounded-box flex gap-2'>
				<Button type='ghost' shape='square' size='sm' onClick={handleUnwrapLink}>
					<ScribblesErase size={18} />
				</Button>
				<Button type='ghost' shape='square' size='sm' onClick={handleEdit}>
					<ScribblesPen size={18} />
				</Button>
				<Button type='ghost' shape='square' size='sm' onClick={handleOpenLinkUrl}>
					<ScribblesExternalLink size={18} />
				</Button>
			</span>
		</span>
	);
};

export { LinkElement };
