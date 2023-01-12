// const api = axios.create({
// 	baseURL: ` https://pokeapi.co/api/v2`
// });

// export default api;

import axios from 'axios';

const prod: boolean = true;

const baseURL = prod ? 'https://pokeapi.co/api/v2' : 'https://pokeapi.co/api/v2';

const axiosInstance = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json'
	}
});

export default axiosInstance;
