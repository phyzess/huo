/* eslint-disable @typescript-eslint/no-require-imports */
const { IconPropsInterfaceTpl } = require('./constants');

const replaceOpeningElementAttr = (jsx) => {
	for (const attr of jsx.openingElement.attributes) {
		if (attr.name.name === 'fill') {
			attr.value = {
				type: 'Identifier',
				name: '{color}',
			};
		}
	}
};

const replaceFillAttr = (jsx) => {
	if (!jsx.children || jsx.children.length === 0) {
		return jsx;
	}

	for (const childJsx of jsx.children) {
		if (childJsx.openingElement.attributes && childJsx.openingElement.attributes.length > 0) {
			replaceOpeningElementAttr(childJsx);
		}

		replaceFillAttr(childJsx);
	}

	return jsx;
};

const template = (
	{ imports, interfaces, componentName, props, jsx, exports },
	{ tpl },
) => {
	return tpl`
${imports};

${interfaces};

${IconPropsInterfaceTpl};

const ${componentName} = ({size = 24, color = 'currentColor', ...props}: HuoIconProps) => (
  ${replaceFillAttr(jsx)}
);

${exports};
`;
};

module.exports = template;
