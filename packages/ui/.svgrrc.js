// .svgrrc
module.exports = {
	outDir: './src/icons',
	index: true,
	typescript: true,
	expandProps: 'end',
	memo: true,
	filenameCase: 'pascal',
	svgProps: {
		width: '{size}',
		height: '{size}',
		viewBox: '0 0 110 110',
	},
	indexTemplate: require('./templates/svgrIndexTemplate.js'),
	template: require('./templates/svgrTemplate.js'),
};
