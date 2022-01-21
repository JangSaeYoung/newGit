import styles from "./Assignment.module.css";
import React, { useState } from "react";

function Assignment() {
  const [color, setColor] = useState(false);  

  const changeColor=() => {
    setColor(color=>!color);
  }

  return(
    <div>
      {color === true ? 
        <div className={styles.trueColor}>True</div> :
        <div className={styles.falseColor}>False</div>}
      <button onClick={changeColor}>색바꾸기</button>
    </div>
  )
}

export default Assignment;