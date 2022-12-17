import { notion } from '@/api/notion';
import { huoLogger } from '@/utils';
import { Button, CustomEditor, Editor, Loading, ScribblesSend } from '@phyzess/huo-ui';
import { useCallback, useMemo, useRef, useState } from 'react';
import { createSeed, pretreatImageBlocks, serialize } from './utils';

const editorLogger = huoLogger.clone({
	tags: ['SeedEditor'],
	options: {
		useTimestamps: true,
	},
});

const SeedEditor = () => {
	const editorRef = useRef<CustomEditor>();
	const [value, setValue] = useState([]);
	const [loading, setLoading] = useState(false);

	const handleSendClick = useCallback(async () => {
		setLoading(true);
		try {
			const { tags, children } = serialize(value);
			const newSeedContent = await pretreatImageBlocks(children);
			const newSeed = createSeed(newSeedContent, tags);
			await notion.getInstance()?.pages.create(newSeed);
			(editorRef.current as CustomEditor).reset();
		} catch (error: any) {
			editorLogger.error(error);
		} finally {
			setLoading(false);
		}
	}, [setLoading, value]);

	const actions = useMemo(
		() => (
			<div className='mt-2 flex justify-end'>
				<Button type='ghost' shape='square' size='sm' onClick={handleSendClick}>
					<ScribblesSend />
				</Button>
			</div>
		),
		[handleSendClick],
	);

	return (
		<Loading loading={loading} fullWidth>
			<Editor
				editorRef={editorRef}
				initialValue={value}
				onChange={(v) => {
					// @ts-ignore
					setValue(v);
				}}
				actions={actions}
			/>
		</Loading>
	);
};

export { SeedEditor };
