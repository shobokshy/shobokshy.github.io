import React from 'react';
import { ThemeProvider as TP } from 'emotion-theming';

export const ThemeProvider: React.FC = (props) => (
	<TP theme={{}}>{props.children}</TP>
);
