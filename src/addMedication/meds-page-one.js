/** @format */

import React from "react";
import styled from "styled-components";

const MedsPageOne = ({ inputs, handleChange, page }) => {
	return (
		<>
			<h1>Add your medicine</h1>

			<label>
				Name of medicine
				<input
					name="name"
					type="text"
					value={inputs.name}
					onChange={handleChange}
					required
				/>
			</label>

			<label>Type:</label>
			<input
				type="radio"
				id="tablet"
				name="type"
				value="tablet"
				checked={inputs.type === "tablet"}
				onChange={handleChange}
			/>
			<label htmlFor="tablet">Tablet</label>

			<input
				type="radio"
				id="liquid"
				name="type"
				value="liquid"
				checked={inputs.type === "liquid"}
				onChange={handleChange}
			/>
			<label htmlFor="liquid">Liquid</label>

			<input
				type="radio"
				id="needle"
				name="type"
				value="needle"
				checked={inputs.type === "needle"}
				onChange={handleChange}
			/>
			<label htmlFor="needle">Needle</label>

			<label>
				Strength:
				<input
					name="strength"
					type="text"
					value={inputs.strength}
					onChange={handleChange}
					required
				/>
			</label>

			<label htmlFor="unit">Unit:</label>
			<select name="unit" id="unit" value={inputs.unit} onChange={handleChange}>
				<option value="mg">mg</option>
				<option value="ml">ml</option>
				<option value="g">g</option>
			</select>

			<label>
				Description:
				<textarea
					type="textarea"
					name="description"
					value={inputs.description}
					onChange={handleChange}
				/>
			</label>
		</>
	);
};

export { MedsPageOne };
