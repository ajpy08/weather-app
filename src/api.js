const { VITE_GEO_API_KEY, VITE_GEO_API_URL } = import.meta.env;

export const geoAPIOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': VITE_GEO_API_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = VITE_GEO_API_URL;