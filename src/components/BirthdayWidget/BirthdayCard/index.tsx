/* eslint-disable import/no-duplicates */
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import format from 'date-fns/format';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { useUserSettingsContext } from '../../../context/UserSettings';
import { getDataLocale } from '../../../helpers/getDataLocale';
import { getFormattedUserName } from '../../../helpers/users';
import { ReactComponent as CalendarIcon } from '../../../static/images/calendar.svg';
import { IBirthdayCardProps } from './types';

const CardContainer = styled(Box)(() => ({
	padding: '6px 20px',
	display: 'flex',
	gap: '12px',
	alignItems: 'center',
}));

const BirthdayCard: FC<IBirthdayCardProps> = ({ user }) => {
	const { userSettings } = useUserSettingsContext();
	const { t, i18n } = useTranslation('container-frontend');
	const theme = useTheme();
	const [buttonHidden, setButtonHidden] = useState(true);
	const [currentLocale, setCurrentLocale] = useState<Locale>(null);

	useEffect(() => {
		(async () => {
			const locale = await getDataLocale(i18n?.language || 'en-US');
			setCurrentLocale(locale);
		})();
	}, [i18n?.language]);

	const birthdayDate = new Date(user.birthday * 1000);
	const now = new Date();
	const birthday = format(birthdayDate, 'dd MMMM', { locale: currentLocale });
	const isToday = birthdayDate.getMonth() === now.getMonth() && birthdayDate.getDate() === now.getDate();

	const handleMouseOver = () => setButtonHidden(false);
	const handleMouseOut = () => setButtonHidden(true);

	return (
		<CardContainer onMouseOver={isToday ? handleMouseOver : undefined} onMouseOut={isToday ? handleMouseOut : undefined}>
			<Box sx={{ cursor: 'pointer', textDecoration: 'none' }} component={Link} to={`/profile/${user.id}`}>
				<Avatar src={user?.avatar} sx={{ width: '34px', height: '34px' }} />
			</Box>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
				<Box sx={{ cursor: 'pointer', textDecoration: 'none' }} component={Link} to={`/profile/${user.id}`}>
					<Typography sx={{ fontSize: '14px', fontWeight: 500 }}>{getFormattedUserName(user, userSettings)}</Typography>
				</Box>
				<Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
					<CalendarIcon color={isToday ? theme.palette.primary.main : ''} />
					<Typography sx={{ fontSize: '14px', fontWeight: 400, color: isToday && theme.palette.primary.main }}>
						{isToday ? `${t('today')} 🎂` : birthday}
					</Typography>
				</Box>
			</Box>
			<Box sx={{ marginLeft: 'auto' }}>
				{isToday && (
					<Button
						disableRipple
						sx={{
							textTransform: 'capitalize',
							visibility: buttonHidden ? 'hidden' : 'visible',
							'&:hover': { backgroundColor: 'transparent' },
						}}
						component={Link}
						to={`/chat/${user.id}`}
					>
						{t('congratulate')}
					</Button>
				)}
			</Box>
		</CardContainer>
	);
};

export default BirthdayCard;
