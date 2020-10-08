import React from "react";
import fetchDataNHS from "../utils/api-helpers";

const SearchNHS = () => {
	const [nhsData, setNhsData] = React.useState();

	return (
		<>
			<h1>PILLOW</h1>
			<label htmlFor="search">Search for medicine information</label>
			<input name="search" id="search" type="search" />
			<button>Search</button>
		</>
	);
};

export default SearchNHS;
