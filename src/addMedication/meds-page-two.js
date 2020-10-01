/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import SelectTime from "./select-time";
import SetSpecificTime from "./SetSpecificTime";

const MedsPageTwo = ({ inputs, handleChange, page }) => {
	let timeArray = [...Array(+inputs.oftenFreq).keys()];
	return (
		<>
			<label>
				How many/much
				<input
					type="number"
					min="1"
					placeholder="e.g 3"
					name="amount"
					value={inputs.amount}
					onChange={handleChange}
				/>
				per dose
			</label>

			<label>
				How often
				<input
					type="number"
					min="0"
					placeholder="e.g 3"
					name="oftenFreq"
					value={inputs.oftenFreq}
					onChange={handleChange}
				/>
				<label>
					a
					<select
						name="oftenUnit"
						value={inputs.oftenUnit}
						onChange={event => {
							handleChange(event);
						}}>
						<option value="day">day</option>
						<option value="week">week</option>
						<option value="month">month</option>
					</select>
				</label>
			</label>

			<button>Set specific time/time of day</button>

			{/* {timeArray.map((x, i) => (
				<SelectTime
					key={i}
					id={i}
					handleChange={handleChange}
					inputs={inputs}
				/>
			))}  */}

			{timeArray.map(x => (
				<SetSpecificTime
					key={x}
					id={x + 1}
					handleChange={handleChange}
					inputs={inputs}
				/>
			))}
		</>
	);
};

export default MedsPageTwo;
