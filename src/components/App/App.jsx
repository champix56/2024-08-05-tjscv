import React from "react";
import FlexHThirdGrow from "../layout/FlexHThirdGrow/FlexHThirdGrow";
import Header from "../ui/Header/Header";
import NavBar from "../ui/NavBar/NavBar";
import Footer from "../ui/Footer/Footer";
import { Link, Route, Routes } from "react-router-dom";
import MemeEditor from "../../pages/MemeEditor";
import MemeThumbnail from "../../pages/MemeThumbnail/MemeThumbnail";
import Home from "../../pages/Home";

const App = (props) => {
  return (
    <div className="App">
      <FlexHThirdGrow>
        <Header />

        {/* <NavBar /> */}
        <div><Link to={'/'}>Home</Link> | <Link to={"/new"}>New</Link> | <Link to={"/thumbnail"}>Thumbnail</Link></div>
        <Routes>
          <Route path="/new" element={<MemeEditor />} />
          <Route path="/" element={<Home />} />
          <Route path="/thumbnail" element={<MemeThumbnail />} />
        </Routes>
        <Footer />
      </FlexHThirdGrow>
    </div>
  );
};

export default App;
