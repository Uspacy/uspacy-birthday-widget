export const getBirthdayDate = (birthday: number | string): Date => {
	const date = new Date(+birthday * 1000);

	return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
};
