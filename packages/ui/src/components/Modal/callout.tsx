import { createRoot, Root } from 'react-dom/client';
import { Modal } from './Modal';
import { IModalFuncConfig, IModalStaticFuncReturn, ModalProps } from './types';

function openDialog(config: IModalFuncConfig): IModalStaticFuncReturn {
	const container = document.createElement('div');
	container.classList.add(`phyzess-keza-dialog__callout-container`);
	document.body.appendChild(container);

	let root: Root;

	let props = { ...config, onClose: close, open: true };

	function render(dialogProps: IModalFuncConfig & Pick<ModalProps, 'open'>): void {
		setTimeout(() => {
			root = createRoot(container);
			root.render(<Modal {...dialogProps}>{dialogProps.content}</Modal>);
		});
	}

	function destroy(originAfterClose: () => void): void {
		root.unmount();

		if (container.parentNode) {
			container.parentNode.removeChild(container);
		}

		originAfterClose?.();
	}

	function close(): void {
		props = {
			...props,
			open: false,
		};
		render(props);
	}

	function update(newConfig: IModalFuncConfig): void {
		props = {
			...props,
			...newConfig,
		};
		render(props);
	}

	render(props);

	return {
		destroy: close,
		update,
	};
}

export { openDialog };
