import React, { useEffect, useState } from "react";
import Button from "../ui/Button/Button";

const App: React.FC = () => {
  const [counter, setcounter] = useState(-1);
  useEffect(() => {
    setcounter(0);
  }, []);
  return (
    <div className="App">
      <div>voici la valeur de counter {counter}</div>
      <hr />
      <Button
        bgcolor="tomato"
        onButtonClick={() => {
          setcounter(counter - 1);
        }}
      >
        -1
      </Button>
      <Button
        bgcolor="skyblue"
        onButtonClick={() => {
          setcounter(counter + 1);
        }}
      >
        +1
      </Button>
    </div>
  );
};
export default App;
