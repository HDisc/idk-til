import { createClient } from 'microcms-js-sdk';
import { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } from '$env/static/private';
const client = createClient({
	serviceDomain: MICROCMS_SERVICE_DOMAIN,
	apiKey: MICROCMS_API_KEY
});

//APIの呼び出し
export const getList = async (queries) => {
	return await client.get({ endpoint: 'posts', queries }).catch((err) => console.log(err));
};
export const getDetail = async (contentId, queries) => {
	return await client
		.getListDetail({
			endpoint: `posts`,
			contentId,
			queries
		})
		.catch((err) => console.log(err));
};
