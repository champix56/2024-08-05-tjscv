import React from "react";
import Button from "../ui/Button/Button.jsx";
import ButtonStyle from "../ui/Button/Button.module.css";

function App() {
  return (
    <div className="App">
      <Button bgcolor="skyblue" color="black">Valider</Button>
      <Button bgcolor="skyblue" color="white" >Annuler</Button>
      <Button style={{textDecoration:'underline', fontWeight:500, fontSize:'25pt'}} ><img src="/cross.png"/>Cancel</Button>
    </div>
  );
}

export default App;
