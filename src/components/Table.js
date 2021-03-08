import React, { useEffect } from "react";
import useKeyPress from "../hooks/useKeyPress";

const Table = ({
	r,
	c,
	randomFoodPosition,
	userPosition,
	setUserPosition,
	setGameOver,
	setStepsTakenByUser,
	stepsTakenByUser,
}) => {
	const upPress = useKeyPress("ArrowUp");
	const downPress = useKeyPress("ArrowDown");
	const leftPress = useKeyPress("ArrowLeft");
	const rightPress = useKeyPress("ArrowRight");

	useEffect(() => {
		if (upPress) {
			const { x, y } = userPosition;
			if (y !== 0) {
				setUserPosition({ x, y: y - 1 });
				setStepsTakenByUser(stepsTakenByUser + 1);
			}
		}
	}, [upPress]);
	useEffect(() => {
		if (downPress) {
			const { x, y } = userPosition;
			if (y < r - 1) {
				setUserPosition({ x, y: y + 1 });
				setStepsTakenByUser(stepsTakenByUser + 1);
			}
		}
	}, [downPress, r]);
	useEffect(() => {
		if (leftPress) {
			const { x, y } = userPosition;
			if (x !== 0) {
				setUserPosition({ x: x - 1, y });
				setStepsTakenByUser(stepsTakenByUser + 1);
			}
		}
	}, [leftPress]);
	useEffect(() => {
		if (rightPress) {
			const { x, y } = userPosition;
			if (x < c - 1) {
				setUserPosition({ x: x + 1, y });
				setStepsTakenByUser(stepsTakenByUser + 1);
			}
		}
	}, [c, rightPress]);

	const Cell = ({ x, y }) => {
		function consumeFood(x, y) {
			var index = randomFoodPosition.indexOf(x.toString() + y.toString());
			if (index > -1) {
				randomFoodPosition.splice(index, 1);
				if (randomFoodPosition.length === 0) {
					setGameOver(true);
				}
			}
		}
		let currentPosition = x.toString() + y.toString();
		let userorNot =
			currentPosition ===
			userPosition?.x.toString() + userPosition?.y.toString();
		let foodorNot =
			randomFoodPosition.indexOf(x.toString() + y.toString()) !== -1;
		userorNot && foodorNot && consumeFood(x, y);
		return (
      <td className="cell">
        {x+''+y}
				{userorNot && "🐹"}
				{foodorNot && "🌿"}
			</td>
		);
	};
	let rows = [];
	for (let y = 0; y < r; y++) {
		const cells = [];
		for (let x = 0; x < c; x++) {
			cells.push(<Cell x={x} y={y} />);
		}
		rows.push(<tr>{cells}</tr>);
	}
  return (
		<>
			<div>{JSON.stringify(userPosition)}</div>
			<table>{rows}</table>
		</>
	);
};

export default Table;
