const SECONDS_IN_DAY = 24 * 60 * 60;

// Birthday comes from the API as a unix timestamp of midnight in the timezone where it was saved,
// so in UTC it lands either on the same day (00:00–12:00) or on the evening of the previous one.
// Snapping to the nearest UTC midnight restores the calendar date, and building a local Date
// from its UTC parts keeps that date identical in any timezone the widget is opened in.
export const getBirthdayDate = (birthday: number | string): Date => {
	const timestamp = Math.round(+birthday / SECONDS_IN_DAY) * SECONDS_IN_DAY;
	const date = new Date(timestamp * 1000);

	return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
};

const MONTH_STEP = 100;
const YEAR_STEP = 12 * MONTH_STEP;

const getDayKey = (date: Date): number => date.getMonth() * MONTH_STEP + date.getDate();

// Distance from today to the birthday inside the year cycle: 0 for today,
// and birthdays that already passed wrap to the next year instead of dropping out of the list.
export const getDaysOrder = (birthday: number | string, today: Date): number => {
	const birthdayKey = getDayKey(getBirthdayDate(birthday));
	const todayKey = getDayKey(today);

	return birthdayKey >= todayKey ? birthdayKey - todayKey : birthdayKey - todayKey + YEAR_STEP;
};
