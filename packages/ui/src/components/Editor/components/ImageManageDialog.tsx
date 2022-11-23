import { ChangeEvent, FC, FocusEvent, MouseEvent, ReactNode, useContext, useState } from 'react';
import { useSlate } from 'slate-react';
import { ScribblesUpload } from '../../../icons';
import { readFile } from '../../../utils';
import { Image } from '../../Image';
import { Modal } from '../../Modal';
import { E_ELEMENT } from '../constants';
import { DialogContext } from '../contexts';
import { insertImage } from '../transforms';

enum E_TAB_TYPE {
	URL = 'URL',
	UPLOAD = 'UPLOAD',
}
interface ITabPanelProps {
	children?: ReactNode;
	target: E_TAB_TYPE;
	value: E_TAB_TYPE;
}

const TabPanel: FC<ITabPanelProps> = ({ children, value, target, ...other }) => {
	return (
		<div role='tabpanel' hidden={value !== target} {...other}>
			{value === target && <div className='p-3'>{children}</div>}
		</div>
	);
};

const ImageManageDialog: FC<{}> = () => {
	const editor = useSlate();
	const { dialogState, setDialogContext } = useContext(DialogContext);
	const { open, images = [] } = dialogState[E_ELEMENT.IMAGE];

	const [tabValue, setTabValue] = useState(E_TAB_TYPE.UPLOAD);

	const handleChange = (event: MouseEvent<HTMLAnchorElement>) => {
		setTabValue((event.target as HTMLAnchorElement).innerHTML as E_TAB_TYPE);
	};

	const handleUrlChange = (event: FocusEvent<HTMLInputElement>) => {
		setDialogContext({ type: E_ELEMENT.IMAGE, value: { images: [{ url: event.target.value }] } });
	};

	const handleUploadChange = async (event: ChangeEvent<HTMLInputElement>) => {
		const fileList = Array.from(event.target.files ?? []);
		if (fileList && fileList.length > 0) {
			const files = await Promise.all(
				fileList.map(async (file) => {
					const url = await readFile(file);
					return {
						url,
						name: file.name,
						mimeType: file.type,
					};
				}),
			);
			setDialogContext({ type: E_ELEMENT.IMAGE, value: { images: files } });
		}
	};

	const handleClose = () => {
		setDialogContext({
			type: E_ELEMENT.IMAGE,
			value: {
				open: false,
				images: [],
			},
		});
		setTabValue(E_TAB_TYPE.UPLOAD);
	};

	const handleConfirm = () => {
		for (const img of images) {
			insertImage(editor, img);
		}
		handleClose();
	};

	const gridCols = images.length > 3 ? 'grid-cols-3' : images.length === 2 ? 'grid-cols-2' : 'grid-cols-1';

	return (
		<Modal
			title='Insert Image'
			onCancel={handleClose}
			confirmText='Confirm'
			onConfirm={handleConfirm}
			open={open}
			maskClosable
		>
			<div className='w-full'>
				<div>
					<div className='tabs'>
						{[E_TAB_TYPE.UPLOAD, E_TAB_TYPE.URL].map((key) => (
							<a
								key={key}
								className={`tab tab-bordered ${tabValue === key ? 'tab-active' : ''}`}
								onClick={handleChange}
							>
								{key}
							</a>
						))}
					</div>
				</div>
				<TabPanel value={tabValue} target={E_TAB_TYPE.URL}>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Image URL</span>
						</label>
						<input
							type='text'
							placeholder='insert image url'
							className='input input-bordered'
							onBlur={handleUrlChange}
						/>
					</div>
				</TabPanel>
				<TabPanel value={tabValue} target={E_TAB_TYPE.UPLOAD}>
					<div className='flex justify-center mt-4'>
						<label htmlFor='image-file'>
							<input
								className='hidden'
								accept='image/*'
								id='image-file'
								multiple
								type='file'
								onChange={handleUploadChange}
							/>
							<span className='btn'>
								<ScribblesUpload />
								Upload Images
							</span>
						</label>
					</div>
					{images.length !== 0 && (
						<div className='mt-4'>
							<div className={`w-full grid ${gridCols} gap-2`}>
								{images.map((item) => (
									<span key={item.url}>
										<Image src={item.url} />
									</span>
								))}
							</div>
						</div>
					)}
				</TabPanel>
			</div>
		</Modal>
	);
};

export { ImageManageDialog };
