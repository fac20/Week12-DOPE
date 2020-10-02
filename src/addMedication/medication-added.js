/** @format */

import React from "react";
import { Link } from "react-router-dom";

const MedicationAdded = () => {
	return (
		<div>
			<p>Medication successfully added!</p>
			<Link to="/add-medication">
				<button>Add Another</button>
			</Link>
			<Link to="/">
				<button>Back to home</button>
			</Link>
		</div>
	);
};

export default MedicationAdded;
