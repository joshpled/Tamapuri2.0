const prod = {
	url: {
		BASE_URL: 'https://vast-plains-99264.herokuapp.com/api/v1/',
		AUTH_URL: 'https://vast-plains-99264.herokuapp.com/',
	},
};

const dev = {
	url: {
		BASE_URL: 'http://localhost:3090/api/v1/',
		AUTH_URL: 'http://localhost:3090/',
	},
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
