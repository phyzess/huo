import React, { useCallback, useMemo, useReducer, useRef, useState } from 'react';
import { createEditor, Descendant } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, RenderElementProps, RenderLeafProps, Slate, withReact } from 'slate-react';
import { compose } from '../../utils';
import { ImageManageDialog, LinkManageDialog, Toolbar } from './components';
import { EMPTY_ROW } from './constants';
import { DialogContext, dialogContextInitialState, dialogContextReducer } from './contexts';
import { Element, Leaf } from './nodes';
import { withCorrectVoidBehavior, withImage, withLink, withReset, withShortcuts, withTag } from './plugins';
import { onKeydown } from './transforms';
import { CustomEditor, IEditorProps } from './types';

const Editor = ({
	placeholder,
	spellCheck = false,
	autoFocus = false,
	initialValue,
	actions,
	className,
	style,
	editorRef,
	onChange,
}: IEditorProps) => {
	const innerEditorRef = useRef<CustomEditor>();
	if (!innerEditorRef.current) {
		innerEditorRef.current = compose<CustomEditor>(
			withReset,
			withCorrectVoidBehavior,
			withLink,
			withTag,
			withShortcuts,
			withImage,
			withReact,
			withHistory,
			createEditor,
		)();
	}
	const editor = innerEditorRef.current;

	if (editorRef !== undefined) {
		editorRef.current = innerEditorRef.current;
	}

	const [slateValue, setValue] = useState<Descendant[]>(() => {
		if (!initialValue || initialValue.length === 0) {
			return EMPTY_ROW;
		}
		return initialValue;
	});

	const [dialogState, dispatchDialogState] = useReducer(
		dialogContextReducer,
		dialogContextInitialState,
	);

	const dialogContextValue = useMemo(
		() => ({
			dialogState: dialogState,
			setDialogContext: dispatchDialogState,
		}),
		[dialogState],
	);

	const bottomActions = useMemo(() => (actions ? actions : null), [actions]);

	const handleChange = useCallback(
		(newValue: Descendant[]) => {
			setValue(newValue);

			const isAstChange = editor.operations.some((op) => 'set_selection' !== op.type);
			if (isAstChange) {
				onChange?.(newValue);
			}
		},
		[editor.operations, onChange],
	);

	const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, []);

	// @ts-ignore
	const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, []);

	const handleKeydown = useCallback(
		(event: React.KeyboardEvent<HTMLDivElement>) => {
			onKeydown(event, editor);
		},
		[editor],
	);

	const { wrapperCls, editableCls } = useMemo(
		() => ({
			wrapperCls: `container rounded-lg px-4 py-2 border-[1px] border-slate-600 shadow-lg ${className}`,
			editableCls: 'prose my-3 min-h-16 max-w-none w-full',
		}),
		[className],
	);

	return (
		<DialogContext.Provider value={dialogContextValue}>
			<div className={wrapperCls}>
				<Slate editor={editor} value={slateValue} onChange={handleChange}>
					<Toolbar />
					<Editable
						className={editableCls}
						spellCheck={spellCheck}
						autoFocus={autoFocus}
						placeholder={placeholder}
						renderLeaf={renderLeaf}
						renderElement={renderElement}
						onKeyDown={handleKeydown}
					/>
					<ImageManageDialog />
					<LinkManageDialog />
					{bottomActions}
				</Slate>
			</div>
		</DialogContext.Provider>
	);
};

export { Editor };
