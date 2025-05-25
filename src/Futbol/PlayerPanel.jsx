import React, { useState } from "react";
import "./PlayerPanel.css";

export default function PlayerPanel() {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => setIsFavorite(!isFavorite);

  return (
    <div className="player-panel">
      <div className="menu-bar">
        <span>Menú</span>
      </div>

      <div className="player-info">
        <h2>PANEL DE JUGADOR</h2>
        <img
          src="https://via.placeholder.com/100"
            alt="Player"
          className="player-photo"
        />
        <p>
          <strong>Nombre del Jugador</strong>
          <br />
          Nombre del equipo
        </p>
      </div>

      <div className="scores-section">
        <h3>Últimas puntuaciones</h3>
        <div className="scores">
          {[0, 0, 0, 0].map((score, i) => (
            <div className="score" key={i}>
              <div className="circle"></div>
              <span>0000</span>
            </div>
          ))}
        </div>
      </div>

      <div className="favorite-section">
        <h3>Agregar a favoritos</h3>
        <div
          className={`star ${isFavorite ? "active" : ""}`}
          onClick={toggleFavorite}
        >
          ★
        </div>
      </div>

      <div className="footer">@football Fantasy</div>
    </div>
  );
}