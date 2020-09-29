/** @format */

import React from "react";
import styled from "styled-components";

const MedsPageOne = ({ inputs, handleChange }) => {
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
				onChange={handleChange}
			/>
			<label for="tablet">Tablet</label>

			<input
				type="radio"
				id="liquid"
				name="type"
				value="liquid"
				onChange={handleChange}
			/>
			<label for="liquid">Liquid</label>

			<input
				type="radio"
				id="needle"
				name="type"
				value="needle"
				onChange={handleChange}
			/>
			<label for="needle">Needle</label>

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

			<label for="unit">Unit:</label>
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
