import React, { useState } from "react";

export default function AskUser(props) {
	const [rows, setRows] = useState(5);
	const [columns, setColumns] = useState(5);

	return (
		<div>
			<h3 id="title">
				Hey, Please enter number of rows and colums for your desired table here
			</h3>

			<input
				placeholder="rows"
				value={rows}
				type="number"
				min="5"
				max="15"
				step="1"
				maxLength="2"
				onChange={(e) => setRows(e.target.value)}
			/>
			<input
				min="5"
				step="1"
				max="15"
				type="number"
				maxLength="2"
				value={columns}
				onChange={(e) => setColumns(e.target.value)}
				placeholder="columns"
			/>

			<button
				style={{ backgroundColor: "white" }}
				onClick={() => props.generateTable(rows, columns)}
			>
				Generate Table
			</button>
			<p>Caution: It won't work on mobile, since it's a keyboard game</p>
		</div>
	);
}
