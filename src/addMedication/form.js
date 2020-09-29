import React from "react"

function AddMedication() {
    // Add states here

    // The markup for the Step 1 UI
    return(
        <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
            className="form-control"
            id="email"
            name="email"
            type="text"
            placeholder="Enter email"
            value={this.props.email} // Prop: The email input data
            onChange={this.props.handleChange} // Prop: Puts data into state
        />
        </div>
        )
}