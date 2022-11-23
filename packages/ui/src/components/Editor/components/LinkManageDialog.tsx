import { ChangeEvent, FC, useContext } from 'react';
import { useSlate } from 'slate-react';
import { Modal } from '../../Modal';
import { E_ELEMENT } from '../constants';
import { DialogContext } from '../contexts';
import { insertLink, updateLink } from '../transforms';

const LinkManageDialog: FC<{}> = () => {
	const editor = useSlate();
	const { dialogState, setDialogContext } = useContext(DialogContext);
	const { open, url = '', label = '', id, mode } = dialogState[E_ELEMENT.LINK];

	const okText = id ? 'Update' : 'Insert';

	const handleClose = () => {
		setDialogContext({ type: E_ELEMENT.LINK, value: { open: false, label: '', url: '' } });
	};

	const handleLabelChange = (event: ChangeEvent<HTMLInputElement>) => {
		setDialogContext({ type: E_ELEMENT.LINK, value: { label: event.target.value } });
	};

	const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
		setDialogContext({ type: E_ELEMENT.LINK, value: { url: event.target.value } });
	};

	const handleConfirm = () => {
		if (id) {
			updateLink(editor, { url, label, id });
		} else {
			insertLink(editor, url, label);
		}
		handleClose();
	};

	return (
		<Modal
			title='Insert Link'
			onCancel={handleClose}
			confirmText={okText}
			confirmBtnProps={{
				disabled: url.length === 0,
			}}
			onConfirm={handleConfirm}
			open={open}
			maskClosable
		>
			<div className='w-full'>
				<label className='mb-6 input-group'>
					<span className='w-[60px]'>Label</span>
					<input
						disabled={mode === 'wrap'}
						type='text'
						placeholder='Type your link label here'
						className='input input-bordered w-full'
						value={label}
						onChange={handleLabelChange}
					/>
				</label>
				<label className='input-group'>
					<span className='w-[60px]'>URL</span>
					<input
						type='text'
						placeholder='Type your link url here'
						className='input input-bordered w-full'
						value={url}
						onChange={handleUrlChange}
					/>
				</label>
			</div>
		</Modal>
	);
};

export { LinkManageDialog };
