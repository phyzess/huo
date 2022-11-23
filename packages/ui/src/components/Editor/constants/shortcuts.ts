import { E_ELEMENT } from './enums';

const HEADING_SHORTCUTS = ['#', '##', '###'];

const SHORTCUTS: Record<string, E_ELEMENT> = {
	'*': E_ELEMENT.LIST_ITEM,
	'-': E_ELEMENT.LIST_ITEM,
	'+': E_ELEMENT.LIST_ITEM,
	'>': E_ELEMENT.BLOCK_QUOTE,
	'#': E_ELEMENT.HEADING_ONE,
	'##': E_ELEMENT.HEADING_TWO,
	'###': E_ELEMENT.HEADING_THREE,
};

export { HEADING_SHORTCUTS, SHORTCUTS };
