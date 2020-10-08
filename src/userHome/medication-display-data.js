import React from "react";
import styled from "styled-components";
import { db, auth } from "../connection.js";
import tabletPic from "../assets/typePill.png";
import liquidPic from "../assets/typeLiquid.png";
import needlePic from "../assets/typeNeedle.png";

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
	const iconType = {
		tablet: <img src={tabletPic} width="60" height="60" alt="tablet icon" />,
		liquid: <img src={liquidPic} width="60" height="60" alt="liquid icon" />,
		needle: <img src={needlePic} width="60" height="60" alt="needle icon" />,
	};

	const [checked, setChecked] = React.useState(taken);

	const handleCheck = e => {
		setChecked(e.target.checked);
		return db
			.collection("Users")
			.doc(auth().currentUser.email)
			.collection("medication")
			.doc(id)
			.set({ [time_point]: { taken: e.target.checked } }, { merge: true });
	};

	return (
		<MedicineDiv style={checked ? { opacity: 0.3 } : { opacity: 1 }}>
			{iconType[type]}
			<div>
				<MedInfoText>{`${name} - ${strength}${unit}`}</MedInfoText>
				<MedInfoText>
					{`${amount} ${type}`}
					{amount > 1 ? "s" : null}
				</MedInfoText>
				<Label>
					Medicine taken?
					<input
						type="checkbox"
						onChange={handleCheck}
						checked={checked}></input>
				</Label>
			</div>
		</MedicineDiv>
	);
};

export { MedicationDisplayData };

const MedicineDiv = styled.div`
	border-bottom: 1px solid #babfcd;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	position: relative;
`;

const MedInfoText = styled.p`
	margin: 10px;
`;

const Label = styled.label`
	display: inline-block;
	margin-bottom: 10px;
	&::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
`;
