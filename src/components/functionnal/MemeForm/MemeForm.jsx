import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeForm.module.css";
 
const initialState = {};
const MemeForm  = (props) => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    //mount
    return () => {
      //unmount
    };
  }, []);
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form>
        <label for="titre"><h1>Titre</h1></label>
        <br />
        <input name="titre" id="titre" />
        <hr />
        <label for="image"><h2>Image</h2></label>
        <br />
        <select name="image" id="image">
          <option value="-1">No image</option>
        </select>
        <hr />
        <label for="text"><h2>texte</h2></label>
        <br />
        <input name="text" id="text" type="text" />
        <br />
        <label for="x"><h2 style={{display:'inline'}}>x :</h2>
        </label>
        <input className={styles.smallNumber} name="x" id="x" type="number" />
        <label for="y"><h2 style={{display:'inline'}}>y :</h2></label>
        <input className={styles.smallNumber} name="y" id="y" type="number" />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label for="color"><h2 style={{display:'inline'}}>color :</h2></label>
        <input name="color" id="color" type="color" />
        <br />
        <label for="fontSize"><h2 style={{display:'inline'}}>font-size :</h2></label>
        <input className={styles.smallNumber} name="fontSize" id="fontSize" type="number" min="0" />px
        <br />
        <label for="fontWeight"><h2 style={{display:'inline'}}>font-weight :</h2></label>
        <input className={styles.smallNumber} name="fontWeight" id="fontWeight" type="number" min="100" step="100" max="900" />
        <br />
        <input name="underline" id="underline" type="checkbox" />&nbsp;<label for="underline"><h2 style={{display:'inline'}}>underline</h2></label>&nbsp;<h2 style={{display:'inline'}}>/</h2>&nbsp;<label for="italic"><h2 style={{display:'inline'}}>italic</h2></label>&nbsp;<input name="italic" id="italic" type="checkbox" />
        <hr />
        <br />
      </form>
    </div>
  );
};
MemeForm.propTypes = {};
export default MemeForm;