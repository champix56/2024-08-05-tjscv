import React, { useState } from "react";
import FlexWFirstGrow from "../layout/FlexWFirstGrow/FlexWFirstGrow";
import FlexHThirdGrow from "../layout/FlexHThirdGrow/FlexHThirdGrow";
import Header from "../ui/Header/Header";
import NavBar from "../ui/NavBar/NavBar";

import MemeForm from "../functionnal/MemeForm/MemeForm";
import Footer from "../ui/Footer/Footer";
import { MemeSVGViewer, emptyMeme } from "orsys-tjs-meme";

const App = (props) => {
  const [meme, setMeme] = useState(emptyMeme)
  return (
    <div className="App">
      <FlexHThirdGrow>
        <Header />
        <NavBar />
        <FlexWFirstGrow>
          <MemeSVGViewer image={undefined} meme={meme} basePath="" />
          <MemeForm />
        </FlexWFirstGrow>
        <Footer />
      </FlexHThirdGrow>
    </div>
  );
};

export default App;
