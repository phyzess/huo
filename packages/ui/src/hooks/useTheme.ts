import { Dispatch, SetStateAction, useState } from 'react';

type ThemeType = 'light' | 'dark';

const useTheme = (): [ThemeType, Dispatch<SetStateAction<ThemeType>>] => {
	const [theme, changeTheme] = useState<ThemeType>(() =>
		document.documentElement.getAttribute('data-theme') as ThemeType ?? 'dark'
	);

	return [theme, changeTheme];
};

export { useTheme };
export type { ThemeType };
