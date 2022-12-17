import { FC, memo } from 'react';
import { SEED_DEFAULT_TAG } from '../constants';

interface ISeedItemTags {
	tags: string[];
}

const SeedItemTags: FC<ISeedItemTags> = memo(({ tags }) => {
	return (
		<div className='flex justify-start gap-2'>
			{tags
				.filter((tag) => tag !== SEED_DEFAULT_TAG.name)
				.map((tag) => (
					<span className='badge badge-outline badge-accent badge-sm' key={tag}>
						{tag}
					</span>
				))}
		</div>
	);
});

export { SeedItemTags };
