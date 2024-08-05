import React from "react";
import Button from "../ui/Button/Button.jsx";
function App() {
  return (
    <div className="App">
      <Button >Valider</Button>
      <Button >Annuler</Button>
      <Button ><img src="/cross.png"/>Cancel</Button>
    </div>
  );
}

export default App;
