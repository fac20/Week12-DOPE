/** @format */

import React from "react";
import styled from "styled-components";
import { CgPill } from "react-icons/cg";
import { RiMedicineBottleLine } from "react-icons/ri";
import { FaSyringe } from "react-icons/fa";
import { Checkbox } from "@material-ui/core";

const MedicationDisplayData = ({ name, strength, unit, amount, type }) => {
	const [iconType, setIconType] = React.useState({
		tablet: <CgPill />,
		liquid: <RiMedicineBottleLine />,
		needle: <FaSyringe />,
	});
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
				<input type="checkbox"></input>
			</label>
		</div>
	);
};

export { MedicationDisplayData };
