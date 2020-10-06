/** @format */

import React from "react";
import styled from "styled-components";
import { CgPill } from "react-icons/cg";
import { RiMedicineBottleLine } from "react-icons/ri";
import { FaSyringe } from "react-icons/fa";

const MedicationDisplayData = ({ name, strength, unit, amount, type }) => {
	const [iconType, setIconType] = React.useState({
		tablet: <CgPill />,
		liquid: <RiMedicineBottleLine />,
		needle: <FaSyringe />,
	});
	return (
		<ul>
			{iconType[type]}
			<li>{`${name} - ${strength}${unit}`}</li>
			<li>
				{`${amount} ${type}`}
				{amount > 1 ? "s" : null}
			</li>
		</ul>
	);
};

export { MedicationDisplayData };
