import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '@uspacy/store';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { usersSortedBirthdays } from '../../helpers/users';
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
	const { t } = useTranslation();
	const { data: users, loading } = useAppSelector((state) => state.users);
	const usersArray = usersSortedBirthdays(users);

	if (loading || !usersArray.length) return null;

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
