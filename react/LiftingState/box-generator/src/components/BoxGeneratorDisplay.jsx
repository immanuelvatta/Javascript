import React from 'react'
import styles from "./BoxGeneratorDisplay.module.css"

const BoxGeneratorDisplay = ({boxInfo}) => {
  
    return (
    <div className={styles.boxContainer}>
      {boxInfo.map((box, index) =>
        <div key={index} className={styles.boxDiv} style={{backgroundColor: `${box.boxColor}`, height: `${box.boxSize}px`, width: `${box.boxSize}px`}}></div>
      )}
    </div>
  )
}

export default BoxGeneratorDisplay