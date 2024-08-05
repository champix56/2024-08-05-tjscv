import React from "react";
import Button from "../ui/Button/Button.jsx";
function App() {
  return (
    <div className="App">
      <Button >Valider</Button>
      <Button >Annuler</Button>
      <Button style={{textDecoration:'underline'}} bgcolor="skyblue" color="yellow" ><img src="/cross.png"/>Cancel</Button>
    </div>
  );
}

export default App;
