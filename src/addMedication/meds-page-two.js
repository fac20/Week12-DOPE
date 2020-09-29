/** @format */

import React from "react";
import styled from "styled-components";

const MedsPageTwo = () => {
	return (
		<>
			<label htmlFor="howMany">
				How many/much
				<input type="number" id="howMany" />
				per dose
			</label>

			<label htmlFor="howOften">
				How often
				<input type="text" id="howOften" />a
				<select name="selectHowOften" id="selectHowOften">
					<option value="day">day</option>
					<option value="week">week</option>
					<option value="month">month</option>
				</select>
			</label>

			<label htmlFor="">
				Set time
				<select name="" id="">
					<option value="before">before</option>
					<option value="after">after</option>
				</select>
				<select name="" id="">
					<option value="breakfast">breakfast</option>
					<option value="lunch">lunch</option>
					<option value="dinner">dinner</option>
				</select>
			</label>

			<label htmlFor="">
				Duration
				<input type="text" id="" />
			</label>
		</>
	);
};

export default MedsPageTwo;
