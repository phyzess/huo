import { Loading } from '@phyzess/huo-ui';
import { useVirtualizer } from '@tanstack/react-virtual';
import classnames from 'classnames';
import { memo, useMemo, useRef, useState } from 'react';
import { SEEDS_CLS_PREFIX } from './constants';
import { useSeedsList, useSeedsRetrieve } from './hooks';
import { SeedEditor } from './seedEditor';
import { SeedItem } from './seedItem';

const Seeds = memo(() => {
	const { tags } = useSeedsRetrieve();
	const [filterTag, setFilterTag] = useState('all');
	const { isLoading, seeds } = useSeedsList({ itemNumberPerGroup: 2, filterTag: filterTag });

	const parentRef = useRef(null);

	const rowVirtualizer = useVirtualizer({
		count: seeds.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 260,
	});

	const {
		wrapperCls,
		editorWrapperCls,
		operationBarCls,
		tagSelectCls,
		seedGridWrapperCls,
		seedsContainerCls,
		seedRowCls,
	} = useMemo(() => ({
		wrapperCls: classnames(SEEDS_CLS_PREFIX, 'h-full flex flex-col items-center justify-bettween'),
		editorWrapperCls: classnames(`${SEEDS_CLS_PREFIX}__editor`, 'shrink-0 w-full max-w-5xl mx-auto bg-base-100'),
		operationBarCls: classnames(`${SEEDS_CLS_PREFIX}__operations`, 'flex justify-end w-full max-w-5xl mx-auto py-2'),
		tagSelectCls: classnames(`${SEEDS_CLS_PREFIX}__tags`, 'select select-xs select-accent w-fit min-w-36 max-w-xs'),
		seedGridWrapperCls: classnames(`${SEEDS_CLS_PREFIX}__seeds-grid`, 'flex-1 w-full mt-2 py-2 overflow-auto'),
		seedsContainerCls: classnames(`${SEEDS_CLS_PREFIX}__seeds`, 'relative max-w-5xl mx-auto'),
		seedRowCls: classnames(
			`${SEEDS_CLS_PREFIX}__seed-row`,
			'overflow-hidden absolute top-0 left-0 w-full grid grid-cols-2 gap-4 mb-4 p-[5px]',
		),
	}), []);

	return (
		<div className={wrapperCls}>
			<div className={editorWrapperCls}>
				<SeedEditor />
			</div>
			<div className={operationBarCls}>
				<select
					className={tagSelectCls}
					onChange={(e) => {
						setFilterTag(e.target.value);
					}}
				>
					<option key='all' value='all' selected={filterTag === 'all'}>All</option>
					{tags.map((tag) => (
						<option key={tag.id} value={tag.name} selected={tag.name === filterTag}>{tag.name}</option>
					))}
				</select>
			</div>
			<div className={seedGridWrapperCls} ref={parentRef}>
				<Loading loading={isLoading} fullWidth keepMountLoadingComp={false}>
					<div
						className={seedsContainerCls}
						style={{
							height: `${rowVirtualizer.getTotalSize()}px`,
						}}
					>
						{rowVirtualizer.getVirtualItems().map(({ key, size, start, index }) => (
							<div
								key={key}
								className={seedRowCls}
								style={{
									height: `${size}px`,
									transform: `translateY(${start}px)`,
								}}
							>
								{seeds[index].map(({ id }) => <SeedItem key={id} id={id} />)}
							</div>
						))}
					</div>
				</Loading>
			</div>
		</div>
	);
});

export { Seeds };
