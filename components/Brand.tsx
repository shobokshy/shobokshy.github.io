/** @jsx jsx */
import { jsx, keyframes, InterpolationWithTheme } from '@emotion/core';
import React from 'react';

interface BrandProps {}

export const Brand: React.FC<BrandProps> = () => {
	const primaryColor = '#4645a3';

	const shadow = keyframes`
		from {
			text-shadow: 0 0 10px ${primaryColor};
		}
		to {
			text-shadow: 0 0 20px ${primaryColor};
		}
	`;

	const dash = keyframes`
        from {
            stroke: #D36582;
        }
		to {
			stroke-dashoffset: 0;
		}
	`;

	const fill = keyframes`
		from{
			opacity: 0;
		}
		to {
			opacity: 1;
		}
    `;

	const style: InterpolationWithTheme<any> = {
		margin: 0,
		background: `-webkit-radial-gradient(bottom right, #b2b1ff, ${primaryColor})`,
		backgroundClip: 'text',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		fontFamily: 'SerifGothicStd-Black',
		fontSize: 'inherit',
		lineHeight: 1.3,
		userSelect: 'none',
		padding: '0px 10px',
	};

	return (
		<div
			css={{
				display: 'grid',
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: 'calc(3rem + 6vw)',
			}}
		>
			<h1
				css={{
					...style,
					gridArea: '1/1',
					animation: `${shadow} 3s ease-in-out infinite alternate, ${fill} 7s cubic-bezier(1,0,.44,.91) forwards`,
					letterSpacing: '-6px',
				}}
			>
				SHOBOKSHY
			</h1>
			<svg
				stroke={primaryColor}
				strokeWidth='2'
				height='100%'
				width='100%'
				css={{ gridArea: '1/1' }}
			>
				<text
					fill='none'
					x='50%'
					y='50%'
					dx='3'
					dominantBaseline='central'
					textAnchor='middle'
					letterSpacing='-6px'
					css={{
						...style,
						strokeDasharray: 600,
						strokeDashoffset: 600,
						animation: `${dash} 15s linear forwards`,
					}}
				>
					SHOBOKSHY
				</text>
			</svg>
		</div>
	);
};
