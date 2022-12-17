const group = <T>(array: T[], subGroupLength: number) => {
	let index = 0;
	const newArray = [];

	while (index < array.length) {
		newArray.push(array.slice(index, index += subGroupLength));
	}

	return newArray;
};

export { group };
