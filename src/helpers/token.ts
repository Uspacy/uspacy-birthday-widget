import { getOrCreateTable } from './db';

const table = getOrCreateTable('tokens');

export const getToken = (): Promise<string> => {
	return table.getItem('token');
};
