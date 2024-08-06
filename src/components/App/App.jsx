import React from "react";
import FlexWFirstGrow from "../layout/FlexWFirstGrow/FlexWFirstGrow";
import FlexHThirdGrow from "../layout/FlexHThirdGrow/FlexHThirdGrow";
import Header from "../ui/Header/Header";
import NavBar from "../ui/NavBar/NavBar";
import MemeSVGViewer from '../ui/MemeSVGViewer/MemeSVGViewer'
import MemeForm from "../functionnal/MemeForm/MemeForm";
import Footer from "../ui/Footer/Footer";

const App = (props) => {
  return (
    <div className="App">
      <FlexHThirdGrow>
        <Header />
        <NavBar />
        <FlexWFirstGrow>
          <MemeSVGViewer />
          <MemeForm />
        </FlexWFirstGrow>
        <Footer />
      </FlexHThirdGrow>
    </div>
  );
};

export default App;
