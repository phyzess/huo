import { FC, useRef, useState } from 'react';
import { ReactEditor, useFocused, useSelected, useSlateStatic } from 'slate-react';
import { CLS_PREFIX } from '../../../constants';
import { ScribblesCross, ScribblesDoubleArrow } from '../../../icons';
import { IImageInfo, Image } from '../../Image';
import { Modal } from '../../Modal';
import { removeImage } from '../transforms';
import { CustomRenderElementProps, IImageElement } from '../types';

const ImageElement: FC<CustomRenderElementProps<IImageElement>> = ({
	element,
	attributes,
	children,
}) => {
	const imgInfoRef = useRef<IImageInfo | null>(null);
	const width = imgInfoRef.current?.naturalWidth ?? 0;
	const height = imgInfoRef.current?.naturalHeight ?? 0;

	const editor = useSlateStatic();
	const path = ReactEditor.findPath(editor, element);

	const [viewDialogOpen, setViewDialogOpen] = useState(false);
	const selected = useSelected();
	const focused = useFocused();

	const wrapperCls = `relative w-auto max-w-md hover`;
	const imgCls = `${CLS_PREFIX}_editor-img m-0 ${
		selected && focused ? 'opacity-75' : 'opacity-100'
	} hover:cursor-pointer`;
	const actionsCls =
		`${CLS_PREFIX}_editor-img-actions flex gap-4 rounded-md shadow-md p-2 bg-base-300/75 absolute bottom-0 right-0`;

	const url = element.url;
	const alt = typeof element.alt === 'string' ? element.alt : undefined;

	const handleLoad = (imgInfo: IImageInfo) => {
		imgInfoRef.current = imgInfo;
	};

	const handleView = () => {
		setViewDialogOpen(true);
	};

	const handleDelete = () => {
		removeImage(editor, path);
	};

	return (
		<div {...attributes}>
			<div className='h-0'>{children}</div>
			<div className={wrapperCls} contentEditable={false}>
				<Image className={imgCls} src={url} alt={alt} onLoad={handleLoad} />
				<div className={actionsCls}>
					<ScribblesCross className='cursor-pointer' size={18} onClick={handleDelete} />
					<ScribblesDoubleArrow className='cursor-pointer' size={18} onClick={handleView} />
				</div>
				{viewDialogOpen && (
					<Modal
						fullScreen={width >= 1200}
						open={viewDialogOpen}
						onCancel={() => setViewDialogOpen(false)}
					>
						<Image width={width} height={height} src={url} alt={alt} />
					</Modal>
				)}
			</div>
		</div>
	);
};

export { ImageElement };
