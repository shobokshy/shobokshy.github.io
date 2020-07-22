/** @jsx jsx */
import { jsx, keyframes, InterpolationWithTheme } from '@emotion/core';
import React from 'react';

interface BrandProps {}

export const Brand: React.FC<BrandProps> = (props) => {
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

	// background: #E6CB3E;
	// background: -webkit-radial-gradient(bottom right, #E6CB3E, #821893);
	// background: -moz-radial-gradient(bottom right, #E6CB3E, #821893);
	// background: radial-gradient(to top left, #E6CB3E, #821893);

	const style: InterpolationWithTheme<any> = {
		margin: 0,
		color: primaryColor,
		background: `-webkit-radial-gradient(bottom right, #b2b1ff, ${primaryColor})`,
		backgroundClip: 'text',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		fontFamily: 'SerifGothicStd-Black',
		fontSize: '7.451rem',
		letterSpacing: -5,
		lineHeight: 1.3,
		userSelect: 'none',
	};

	return (
		<div
			css={{
				display: 'grid',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<h1
				css={{
					...style,
					gridArea: '1/1',
					animation: `${shadow} 3s ease-in-out infinite alternate, ${fill} 5s cubic-bezier(1,0,.44,.91) forwards`,
				}}
			>
				SHOBOKSHY
			</h1>
			<svg
				stroke={primaryColor}
				strokeWidth='2'
				css={{ width: '700px', gridArea: '1/1' }}
			>
				<text
					fill='none'
					x='50%'
					y='50%'
					dx='2px'
					dominantBaseline='central'
					textAnchor='middle'
					css={{
						...style,
						strokeDasharray: 500,
						strokeDashoffset: 500,
						animation: `${dash} 15s linear forwards`,
					}}
				>
					SHOBOKSHY
				</text>
			</svg>
		</div>
	);
};
