import React, { useState, useEffect } from "react";
import Rock from "./icons/Rock";
import Paper from "./icons/Paper";
import Scissors from "./icons/Scissors";
import "./App.css";

const choices = [
  { id: 1, name: "rock", component: Rock },
  { id: 2, name: "paper", component: Paper },
  { id: 3, name: "scissors", component: Scissors },
];
export default function App() {
  const [win, setWin] = useState(0);
  const [loss, setLoss] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }, []);

  const handleUserChoice = (choice) => {
    const chosenChoice = choices.find((c) => c.id == choice);
    setUserChoice(chosenChoice);
    setGameState("win");
  };

  const renderComponent = (choice) => {
    const Component = choice.component;
    return <Component />;
  };
  return (
    <div className="app">
      {/* information goes here */}
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>

        {/* wins vs losses stats */}
        <div className="wins-losses">
          <div className="wins">
            <span className="number">{win}</span>
            <span className="text">{win == 1 ? "Win" : "Wins"}</span>
          </div>

          <div className="losses">
            <span className="number">{loss}</span>
            <span className="text">{win == 1 ? "Loss" : "Losses"}</span>
          </div>
        </div>
      </div>

      {/* the popup to show win/loss/draw */}
      {gameState && (
        <div className={`game-state ${gameState}`}>
          <div>
            <div className="game-state-content">
              <p>{renderComponent(userChoice)}</p>
              <p>you won</p>
              <p>{renderComponent(computerChoice)}</p>
            </div>
          </div>
        </div>
      )}

      <div className="choices">
        {/* choices captions */}
        <div>You</div>
        <div />
        <div>Computer</div>

        {/* buttons for my choice */}
        <div>
          <button className="rock" onClick={() => handleUserChoice(1)}>
            <Rock />
          </button>
          <button className="paper" onClick={() => handleUserChoice(2)}>
            <Paper />
          </button>
          <button className="scissors" onClick={() => handleUserChoice(3)}>
            <Scissors />
          </button>
        </div>

        <div className="vs">vs</div>

        {/* show the computer's choice */}
        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>
    </div>
  );
}
