/** @format */

const fetchDataNHS = (params, options) => {
	return fetch(process.env.REACT_APP_nhsFetch + "/search" + params, options)
		.then(response => {
			if (!response) {
				const error = new Error("Fetch to Backend Error");
				error.status = response.status;
				throw error;
			} else {
				return response.json();
			}
		})
		.catch(error => {
			return "Something went wrong";
		});
};

export default fetchDataNHS;
