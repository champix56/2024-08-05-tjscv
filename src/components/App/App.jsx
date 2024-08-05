import React from "react";
import Button from "../ui/Button/Button.jsx";
import ButtonStyle from "../ui/Button/Button.module.css";

function App() {
  return (
    <div className="App">
      <Button >Valider</Button>
      <Button >Annuler</Button>
      <Button buttonStyle="warning" ><img src="/cross.png"/>Cancel</Button>
    </div>
  );
}

export default App;
