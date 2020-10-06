/** @format */

import React from "react";
import styled from "styled-components";
import { CgPill } from "react-icons/cg";
import { RiMedicineBottleLine } from "react-icons/ri";
import { FaSyringe } from "react-icons/fa";
import { Checkbox } from "@material-ui/core";
import { db, auth } from "../connection.js";

const MedicationDisplayData = ({
	name,
	strength,
	unit,
	amount,
	type,
	id,
	time_point,
	taken,
}) => {
	const [iconType, setIconType] = React.useState({
		tablet: <CgPill />,
		liquid: <RiMedicineBottleLine />,
		needle: <FaSyringe />,
	});

	const [checked, setChecked] = React.useState();

	const handleCheck = e => {
		console.log(e.target.checked);
		setChecked(e.target.checked);
		console.log(checked);
		return db
			.collection("Users")
			.doc(auth().currentUser.email)
			.collection("medication")
			.doc(id)
			.set({ [time_point]: { taken: e.target.checked } }, { merge: true });
	};

	return (
		<div>
			{iconType[type]}
			<p>{`${name} - ${strength}${unit}`}</p>
			<p>
				{`${amount} ${type}`}
				{amount > 1 ? "s" : null}
			</p>
			<label>
				Medicine taken?
				<input type="checkbox" onChange={handleCheck} checked={checked}></input>
			</label>
		</div>
	);
};

export { MedicationDisplayData };
