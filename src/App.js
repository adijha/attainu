import React, { useState } from 'react'
import './App.css'
import AskUser from './components/AskUser'
import Table from './components/Table'

const App = () => {
	const [rowCount, setRowCount] = useState()
	const [columnCount, setColumnCount] = useState()
	const [showTable, setShowTable] = useState(false)
	const [userPosition, setUserPosition] = useState({})
	const [randomFoodPosition] = useState([])
	const [gameOver, setGameOver] = useState(false)
	const [stepsTakenByUser, setStepsTakenByUser] = useState(0)

	const generateTable = (r, c) => {
		setRowCount(r)
		setColumnCount(c)
		setShowTable(true)
		while (randomFoodPosition.length < c) {
			var cc = Math.trunc(Math.random() * r)
			var rr = Math.trunc(Math.random() * c)
			if (randomFoodPosition.indexOf(rr) === -1)
				randomFoodPosition.push(rr.toString() + cc.toString())
		}

		if (r > c) {
			setUserPosition({
				y: Math.trunc(r / 2),
				x: Math.trunc(c / 2),
			})
		} else {
			setUserPosition({
				y: Math.trunc(r / 2),
				x: Math.trunc((c - 1) / 2),
			})
		}
	}

	return (
		<div className="container">
			{showTable ? (
				<>
					<h4>
						Hi hamster👋
						<br />
						eat fast, grass are limited
						<br />
					</h4>
					<p> Please press arrow keys to move</p>

					{gameOver ? (
						<div>You have taken {stepsTakenByUser} steps for grass</div>
					) : (
						<Table
							r={rowCount}
							c={columnCount}
							randomFoodPosition={randomFoodPosition}
							userPosition={userPosition}
							setUserPosition={setUserPosition}
							setGameOver={setGameOver}
							setStepsTakenByUser={setStepsTakenByUser}
							stepsTakenByUser={stepsTakenByUser}
						/>
					)}
				</>
			) : (
				<AskUser generateTable={generateTable} />
			)}
		</div>
	)
}

export default App
