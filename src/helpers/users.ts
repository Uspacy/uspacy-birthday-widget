import { IUser } from '@uspacy/sdk/lib/models/user';

import { IUserSettings } from '../models/userSettings';
import { getBirthdayDate } from './date';

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

export const usersSortedBirthdays = (users: IUser[]) => {
	const usersWithBirthday = users.filter((el) => el?.birthday);

	const sortedUsers = usersWithBirthday
		.filter((user) => user.active)
		.sort((a, b) => {
			const aMonth = getBirthdayDate(a.birthday).getMonth();
			const bMonth = getBirthdayDate(b.birthday).getMonth();
			const aDay = getBirthdayDate(a.birthday).getDate();
			const bDay = getBirthdayDate(b.birthday).getDate();

			if (aMonth === bMonth) {
				return aDay - bDay;
			}

			return aMonth - bMonth;
		});

	const filteredUsers = sortedUsers.filter((user) => {
		const userBirhdayMonth = getBirthdayDate(user.birthday).getMonth();
		const userBirhdayDate = getBirthdayDate(user.birthday).getDate();

		if (userBirhdayMonth >= new Date().getMonth()) {
			if (userBirhdayMonth === new Date().getMonth()) {
				return userBirhdayDate >= new Date().getDate();
			} else {
				return user;
			}
		}
	});

	const todayBirthdayUsersArray = filteredUsers.filter((user) => {
		const currentMonth = new Date().getMonth();
		const currentDate = new Date().getDate();

		if (getBirthdayDate(user.birthday).getMonth() === currentMonth) {
			return getBirthdayDate(user.birthday).getDate() === currentDate;
		}
	});

	const otherDays = filteredUsers.filter((user) => {
		const currentMonth = new Date().getMonth();
		const currentDate = new Date().getDate();
		const birthdayDate = getBirthdayDate(user.birthday);

		return birthdayDate.getMonth() !== currentMonth || birthdayDate.getDate() !== currentDate;
	});

	const usersArray = () => {
		if (todayBirthdayUsersArray.length <= 2 && !!todayBirthdayUsersArray.length) {
			return [...todayBirthdayUsersArray, ...otherDays.slice(0, 3 - todayBirthdayUsersArray.length)];
		}

		if (todayBirthdayUsersArray.length >= 3) {
			return todayBirthdayUsersArray;
		}

		return filteredUsers.slice(0, 3);
	};

	return usersArray();
};
