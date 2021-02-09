import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Form from "./Form.js";
import Game from "./Game.js";
//create your first component
export function Home() {
	let [firstName, setFirstName] = useState("");
	let [secondName, setSecondName] = useState("");
	let [next, setNext] = useState(false);
	let [winner, setWinner] = useState("");

	const changeState = () => {
		setNext(true);
	};
	return (
		<div>
			<h1 className="main-title">Tic Tac Toe with</h1>
			<div className="main">
				<h2>Pick your weapon</h2>
				<Form
					setFirstName={setFirstName}
					setSecondName={setSecondName}
				/>
				<div className="buttons">
					<button href="" onClick={changeState} className="btnX">
						X
					</button>
					<button href="" onClick={changeState} className="btnX">
						O
					</button>
				</div>
			</div>
			{next ? (
				<Game
					setWinner={setWinner}
					winner={winner}
					firstName={firstName}
					secondName={secondName}
				/>
			) : null}
		</div>
	);
}
