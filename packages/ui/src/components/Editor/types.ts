import { CarbonIconType } from '@carbon/icons-react';
import { CSSProperties, MutableRefObject, ReactNode } from 'react';
import { BaseEditor, BaseText, Descendant, Node } from 'slate';
import { HistoryEditor } from 'slate-history';
import { ReactEditor, RenderElementProps, RenderLeafProps } from 'slate-react';
import type { HuoIcon } from '../../icons';
import { UndefinedAble } from '../../tool-types';
import { E_ELEMENT, E_MARK } from './constants';

type TFormat = E_MARK | E_ELEMENT;

/** ******** Toolbar **********/
interface IToolbarButtonProps {
	icon: HuoIcon | CarbonIconType;
	active: boolean;
	tooltip: string;
	editor: CustomEditor;
	focusAfterClick?: boolean;
	onClick: () => void;
}
interface IFormatButtonProps<T = TFormat> extends Pick<IToolbarButtonProps, 'icon' | 'tooltip' | 'focusAfterClick'> {
	format: T;
}

/** ******** Format Mark **********/
interface CustomText extends BaseText {
	[E_MARK.BOLD]?: boolean;
	[E_MARK.ITALIC]?: boolean;
	[E_MARK.UNDERLINE]?: boolean;
	[E_MARK.CODE]?: boolean;
	[E_MARK.STRIKE_THROUGH]?: boolean;
}

/** ******** Format Block **********/
interface IBaseBlockElement<T extends CustomText | IListItemElement | IListElement = CustomText> {
	// used for clearing react duplicated key waring when inserting empty row
	key?: string;
	id?: string;
	children: T[];
}

interface IBaseTextElement extends IBaseBlockElement {
	type: E_ELEMENT.PARAGRAPH | E_ELEMENT.BLOCK_QUOTE | E_ELEMENT.TAG;
}

interface IHeadingElement extends IBaseBlockElement {
	type: E_ELEMENT.HEADING_ONE | E_ELEMENT.HEADING_TWO | E_ELEMENT.HEADING_THREE;
	level: number;
}

interface IListItemElement extends IBaseBlockElement<CustomText | IListItemElement> {
	type: E_ELEMENT.LIST_ITEM;
	parentType: TListType;
}

type TListType = E_ELEMENT.NUMBERED_LIST | E_ELEMENT.BULLETED_LIST;

interface IListElement<T = TListType> extends IBaseBlockElement<IListItemElement | IListElement> {
	type: T;
	id: string;
	level: number;
}

interface IImageElement extends IBaseBlockElement {
	type: E_ELEMENT.IMAGE;
	url: string;
	alt: UndefinedAble<string>;
	id: string;
	name?: string;
	mimeType?: string;
}

interface ILinkElement extends IBaseBlockElement {
	type: E_ELEMENT.LINK;
	url: string;
	label?: string;
}

type CustomElement =
	| IBaseTextElement
	| IHeadingElement
	| IListItemElement
	| IListElement
	| IImageElement
	| ILinkElement;

/** ******** Leaf, Element, Editor **********/

interface CustomRenderLeafProps extends Omit<RenderLeafProps, 'leaf'> {
	leaf: CustomText;
}

interface CustomRenderElementProps<T = CustomElement> extends Omit<RenderElementProps, 'element'> {
	element: T;
}

type CustomEditor =
	& BaseEditor
	& ReactEditor
	& HistoryEditor
	& {
		reset: <T extends Node>(options?: { nodes?: T | T[]; at?: Location }) => void;
	};

interface IEditorProps {
	initialValue?: Descendant[];
	onChange?: (value: Descendant[]) => void;
	placeholder?: string;
	spellCheck?: boolean;
	autoFocus?: boolean;
	actions?: ReactNode;
	className?: string;
	style?: CSSProperties;
	editorRef?: MutableRefObject<UndefinedAble<CustomEditor>>;
}

/** ******** plugin **********/
type TPlugin = (editor: CustomEditor) => CustomEditor;

/** ******** transforms **********/
interface IImage {
	url: string;
	alt?: string;
	name?: string;
	mimeType?: string;
}

export type {
	CustomEditor,
	CustomElement,
	CustomRenderElementProps,
	CustomRenderLeafProps,
	CustomText,
	Descendant,
	IBaseTextElement,
	IEditorProps,
	IFormatButtonProps,
	IHeadingElement,
	IImage,
	IImageElement,
	ILinkElement,
	IListElement,
	IListItemElement,
	IToolbarButtonProps,
	TFormat,
	TListType,
	TPlugin,
};
