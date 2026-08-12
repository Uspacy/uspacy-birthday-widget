import { IUser } from '@uspacy/sdk/lib/models/user';

import { IUserSettings } from '../models/userSettings';
import { getDaysOrder } from './date';

export const getFormattedUserName = (user: IUser, userSettings: IUserSettings): string => {
	const nameFormat = userSettings?.nameFormat || 'first-last';
	switch (nameFormat) {
		case 'first-last':
			return user?.firstName || user?.lastName ? `${user?.firstName || ''} ${user?.lastName || ''}` : 'User';
		case 'last-first':
			return user?.firstName || user?.lastName ? `${user?.lastName || ''} ${user?.firstName || ''}` : 'User';
		case 'first-middle-last':
			return user?.firstName || user?.lastName || user?.patronymic
				? `${user?.firstName || ''} ${user?.patronymic || ''} ${user?.lastName || ''}`
				: 'User';
		case 'last-first-middle':
			return user?.firstName || user?.lastName || user?.patronymic
				? `${user?.lastName || ''} ${user?.firstName || ''} ${user?.patronymic || ''}`
				: 'User';
		default:
			return user?.firstName || user?.lastName ? `${user?.firstName || ''} ${user?.lastName || ''}` : 'User';
	}
};

const VISIBLE_USERS_COUNT = 3;

export const usersSortedBirthdays = (users: IUser[]) => {
	const today = new Date();

	const sortedUsers = users
		.filter((user) => !!user?.birthday && user.active)
		.sort((a, b) => getDaysOrder(a.birthday, today) - getDaysOrder(b.birthday, today));

	const todayBirthdayUsersArray = sortedUsers.filter((user) => getDaysOrder(user.birthday, today) === 0);

	if (todayBirthdayUsersArray.length >= VISIBLE_USERS_COUNT) {
		return todayBirthdayUsersArray;
	}

	return sortedUsers.slice(0, VISIBLE_USERS_COUNT);
};
