/** @format */

import React from "react";
import styled from "styled-components";

const SelectTime = () => {
	return (
		<label>
			Set time
			<select name="beforeAfter" id="beforeAfter">
				<option value="before">before</option>
				<option value="after">after</option>
			</select>
			<select name="when" id="when">
				<option value="breakfast">breakfast</option>
				<option value="lunch">lunch</option>
				<option value="dinner">dinner</option>
			</select>
		</label>
	);
};
export default SelectTime;
