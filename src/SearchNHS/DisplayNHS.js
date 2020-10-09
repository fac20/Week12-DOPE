import React from "react";
import styled from "styled-components";
import errorImage from "./../assets/laptop404.gif";

const DisplayNHS = ({ nhsData }) => {
	if (nhsData === "Something went wrong") {
		return (
			<div>
				<Heading>
					Oops! <br /> We don't have this one in our database.
				</Heading>
				<ErrorImg alt="404" src={errorImage} height="200" />
			</div>
		);
	}

	let sideEffectsObject = nhsData.mainEntityOfPage[0];
	let sideEffectsText = sideEffectsObject.mainEntityOfPage.map(obj => {
		return obj.text.replace("api", "www");
	});

	return (
		<>
			<Container>
				<h3>{nhsData.name}</h3>
				<article>
					{<p dangerouslySetInnerHTML={{ __html: sideEffectsText.join("") }} />}
					<h3>To find out more information, click below </h3>
					<a href={nhsData.url.replace("api", "www")} target="blank">
						<ImgLogo alt="nhsLogo" src={nhsData.author.logo} />
					</a>
				</article>
			</Container>
		</>
	);
};

const ImgLogo = styled.img`
	width: 85%;
`;

const Container = styled.div`
	margin: auto;
	width: 85%;
`;

const ErrorImg = styled.img`
	display: block;
	margin: auto;
`;

const Heading = styled.h3`
	text-align: center;
	line-height: 40px;
`;

const medicineH3 = styled.h3``;
export { DisplayNHS };
