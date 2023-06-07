import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { API_PREFIX_COMPANY } from '../../const';
import { uspacyApi } from '../../helpers/api';
import { usersDb, usersSortedBirthdays } from '../../helpers/users';
import { IUser } from '../../models/user';
import BirthdayCard from './BirthdayCard';

const Container = styled(Box)(({ theme }) => ({
	width: '335px',
	height: '100%',
	maxHeight: '388px',
	backgroundColor: theme.palette.common.white,
	borderRadius: '6px',
	paddingBottom: '16px',
	display: 'flex',
	flexDirection: 'column',
	gap: '8px',
}));

const Title = styled(Typography)(({ theme }) => ({
	fontSize: '18px',
	fontWeight: 500,
	color: theme.palette.text.primary,
}));

const BirthdayWidget: FC = () => {
	const { t } = useTranslation('container-frontend');
	const [users, setUsers] = useState<IUser[]>([]);
	useEffect(() => {
		(async () => {
			const cachedUsers = await usersDb.getItem('data');
			if (Array.isArray(cachedUsers)) return setUsers(cachedUsers);
			const { data } = await uspacyApi.get<{ data: IUser[] }>(`${API_PREFIX_COMPANY}/users`).catch(() => ({ data: { data: [] } }));
			setUsers(data.data);
		})();
	}, []);
	const usersArray = usersSortedBirthdays(users);

	return (
		<Container>
			<Box sx={{ p: '16px 20px 4px 20px' }}>
				<Title>{t('birthdays')}</Title>
			</Box>

			<Box sx={{ overflow: 'auto' }}>
				{usersArray.map((user) => (
					<BirthdayCard key={user.id} user={user} />
				))}
			</Box>
		</Container>
	);
};

export default BirthdayWidget;
