/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Button, Heading } from "./formStyle";
import styled from "styled-components";

const MedicationAdded = () => {
	return (
		<Wrapper>
			<Heading>Medication successfully added!</Heading>
			<ButtonWrapper>
				<FirstButton>
					<Link to="/add-medication">
						<Button>Add Another</Button>
					</Link>
				</FirstButton>
				<Link to="/">
					<Button>Back to home</Button>
				</Link>
			</ButtonWrapper>
		</Wrapper>
	);
};

export default MedicationAdded;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 90px;
`;

const ButtonWrapper = styled.div`
	display: flex;
	margin-top: 90px;
`;

const FirstButton = styled.div`
	display: flex;
	margin-right: 40px;
`;
