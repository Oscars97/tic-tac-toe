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

	const changeState = () => {
		setNext(true);
	};
	return (
		<div>
			<h1 className="main-title">
				Tic Tac Toe with {firstName} {secondName}
			</h1>
			<div className="main">
				<h2>Pick your weapon</h2>
				<Form
					setFirstName={setFirstName}
					setSecondName={setSecondName}
				/>
				<div className="buttons">
					<a href="#game" onClick={changeState} className="btnX">
						X
					</a>
					<a href="#game" onClick={changeState} className="btnX">
						O
					</a>
				</div>
			</div>
			{next ? <Game id="game" /> : null}
		</div>
	);
}
