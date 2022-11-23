/* eslint-disable @typescript-eslint/no-require-imports */
const { basename: _basename, extname } = require('path');
const { IconPropsInterfaceTpl, HuoIconInterfaceTpl } = require('./constants');

const typeTpl = `
import { FC, SVGProps } from "react";

${IconPropsInterfaceTpl};

${HuoIconInterfaceTpl};

export type { HuoIcon, HuoIconProps };
`;

const defaultIndexTemplate = (filePaths) => {
	const exportEntries = filePaths.map((filePath) => {
		const basename = _basename(filePath, extname(filePath));
		const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
		return `export { default as ${exportName} } from './${basename}'`;
	});

	const exportEntriesStr = exportEntries.join('\n');

	return `
  ${typeTpl}

  ${exportEntriesStr}
  `;
};

module.exports = defaultIndexTemplate;
