import { E_MARK } from './enums';

const hotkeyFormatMapping: Record<string, E_MARK> = {
	'mod+b': E_MARK.BOLD,
	'mod+i': E_MARK.ITALIC,
	'mod+u': E_MARK.UNDERLINE,
	'mod+`': E_MARK.CODE,
};

enum HOTKEYS {
	TAB = 'tab',
	TAB_REVERT = 'shift+tab',
	ENTER = 'enter',
	SELECT_ALL = 'mod+a',
}

export { hotkeyFormatMapping, HOTKEYS };
