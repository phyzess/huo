import { MouseEvent, useCallback, useMemo } from 'react';
import { themeChange } from 'theme-change';
import { useTheme } from '../hooks';
import type { ThemeType } from '../hooks';
import { ScribblesMoon, ScribblesSun } from '../icons';
import type { HuoIcon } from '../icons';

const ThemeSwap = () => {
	const [curTheme, changeTheme] = useTheme();

	const [alternativeTheme, Icon] = useMemo<[ThemeType, HuoIcon]>(
		// @ts-ignore
		() => curTheme === 'light' ? ['dark', ScribblesSun] : ['light', ScribblesMoon],
		[
			curTheme,
		],
	);
	const handleClick = useCallback((e: MouseEvent<HTMLInputElement>) => {
		e.stopPropagation();
		changeTheme(alternativeTheme);
	}, [alternativeTheme, changeTheme]);

	return (
		<label className='btn btn-ghost btn-square btn-sm swap swap-rotate'>
			<input type='checkbox' data-set-theme={alternativeTheme} data-act-class='ACTIVECLASS' onClick={handleClick} />
			<ScribblesSun className='swap-on fill-current w-8 h-8' />
			<ScribblesMoon className='swap-off fill-current w-8 h-8' />
		</label>
	);
};

export { themeChange, ThemeSwap };
