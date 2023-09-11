import { getList } from '../lib/microcms';

export const load = async () => {
	return await getList();
};

export const ssr = false;
export const prerender = false;
