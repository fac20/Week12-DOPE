import React from "react";
import { fetchDataNHS } from "../utils/api-helpers";
import { DisplayNHS } from "./DisplayNHS";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchNHS = () => {
	const [nhsData, setNHSData] = React.useState();

	const findData = event => {
		event.preventDefault();
		let searchValue = event.target.search.value.toLowerCase();
		fetchDataNHS(searchValue).then(data => {
			setNHSData(data);
		});
	};

	return (
		<>
			<Form onSubmit={findData}>
				<Label htmlFor="search">Search for medicine information</Label>
				<NameInput name="search" id="search" type="search" required />
				<ButtonDiv>
					<Link to="/home">
						<Button type="button">Go back home</Button>
					</Link>
					<Button>Search</Button>
				</ButtonDiv>
			</Form>
			<main>{nhsData ? <DisplayNHS nhsData={nhsData} /> : null}</main>
		</>
	);
};

export { SearchNHS };

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	margin: 0 auto;
`;

const Button = styled.button`
	margin: ${props => (props.margin ? props.margin : null)};
	font-size: 14px;
	font-weight: bold;
	text-decoration: none;
	color: white;
	background: #458fe0;
	box-shadow: 4px 5px #1f70c9;
	border-radius: 30px;
	border: none;
	overflow: hidden;
	width: 100px;
	height: 44px;
	:hover {
		cursor: pointer;
		background: #3d75b3;
		box-shadow: 4px 5px #458fe0;
	}
	:active {
		position: relative;
		top: 3px;
		left: 3px;
	}
`;

const NameInput = styled.input.attrs({ type: "text" })`
	border: 1px solid rgba(0, 0, 0, 0.15);
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
	margin: 10px;
	min-width: 40%;
	height: 25px;
`;

const Label = styled.label`
	font-size: 18px;
	font-weight: bold;
	text-align: center;
	margin: 10px;
`;

const ButtonDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	margin-top: 2rem;
`;
