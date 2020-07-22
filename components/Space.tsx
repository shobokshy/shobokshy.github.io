/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { Children } from 'react';

interface SpaceProps {
	direction: 'horizontal' | 'vertical';
	size?: 'small' | 'medium' | 'large' | 'xLarge';
}

export const Space: React.FC<SpaceProps> = (props) => {
	const { size = 'small' } = props;

	const sizes = {
		small: 16,
		medium: 24,
		large: 32,
		xLarge: 40,
	};

	const renderChildren = () => {
		const childrenCount = Children.count(props.children);

		return Children.map(props.children, (child, index) => {
			if (child)
				return (
					<div
						css={
							index === childrenCount - 1
								? {
										display: 'inline-flex',
								  }
								: {
										display: 'inline-flex',
										[props.direction === 'horizontal'
											? 'marginRight'
											: 'marginBottom']: sizes[size],
								  }
						}
					>
						{child}
					</div>
				);
		});
	};

	return (
		<div
			css={{
				display: 'inline-flex',
				flexDirection:
					props.direction == 'horizontal' ? 'row' : 'column',
				alignItems:
					props.direction === 'horizontal' ? 'center' : undefined,
			}}
		>
			{renderChildren()}
		</div>
	);
};
