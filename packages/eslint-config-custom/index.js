module.exports = {
	extends: [
		'alloy',
		'alloy/react',
		'alloy/typescript',
		'turbo',
	],
	plugins: [
		'react-hooks',
	],
	rules: {
		'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
		'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
	},
};
