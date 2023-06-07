import React from 'react';

import UserSettingsContextProvider from '../../context/UserSettings';
import BirthdayWidget from '../BirthdayWidget';
import { IProps } from './types';

export const App: React.FC<IProps> = ({ userSettings }) => {
	return (
		<React.Suspense>
			<UserSettingsContextProvider userSettings={userSettings}>
				<BirthdayWidget />
			</UserSettingsContextProvider>
		</React.Suspense>
	);
};

export default App;
