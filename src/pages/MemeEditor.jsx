import React from "react";
import FlexWFirstGrow from "../components/layout/FlexWFirstGrow/FlexWFirstGrow";
import MemeSVGViewer from "../components/ui/MemeSVGViewer/MemeSVGViewer";
import MemeForm from "../components/functionnal/MemeForm/MemeForm.connected";

function MemeEditor() {
  return (
    <FlexWFirstGrow>
      <MemeSVGViewer basePath="" />
      <MemeForm />
    </FlexWFirstGrow>
  );
}
export default MemeEditor;
