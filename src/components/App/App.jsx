import React, { useEffect, useState } from "react";
import FlexWFirstGrow from "../layout/FlexWFirstGrow/FlexWFirstGrow";
import FlexHThirdGrow from "../layout/FlexHThirdGrow/FlexHThirdGrow";
import Header from "../ui/Header/Header";
import NavBar from "../ui/NavBar/NavBar";

import MemeForm from "../functionnal/MemeForm/MemeForm.connected";
import Footer from "../ui/Footer/Footer";

import MemeSVGViewer from "../ui/MemeSVGViewer/MemeSVGViewer";
const App = (props) => {
  return (
    <div className="App">
      <FlexHThirdGrow>
        <Header />
        <NavBar />
        <FlexWFirstGrow>
          <MemeSVGViewer basePath="" />
          <MemeForm />
        </FlexWFirstGrow>
        <Footer />
      </FlexHThirdGrow>
    </div>
  );
};

export default App;
