import React, { useState } from "react";
import PlayerPanel from "./Futbol/PlayerPanel";
import PerfilUsuario from "./Perfil/PerfilUsuario";

function App() {
  const [vista, setVista] = useState("perfil"); 

  return (
    <div>
      <button onClick={() => setVista(vista === "perfil" ? "panel" : "perfil")}>
        Cambiar vista
      </button>
      {vista === "perfil" ? <PerfilUsuario /> : <PlayerPanel />}
    </div>
  );
}

export default App;